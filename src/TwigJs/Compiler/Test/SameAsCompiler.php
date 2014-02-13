<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class SameAsCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'sameas';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler
            ->raw('(')
            ->subcompile($node->getNode('node'))
            ->raw(' === ')
            ->subcompile($node->getNode('arguments')->getNode(0))
            ->raw(')');
    }
}
