<?php

namespace TwigJs\Compiler\Expression\Test;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class OddCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Test_Odd';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Test_Odd) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Test_Odd, but got "%s".',
                    get_class($node)
                )
            );
        }

        $arguments = $node->hasNode('arguments') ? $node->getNode('arguments') : null;

        $compiler->subcompile(
            new \Twig_Node_Expression_Test(
                $node->getNode('node'),
                $node->getAttribute('name'),
                $arguments,
                $node->getLine()
            )
        );
    }
}
