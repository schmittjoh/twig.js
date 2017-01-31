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

class NameCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Name';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Name) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Expression_Name, but got "%s".',
                    get_class($node)
                )
            );
        }

        $name = $node->getAttribute('name');

        if ($node->getAttribute('is_defined_test')) {
            if ($node->isSpecial()) {
                $compiler->repr(true);
            } else {
                $compiler->raw('(')->repr($name)->raw(' in context)');
            }
        } elseif ($node->isSpecial()) {
            static $specialVars = array(
                '_self' => 'this',
                '_context' => 'context',
                '_charset' => 'this.env_.getCharset()',
            );

            if (!isset($specialVars[$name])) {
                throw new \RuntimeException(
                    sprintf(
                        'The special var "%s" is not supported by the NameCompiler.',
                        $name
                    )
                );
            }

            $compiler->raw($specialVars[$name]);
        } else {
            if (isset($compiler->localVarMap[$name])) {
                $compiler->raw($compiler->localVarMap[$name]);

                return;
            }

            // FIXME: Add strict behavior?
            //        see Template::getContext()
            $compiler
                ->raw('(')
                ->string($name)
                ->raw(' in context ? context[')
                ->string($name)
                ->raw('] : null)')
            ;
        }
    }
}
