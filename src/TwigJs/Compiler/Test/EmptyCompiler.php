<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class EmptyCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'empty';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler
            ->raw('twig.empty(')
            ->subcompile($node->getNode('node'))
            ->raw(')')
        ;
    }
}