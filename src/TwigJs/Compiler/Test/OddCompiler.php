<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class OddCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'odd';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler
            ->raw('1 === ')
            ->subcompile($node->getNode('node'))
            ->raw(' % 2')
        ;
    }
}
