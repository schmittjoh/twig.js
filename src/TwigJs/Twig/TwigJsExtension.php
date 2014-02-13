<?php

namespace TwigJs\Twig;

class TwigJsExtension extends \Twig_Extension
{
    public function getTokenParsers()
    {
        return array(new TwigJsTokenParser());
    }

    public function getNodeVisitors()
    {
        return array(new TwigJsNodeVisitor());
    }

    public function getName()
    {
        return 'twig_js';
    }
}
