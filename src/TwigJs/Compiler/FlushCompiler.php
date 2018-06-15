<?php

namespace TwigJs\Compiler;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class FlushCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Flush';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Flush) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Flush, but got "%s".',
                    get_class($node)
                )
            );
        }

        throw new \LogicException('Flushing is not supported in Javascript templates.');
    }
}
