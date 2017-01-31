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

namespace TwigJs\Compiler\ModuleCompiler;

use Twig_Node;
use TwigJs\JsCompiler;
use TwigJs\Compiler\ModuleCompiler;
use TwigJs\TypeCompilerInterface;

class GoogleCompiler extends ModuleCompiler implements TypeCompilerInterface
{
    private $constantParent;

    protected function compileClassHeader(JsCompiler $compiler, Twig_Node $node)
    {
        $this->functionName = $functionName = $compiler->templateFunctionName
            = $compiler->getFunctionName($node);

        $parts = explode('.', $functionName);
        array_pop($parts);

        $filename = $node->getTemplateName();
        if (!empty($filename)
                && false !== strpos($filename, DIRECTORY_SEPARATOR)) {
            $parts = explode(DIRECTORY_SEPARATOR, realpath($filename));
            $filename = implode(DIRECTORY_SEPARATOR, array_splice($parts, -4));
        }

        $compiler
            ->write("/**\n")
            ->write(" * @fileoverview Compiled template for file\n")
            ->write(" *\n")
            ->write(" * ".str_replace('*/', '*\\/', $filename)."\n")
            ->write(" *\n")
            ->write(" * @suppress {checkTypes|fileoverviewTags}\n")
            ->write(" */\n")
            ->write("\n")
        ;

        $compiler
            ->write("goog.provide('$functionName');\n")
            ->write("\n")
            ->write("goog.require('twig');\n")
            ->write("goog.require('twig.filter');\n")
            ->write("\n")
            ->write(
                "/**\n",
                " * @constructor\n",
                " * @param {twig.Environment} env\n",
                " * @extends {twig.Template}\n",
                " */\n"
            )
            ->write("$functionName = function(env) {\n")
            ->indent()
            ->write("twig.Template.call(this, env);\n")
        ;

        if (count($node->getNode('blocks')) || count($node->getNode('traits'))) {
            $this->compileConstructor($compiler, $node);
        }

        $compiler
            ->outdent()
            ->write("};\n")
            ->write("twig.inherits($functionName, twig.Template);\n\n")
        ;
    }

    protected function compileClassFooter(JsCompiler $compiler, Twig_Node $node)
    {
    }
}
