<?php

namespace TwigJs\Compiler;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class ForLoopCompiler implements TypeCompilerInterface
{
    public function getType()
    {
        return 'Twig_Node_ForLoop';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_ForLoop) {
            throw new \RuntimeException(sprintf('$node must be an instanceof of \Twig_Node_ForLoop, but got "%s".', get_class($node)));
        }

        if ($node->getAttribute('else')) {
            $compiler
                ->write("")
                ->subcompile(new \Twig_Node_Expression_Name('_iterated', $node->getLine()))
                ->raw(" = true;\n")
            ;
        }

        if ($node->getAttribute('with_loop')) {
            $compiler
                ->write("++")
                ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                ->raw("['index0'];\n")
                ->write("++")
                ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                ->raw("['index'];\n")
                ->write("")
                ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                ->raw("['first'] = false;\n")
            ;

            if (!$node->getAttribute('ifexpr')) {
                $compiler
                    ->write("if (")
                    ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                    ->raw("['length']) {\n")
                    ->indent()
                    ->write("--")
                    ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                    ->raw("['revindex0'];\n")
                    ->write("--")
                    ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                    ->raw("['revindex'];\n")
                    ->write("")
                    ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                    ->raw("['last'] = 0 === ")
                    ->subcompile(new \Twig_Node_Expression_Name('loop', $node->getLine()))
                    ->raw("['revindex0'];\n")
                    ->outdent()
                    ->write("}\n")
                ;
            }
        }
    }
}
