<?php

namespace TwigJs\Compiler;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class DoCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Do';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Do) {
            throw new \RuntimeException(
                sprintf('$node must be an instanceof of \Twig_Node_Do, but got "%s".', get_class($node))
            );
        }

        $compiler
            ->addDebugInfo($node)
            ->write('')
            ->subcompile($node->getNode('expr'))
            ->raw(";\n")
        ;
    }
}
