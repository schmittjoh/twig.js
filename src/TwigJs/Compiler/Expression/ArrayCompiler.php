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

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Array) {
            throw new \RuntimeException(
                sprintf('$node must be an instanceof of \Expression_Array, but got "%s".', get_class($node))
            );
        }


        $pairs = $this->getKeyValuePairs($node);

        if ($isList = $this->isList($pairs)) {
            $compiler->raw('[');
        } elseif ($hasDynamicKeys = $this->hasDynamicKeys($pairs)) {
            $compiler->raw('twig.createObj(');
        } else {
            $compiler->raw('{');
        }

        $first = true;
        foreach ($pairs as $pair) {
            if (!$first) {
                $compiler->raw(', ');
            }
            $first = false;

            if ($isList) {
                $compiler->subcompile($pair['value']);
            } elseif ($hasDynamicKeys) {
                $compiler
                    ->subcompile($pair['key'])
                    ->raw(', ')
                    ->subcompile($pair['value'])
                ;
            } else {
                $compiler
                    ->subcompile($pair['key'])
                    ->raw(': ')
                    ->subcompile($pair['value'])
                ;
            }
        }

        if ($isList) {
            $compiler->raw(']');
        } elseif ($hasDynamicKeys) {
            $compiler->raw(')');
        } else {
            $compiler->raw('}');
        }
    }

    private function hasDynamicKeys(array $pairs)
    {
        foreach ($pairs as $pair) {
            if (!$pair['key'] instanceof \Twig_Node_Expression_Constant) {
                return true;
            }
        }

        return false;
    }

    private function isList(array $pairs)
    {
        for ($i=0,$c=count($pairs); $i<$c; $i++) {
            if (!$pairs[$i]['key'] instanceof \Twig_Node_Expression_Constant) {
                return false;
            }

            if ($pairs[$i]['key']->getAttribute('value') !== $i) {
                return false;
            }
        }

        return true;
    }

    private function getKeyValuePairs(\Twig_Node $node)
    {
        $pairs = array();

        foreach (array_chunk($node->getIterator()->getArrayCopy(), 2) as $pair) {
            $pairs[] = array(
                'key'   => $pair[0],
                'value' => $pair[1],
            );
        }

        return $pairs;
    }
}
