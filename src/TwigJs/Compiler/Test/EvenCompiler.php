<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class EvenCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'even';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler
            ->raw('0 === ')
            ->subcompile($node->getNode('node'))
            ->raw(' % 2')
        ;
    }
}
