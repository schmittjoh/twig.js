<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class DivisibleByCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'divisibleby';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler
            ->raw('0 === ')
            ->subcompile($node->getNode('node'))
            ->raw(' % ')
            ->subcompile($node->getNode('arguments')->getNode(0))
        ;
    }
}