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

class ForCompiler implements TypeCompilerInterface
{
    private $count = 0;

    public function getType()
    {
        return 'Twig_Node_For';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_For) {
            throw new \RuntimeException(sprintf('$node must be an instanceof of \For, but got "%s".', get_class($node)));
        }

        $count = $this->count++;
        $suffix = $count > 0 ? $count : '';
        $seqName = 'seq'.$suffix;
        $keyName = 'k'.$suffix;
        $valueName = 'v'.$suffix;
        $iteratedName = 'iterated'.$suffix;
        $loopName = 'loop'.$suffix;

        if ($count > 0) {
            $compiler->enterScope();
        }

        $compiler
            ->setVar('_seq', $seqName)
            ->setVar('_iterated', $iteratedName)
            ->setVar('loop', $loopName)
            ->addDebugInfo($node)
        ;

        // keep parent reference as some might rely on this
        if (0 === $count) {
            $compiler->write("context['_parent'] = context;\n");
        }

        $compiler
            ->write("var $seqName = ")
//             ->write("\$context['_seq'] = twig_ensure_traversable(")
            ->subcompile($node->getNode('seq'))
//             ->raw(");\n")
            ->raw(";\n")
        ;

        if (null !== $node->getNode('else')) {
            $compiler->write("var $iteratedName = false;\n");
        }

        if ($node->getAttribute('with_loop')) {
            $compiler
                ->write("var $loopName = {\n")
                ->indent()
            ;

            if ($count > 0) {
                $parentSuffix = ($count-1 > 0) ? $count - 1 : '';

                $compiler
                    ->write("'parent': loop$parentSuffix,\n")
                ;
            }

            $compiler
                ->write("'index0': 0,\n")
                ->write("'index': 1,\n")
                ->write("'first': true\n")
                ->outdent()
                ->write("};\n")
            ;

            if (null === $node->getNode('ifexpr')) {
                $compiler
                    ->write("if (twig.countable($seqName)) {\n")
                    ->indent()
                    ->write("var length = twig.count($seqName);\n")
                    ->write("{$loopName}['revindex0'] = length - 1;\n")
                    ->write("{$loopName}['revindex'] = length;\n")
                    ->write("{$loopName}['length'] = length;\n")
                    ->write("{$loopName}['last'] = 1 === length;\n")
                    ->outdent()
                    ->write("}\n")
                ;
            }
        }

        $compiler
            ->write("twig.forEach($seqName, function($valueName, $keyName) {\n")
            ->indent()
            ->write("")
            ->subcompile($node->getNode('key_target'))
            ->raw(" = $keyName;\n")
            ->write("")
            ->subcompile($node->getNode('value_target'))
            ->raw(" = $valueName;\n")
        ;

        if (null !== $node->getNode('ifexpr')) {
            $compiler
                ->write("if (!(")
                ->subcompile($node->getNode('ifexpr'))
                ->raw(")) {\n")
                ->indent()
                ->write("return;\n")
                ->outdent()
                ->write("}\n\n")
            ;
        }

        $compiler
            ->subcompile($node->getNode('body'))
        ;

        if (null !== $node->getNode('else')) {
            $compiler->write("$iteratedName = true;\n");
        }

        if ($node->getAttribute('with_loop')) {
            $compiler
                ->write("++{$loopName}['index0'];\n")
                ->write("++{$loopName}['index'];\n")
                ->write("{$loopName}['first'] = false;\n")
            ;

            if (null === $node->getNode('ifexpr')) {
                $compiler
                    ->write("if ({$loopName}['length']) {\n")
                    ->indent()
                    ->write("--{$loopName}['revindex0'];\n")
                    ->write("--{$loopName}['revindex'];\n")
                    ->write("{$loopName}['last'] = 0 === {$loopName}['revindex0'];\n")
                    ->outdent()
                    ->write("}\n")
                ;
            }
        }

        $compiler
            ->outdent()
            ->write("}, this);\n")
        ;

        if (null !== $node->getNode('else')) {
            $compiler
                ->write("if (!$iteratedName) {\n")
                ->indent()
                ->subcompile($node->getNode('else'))
                ->outdent()
                ->write("}\n")
            ;
        }

        if ($count > 0) {
            $compiler->leaveScope();
        }
        $this->count = $count;
    }
}
