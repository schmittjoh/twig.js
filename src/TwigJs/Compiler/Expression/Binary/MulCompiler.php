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

use TwigJs\Compiler\Expression\BinaryCompiler;
use TwigJs\JsCompiler;

class MulCompiler extends BinaryCompiler
{
    public function getType()
    {
        return 'Twig_Node_Expression_Binary_Mul';
    }

    protected function operator(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Binary_Mul) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Binary_Mul, but got "%s".',
                    get_class($node)
                )
            );
        }

        return $compiler->raw('*');
    }
}
