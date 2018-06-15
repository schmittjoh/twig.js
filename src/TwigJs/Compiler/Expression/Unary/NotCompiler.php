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

namespace TwigJs\Compiler\Expression\Unary;

use TwigJs\Compiler\Expression\UnaryCompiler;
use TwigJs\JsCompiler;

class NotCompiler extends UnaryCompiler
{
    public function getType()
    {
        return 'Twig_Node_Expression_Unary_Not';
    }

    protected function operator(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Unary_Not) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Unary_Not, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler->raw('!');
    }
}
