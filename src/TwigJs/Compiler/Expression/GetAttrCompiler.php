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

class GetAttrCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_GetAttr';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_Expression_GetAttr) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Expression_GetAttr, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler->raw('twig.attr(');

        if ($node->getAttribute('is_defined_test') && $compiler->getEnvironment()->isStrictVariables()) {
            $compiler->subcompile(new \Twig_Node_Expression_Filter(
                $node->getNode('node'),
                new \Twig_Node_Expression_Constant('default', $node->getLine()),
                new \Twig_Node(),
                $node->getLine()
            ));
        } else {
            $compiler->subcompile($node->getNode('node'));
        }

        $compiler
            ->raw(', ')
            ->subcompile($node->getNode('attribute'))
        ;

        $defaultArguments = 0 === ($node->hasNode('arguments') ? count($node->getNode('arguments')) : 0);
        $defaultAccess = \Twig_TemplateInterface::ANY_CALL === $node->getAttribute('type');
        $defaultTest = false == $node->getAttribute('is_defined_test');

        if (!$defaultArguments) {
            $compiler->raw(', ')->subcompile($node->getNode('arguments'));
        } elseif (!$defaultAccess || !$defaultTest) {
            $compiler->raw(', undefined');
        }

        if (!$defaultAccess) {
            $compiler->raw(', ')->repr($node->getAttribute('type'));
        } elseif (!$defaultTest) {
            $compiler->raw(', undefined');
        }

        if (!$defaultTest) {
            $compiler->raw(', '.($node->getAttribute('is_defined_test') ?
                    'true' : 'false'));
        }

        $compiler->raw(')');
    }
}
