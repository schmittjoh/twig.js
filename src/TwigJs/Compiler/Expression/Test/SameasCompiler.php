<?php

namespace TwigJs\Compiler\Expression\Test;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class SameasCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Test_Sameas';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Test_Sameas) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Test_Sameas, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler->subcompile(
            new \Twig_Node_Expression_Test(
                $node->getNode('node'),
                $node->getAttribute('name'),
                $node->getNode('arguments'),
                $node->getTemplateLine()
            )
        );
    }
}
