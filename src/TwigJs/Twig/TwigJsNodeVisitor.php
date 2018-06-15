<?php

namespace TwigJs\Twig;

class TwigJsNodeVisitor implements \Twig_NodeVisitorInterface
{
    private $moduleNode;

    public function enterNode(\Twig_Node $node, \Twig_Environment $env)
    {
        if ($node instanceof \Twig_Node_Module) {
            return $this->moduleNode = $node;
        }

        return $node;
    }

    public function leaveNode(\Twig_Node $node, \Twig_Environment $env)
    {
        if ($node instanceof TwigJsNode) {
            if ($node->hasAttribute('name')) {
                $this->moduleNode->setAttribute(
                    'twig_js_name',
                    $node->getAttribute('name')
                );
            }

            return false;
        }

        return $node;
    }

    public function getPriority()
    {
        return 0;
    }
}
