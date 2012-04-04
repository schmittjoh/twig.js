<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class NoneCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'none';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler
            ->raw('(null === ')
            ->subcompile($node->getNode('node'))
            ->raw(')')
        ;
    }
}