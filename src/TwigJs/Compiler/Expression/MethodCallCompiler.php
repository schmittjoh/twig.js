<?php

namespace TwigJs\Compiler\Expression;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class MethodCallCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression\\MethodCall';
    }

    public function compile(JsCompiler $compiler, \Twig_Node $node)
    {
        if (!$node instanceof \Twig_Node_Expression_MethodCall) {
            throw new \RuntimeException(
                sprintf(
                    '$node must be an instanceof of \Twig_Node_Expression_MethodCall, but got "%s".',
                    get_class($node)
                )
            );
        }

        $compiler
            ->subcompile($node->getNode('node'))
            ->raw('.')
            ->raw($node->getAttribute('method'))
            ->raw('(')
        ;
        $first = true;
        foreach ($node->getNode('arguments')->getKeyValuePairs() as $pair) {
            if (!$first) {
                $compiler->raw(', ');
            }
            $first = false;

            $compiler->subcompile($pair['value']);
        }
        $compiler->raw(')');
    }
}
