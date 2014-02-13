<?php

namespace TwigJs\Compiler\Expression;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class MacroCallCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_Expression_MacroCall';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (! $node instanceof \Twig_Node_Expression_MacroCall) {
            throw new \LogicException(sprintf('This compiler does not support the type "%s".', get_class($node)));
        }

        $argsNode = $node->getNode('arguments');
        if (! $argsNode instanceof \Twig_Node_Expression_Array) {
            throw new \LogicException('Did not find args node.');
        }

        $namedNames = array();
        $namedCount = 0;
        $positionalCount = 0;
        foreach ($argsNode->getKeyValuePairs() as $pair) {
            $name = $pair['key']->getAttribute('value');
            if (!is_int($name)) {
                $namedCount++;
                $namedNames[$name] = 1;
            } elseif ($namedCount > 0) {
                throw new \Twig_Error_Syntax(
                    sprintf(
                        'Positional arguments cannot be used after named arguments for macro "%s".',
                        $node->getAttribute('name')
                    ),
                    $node->getLine()
                );
            } else {
                $positionalCount++;
            }
        }

        $compiler
            ->raw('this.callMacro(')
            ->subcompile($node->getNode('template'))
            ->raw(', ')->repr($node->getAttribute('name'))
            ->raw(', ')->subcompile($argsNode)
        ;

        if ($namedCount > 0) {
            $compiler
                ->raw(', ')->repr($namedNames)
                ->raw(', ')->repr($namedCount)
                ->raw(', ')->repr($positionalCount)
            ;
        }

        $compiler
            ->raw(')')
        ;
    }
}
