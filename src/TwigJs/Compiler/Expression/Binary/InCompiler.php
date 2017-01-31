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

namespace TwigJs\Compiler\Expression\Binary;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class InCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Binary_In';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Binary_In) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Binary_In, but got "%s".',
                    get_class($node)
                )
            );
        }

        // order left,right is reversed in JsCompiler compared to Twig_Compiler
        // since the twig.contains filter takes reverse arguments to follow
        // Google Closure conventions
        $compiler
            ->raw('twig.contains(')
            ->subcompile($node->getNode('right'))
            ->raw(', ')
            ->subcompile($node->getNode('left'))
            ->raw(')')
        ;
    }
}
