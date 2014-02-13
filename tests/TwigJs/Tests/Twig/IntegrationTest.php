<?php

namespace TwigJs\Tests\Twig;

use TwigJs\Twig\TwigJsExtension;

class IntegrationTest extends \PHPUnit_Framework_TestCase
{
    public function testNameIsSetOnModule()
    {
        $env = $this->getEnv();
        $module = $env->parse($env->tokenize('{% twig_js name="foo" %}'));

        $this->assertTrue($module->hasAttribute('twig_js_name'));
        $this->assertEquals('foo', $module->getAttribute('twig_js_name'));
        $this->assertEquals(0, count($module->getNode('body')));
    }

    private function getEnv()
    {
        $env = new \Twig_Environment();
        $env->addExtension(new TwigJsExtension());

        return $env;
    }
}
