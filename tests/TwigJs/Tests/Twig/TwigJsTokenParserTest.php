<?php

namespace TwigJs\Tests\Twig;

use TwigJs\Twig\TwigJsTokenParser;

class TwigJsTokenParserTest extends \PHPUnit_Framework_TestCase
{
    public function testParse()
    {
        $env = $this->getEnv();
        $sourceString = '{% twig_js name="foo" %}';
        $source = new \Twig_Source($sourceString, 'twig_module_name');
        $stream = $env->tokenize($source);
        $token = $env->parse($stream)->getNode('body')->getNode(0);

        $this->assertInstanceOf('TwigJs\Twig\TwigJsNode', $token);
        $this->assertEquals('foo', $token->getAttribute('name'));
    }

    private function getEnv()
    {
        $env = new \Twig_Environment((new \Twig_Loader_Array(array())));
        $env->addTokenParser(new TwigJsTokenParser());

        return $env;
    }
}
