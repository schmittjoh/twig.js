<?php

namespace TwigJs\Compiler\Expression\Filter;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class DefaultCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_Filter_Default';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_Filter_Default) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_Filter_Default, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler->subcompile($node->getNode('node'));
    }
}
