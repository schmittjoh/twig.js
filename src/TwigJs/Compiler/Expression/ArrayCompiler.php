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

namespace TwigJs\Compiler\Expression;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class ArrayCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Array';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Array) {
            throw new \RuntimeException(sprintf('$node must be an instanceof of \Expression_Array, but got "%s".', get_class($node)));
        }

        // FIXME: Should real JS arrays be supported, i.e. numeric PHP arrays?
        $compiler->raw('{');
        $first = true;
        foreach ($node as $name => $subNode) {
            if (!$first) {
                $compiler->raw(', ');
            }
            $first = false;

            $compiler
                ->repr($name)
                ->raw(': ')
                ->subcompile($subNode)
            ;
        }
        $compiler->raw('}');
    }
}
