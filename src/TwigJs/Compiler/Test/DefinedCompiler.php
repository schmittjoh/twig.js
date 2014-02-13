<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class DefinedCompiler implements TestCompilerInterface
{
    public function getName()
    {
        return 'defined';
    }

    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Test $node)
    {
        $compiler->subcompile($node->getNode('node'));
    }
}
