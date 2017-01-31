<?php

namespace TwigJs\Compiler\Expression\Test;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class DefinedCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Test_Defined';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Test_Defined) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Test_Defined, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler->subcompile(
            new \Twig_Node_Expression_Test(
                $node->getNode('node'),
                $node->getAttribute('name'),
                $node->hasNode('arguments') ? $node->getNode('arguments') : null,
                $node->getLine()
            )
        );
    }
}
