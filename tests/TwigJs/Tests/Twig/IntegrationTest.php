<?php

namespace TwigJs\Tests\Twig;

use TwigJs\Twig\TwigJsExtension;

class IntegrationTest extends \PHPUnit_Framework_TestCase
{
    public function testNameIsSetOnModule()
    {
        $env = $this->getEnv();
        $source = '{% twig_js name="foo" %}';
        if (class_exists('Twig_Source')) {
            $source = new \Twig_Source($source, 'twig_module_name');
        }
        $module = $env->parse($env->tokenize($source));

        $this->assertTrue($module->hasAttribute('twig_js_name'));
        $this->assertEquals('foo', $module->getAttribute('twig_js_name'));
        $this->assertEquals(0, count($module->getNode('body')));
    }

    private function getEnv()
    {
        $env = new \Twig_Environment(new \Twig_Loader_Array(array()));
        $env->addExtension(new TwigJsExtension());

        return $env;
    }
}
