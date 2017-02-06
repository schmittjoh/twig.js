<?php

/*
 * Copyright 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace TwigJs\Compiler;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class MacroCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Macro';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_Macro) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Macro, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler->enterScope();

        $arguments = array();
        foreach ($node->getNode('arguments') as $name => $argument) {
            if ($argument->hasAttribute('name')) {
                $name = $argument->getAttribute('name');
            }

            $arguments[] = 'opt_'.$name;
            $compiler->setVar($name, 'opt_'.$name);
        }

        $compiler
            ->addDebugInfo($node)
            ->write("/**\n", " * Macro \"".$node->getAttribute('name')."\"\n", " *\n")
        ;

        foreach ($arguments as $arg => $var) {
            $compiler->write(" * @param {*} $var\n");
        }

        $compiler
            ->write(" * @return {string}\n")
            ->write(" */\n")
            ->raw($compiler->templateFunctionName)
            ->raw(".prototype.get")
            ->raw($node->getAttribute('name'))
            ->raw(" = function(".implode(', ', $arguments).") {\n")
            ->indent()
        ;

        if (!count($arguments)) {
            $compiler->write("var context = twig.extend({}, this.env_.getGlobals());\n\n");
        } else {
            $localVarMap = json_encode($compiler->localVarMap);
            foreach ($arguments as $argument) {
                $localVarMap = str_replace('"'.$argument.'"', $argument, $localVarMap);
            }
            $compiler->write("var context = twig.extend({}, $localVarMap, this.env_.getGlobals());\n\n");
        }

        $compiler
            ->write("var sb = new twig.StringBuffer;\n")
            ->subcompile($node->getNode('body'))
            ->raw("\n")
            ->write("return new twig.Markup(sb.toString());\n")
            ->outdent()
            ->write("};\n\n")
            ->leaveScope()
        ;
    }
}
