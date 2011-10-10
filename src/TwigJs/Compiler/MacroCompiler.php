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
            throw new \RuntimeException(sprintf('$node must be an instanceof of \Macro, but got "%s".', get_class($node)));
        }

//         $arguments = array();
//         foreach ($this->getNode('arguments') as $argument) {
//             $arguments[] = '$'.$argument->getAttribute('name').' = null';
//         }

//         $compiler
//             ->addDebugInfo($this)
//             ->write(sprintf("public function get%s(%s)\n", $this->getAttribute('name'), implode(', ', $arguments)), "{\n")
//             ->indent()
//         ;

//         if (!count($this->getNode('arguments'))) {
//             $compiler->write("\$context = \$this->env->getGlobals();\n\n");
//         } else {
//             $compiler
//                 ->write("\$context = array_merge(\$this->env->getGlobals(), array(\n")
//                 ->indent()
//             ;

//             foreach ($this->getNode('arguments') as $argument) {
//                 $compiler
//                     ->write('')
//                     ->string($argument->getAttribute('name'))
//                     ->raw(' => $'.$argument->getAttribute('name'))
//                     ->raw(",\n")
//                 ;
//             }

//             $compiler
//                 ->outdent()
//                 ->write("));\n\n")
//             ;
//         }

//         $compiler
//             ->write("ob_start();\n")
//             ->write("try {\n")
//             ->indent()
//             ->subcompile($this->getNode('body'))
//             ->outdent()
//             ->write("} catch(Exception \$e) {\n")
//             ->indent()
//             ->write("ob_end_clean();\n\n")
//             ->write("throw \$e;\n")
//             ->outdent()
//             ->write("}\n\n")
//             ->write("return ob_get_clean();\n")
//             ->outdent()
//             ->write("}\n\n")
//         ;
    }
}
