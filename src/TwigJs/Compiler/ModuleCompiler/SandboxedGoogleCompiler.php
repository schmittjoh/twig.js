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

use TwigJs\JsCompiler;

class SandboxedGoogleCompiler extends GoogleCompiler
{
    public function getType()
    {
        return 'Twig_Node_SandboxedModule';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_SandboxedModule) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_SandboxedModule, but got "%s".',
                    get_class($node)
                )
            );
        }

        parent::compile($compiler, $node);
    }

//     protected function compileDisplayBody(Twig_Compiler $compiler)
//     {
//         if (null === $this->getNode('parent')) {
//             $compiler->write("\$this->checkSecurity();\n");
//         }
//
//         parent::compileDisplayBody($compiler);
//     }
//
//     protected function compileDisplayFooter(Twig_Compiler $compiler)
//     {
//         parent::compileDisplayFooter($compiler);
//
//         $compiler
//             ->write("protected function checkSecurity() {\n")
//             ->indent()
//             ->write("\$this->env->getExtension('sandbox')->checkSecurity(\n")
//             ->indent()
//             ->write(!$this->usedTags ? "array(),\n" : "array('".implode('\', \'', $this->usedTags)."'),\n")
//             ->write(!$this->usedFilters ? "array(),\n" : "array('".implode('\', \'', $this->usedFilters)."'),\n")
//             ->write(!$this->usedFunctions ? "array()\n" : "array('".implode('\', \'', $this->usedFunctions)."')\n")
//             ->outdent()
//             ->write(");\n")
//         ;
//
//         if (null !== $this->getNode('parent')) {
//             $compiler
//                 ->raw("\n")
//                 ->write("\$this->parent->checkSecurity();\n")
//             ;
//         }
//
//         $compiler
//             ->outdent()
//             ->write("}\n\n")
//         ;
//     }
}
