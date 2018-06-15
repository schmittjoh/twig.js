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

class FilterCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Filter';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Filter) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Filter, but got "%s".',
                    get_class($node)
                )
            );
        }

        $name = $node->getNode('filter')->getAttribute('value');
        if (false === $filter = $compiler->getEnvironment()->getFilter($name)) {
            throw new \Twig_Error_Syntax(sprintf('The filter "%s" does not exist', $name), $node->getTemplateLine());
        }

        if (($filterCompiler = $compiler->getFilterCompiler($name))
                && false !== $filterCompiler->compile($compiler, $node)) {
            return;
        } elseif ($functionName = $compiler->getFilterFunction($name)) {
            $compiler->raw($functionName.'(');
        } else {
            $compiler
                ->raw('this.env_.filter(')
                ->repr($name)
                ->raw(', ')
            ;
        }

        $compiler
            ->raw($filter->needsEnvironment() ? 'this.env_, ' : '')
            ->raw($filter->needsContext() ? 'context, ' : '')
            ->subcompile($node->getNode('node'))
        ;

        foreach ($node->getNode('arguments') as $subNode) {
            $compiler
                ->raw(', ')
                ->subcompile($subNode)
            ;
        }

        $compiler->raw(')');
    }
}
