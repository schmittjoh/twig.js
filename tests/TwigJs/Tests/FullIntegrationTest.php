<?php

namespace TwigJs\Tests;

use DNode;
use Exception;
use PHPUnit_Framework_TestCase;
use React;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RecursiveRegexIterator;
use RegexIterator;
use TwigJs\Twig\TwigJsExtension;
use TwigJs\JsCompiler;
use Twig_Environment;
use Twig_Extension_Core;
use Twig_Loader_Array;
use Twig_Loader_Chain;
use Twig_Loader_Filesystem;

class FullIntegrationTest extends PHPUnit_Framework_TestCase
{
    public function setDnode($dnode, $loop)
    {
        $this->dnode = $dnode;
        $this->loop = $loop;
    }

    public function setUp()
    {
        $this->arrayLoader = new Twig_Loader_Array(array());
        $this->env = new Twig_Environment();
        $this->env->addExtension(new Twig_Extension_Core());
        $this->env->addExtension(new TwigJsExtension());
        $this->env->setLoader(
            new Twig_Loader_Chain(
                array(
                    $this->arrayLoader,
                    new Twig_Loader_Filesystem(__DIR__.'/Fixture/integration')
                )
            )
        );
        $this->env->setCompiler(new JsCompiler($this->env));
    }

    /**
     * @test
     * @dataProvider getIntegrationTests
     */
    public function integrationTest($file, $message, $condition, $templates, $exception, $outputs)
    {
        foreach ($outputs as $match) {
            $templateParameters = $match[1];
            $templateSource = $templates['index.twig'];
            $javascript = '';
            foreach ($templates as $name => $twig) {
                $this->arrayLoader->setTemplate($name, $twig);
            }
            foreach ($templates as $name => $twig) {
                $javascript .= $this->compileTemplate($twig, $name);
            }
            $expectedOutput = trim($match[3], "\n ");
            try {
                $renderedOutput = $this->renderTemplate("twig.templates['index']", $javascript, $templateParameters);
            } catch (Exception $e) {
                $this->markTestSkipped($e->getMessage());
            }

            $this->assertEquals($expectedOutput, $renderedOutput);
        }
    }

    public function getIntegrationTests()
    {
        $tests = array();
        $directory = new RecursiveDirectoryIterator(__DIR__ . '/Fixture/integration');
        $iterator = new RecursiveIteratorIterator($directory);
        $regex = new RegexIterator($iterator, '/\.test/', RecursiveRegexIterator::GET_MATCH);
        $test = $this;
        $tests = array_map(
            function ($file) use ($test) {
                return $test->loadTest($file);
            },
            array_keys(iterator_to_array($regex))
        );
        return $tests;
    }

    public function loadTest($file)
    {
        $test = file_get_contents($file);

        // @codingStandardsIgnoreStart
        if (preg_match('/--TEST--\s*(.*?)\s*(?:--CONDITION--\s*(.*))?\s*((?:--TEMPLATE(?:\(.*?\))?--(?:.*?))+)\s*(?:--DATA--\s*(.*))?\s*--EXCEPTION--\s*(.*)/sx', $test, $match)) {
            $message = $match[1];
            $condition = $match[2];
            $templates = $this->parseTemplates($match[3]);
            $exception = $match[5];
            $outputs = array(array(null, $match[4], null, ''));
        } elseif (preg_match('/--TEST--\s*(.*?)\s*(?:--CONDITION--\s*(.*))?\s*((?:--TEMPLATE(?:\(.*?\))?--(?:.*?))+)--DATA--.*?--EXPECT--.*/s', $test, $match)) {
            $message = $match[1];
            $condition = $match[2];
            $templates = $this->parseTemplates($match[3]);
            $exception = false;
            preg_match_all('/--DATA--(.*?)(?:--CONFIG--(.*?))?--EXPECT--(.*?)(?=\-\-DATA\-\-|$)/s', $test, $outputs, PREG_SET_ORDER);
        } else {
            throw new InvalidArgumentException(sprintf('Test "%s" is not valid.', $file));
        }
        // @codingStandardsIgnoreStart

        return array(
            $file,
            $message,
            $condition,
            $templates,
            $exception,
            $outputs
        );
    }

    protected static function parseTemplates($test)
    {
        $templates = array();
        preg_match_all('/--TEMPLATE(?:\((.*?)\))?--(.*?)(?=\-\-TEMPLATE|$)/s', $test, $matches, PREG_SET_ORDER);
        foreach ($matches as $match) {
            $templates[($match[1] ? $match[1] : 'index.twig')] = $match[2];
        }

        return $templates;
    }

    private function compileTemplate($source, $name)
    {
        $javascript = $this->env->compileSource($source, $name);
        return $javascript;
    }

    private function renderTemplate($name, $javascript, $parameters)
    {
        $output = '';
        $this->dnode->connect(7070, function ($remote, $connection) use ($name, $javascript, $parameters, &$output) {
            $remote->render($name, $javascript, $parameters, function ($rendered) use ($connection, &$output) {
                $output = trim($rendered, "\n ");
                $connection->end();
            });
        });
        $this->loop->run();
        return $output;
    }
}
