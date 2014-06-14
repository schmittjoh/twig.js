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
use Twig_Loader_Filesystem;

class FullIntegrationTest extends PHPUnit_Framework_TestCase
{
    public function setDnode($dnode, $loop)
    {
        $this->dnode = $dnode;
        $this->loop = $loop;
    }

    /**
     * @test
     * @dataProvider getIntegrationTests
     */
    public function integrationTest($file, $message, $condition, $templates, $exception, $outputs)
    {
        foreach ($outputs as $match) {
            $templateParameters = eval($match[1] . ';');
            $templateSource = $templates['index.twig'];
            $javascript = $this->compileTemplate($templateSource);
            $expectedOutput = trim($match[3], "\n ");
            try {
                $renderedOutput = $this->renderTemplate($javascript, $templateParameters);
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
        $tests = array_map(
            function($file) {
                return $this->loadTest($file);
            },
            array_keys(iterator_to_array($regex))
        );
        return $tests;
    }

    private function loadTest($file)
    {
        $test = file_get_contents($file);

        if (preg_match('/
                --TEST--\s*(.*?)\s*(?:--CONDITION--\s*(.*))?\s*((?:--TEMPLATE(?:\(.*?\))?--(?:.*?))+)\s*(?:--DATA--\s*(.*))?\s*--EXCEPTION--\s*(.*)/sx', $test, $match)) {
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

    private function compileTemplate($source)
    {
        $env = new Twig_Environment();
        $env->addExtension(new Twig_Extension_Core());
        $env->addExtension(new TwigJsExtension());
        $env->setLoader(new Twig_Loader_Filesystem(__DIR__.'/Fixture/integration'));
        $env->setCompiler(new JsCompiler($env));
        $javascript = $env->compileSource($source, 'test');
        return $javascript;
    }

    private function renderTemplate($javascript, $parameters)
    {
        $output = '';
        $this->dnode->connect(7070, function($remote, $connection) use ($javascript, $parameters, &$output) {
            $remote->render($javascript, $parameters, function($rendered) use ($connection, &$output) {
                $output = trim($rendered, "\n");
                $connection->end();
            });
        });
        $this->loop->run();
        return $output;
    }
}
