<?php

namespace TwigJs\Tests;

use DNode;
use PHPUnit_Framework_TestCase;
use React;
use RecursiveDirectoryIterator;
use TwigJs\Twig\TwigJsExtension;
use TwigJs\JsCompiler;
use Twig_Environment;
use Twig_Extension_Core;
use Twig_Loader_Filesystem;

class FullIntegrationTest extends PHPUnit_Framework_TestCase
{
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
            $renderedOutput = $this->renderTemplate($javascript, $templateParameters);

            $this->assertEquals($expectedOutput, $renderedOutput);
        }

        return;


        $this->assertEquals(
            file_get_contents($outputFile),
            $env->compileSource($source, $inputFile)
        );
    }

    public function getIntegrationTests()
    {
        $tests = array();
        $files = new RecursiveDirectoryIterator(
            __DIR__ . '/Fixture/integration',
            RecursiveDirectoryIterator::SKIP_DOTS
        );
        foreach ($files as $file) {
            foreach ($files as $file) {
                if ($file->isFile()) {
                    $tests[] = $this->loadTest($file);
                }
            }
        }
        return $tests;
    }

    private function loadTest($file)
    {
        $test = file_get_contents($file->getRealpath());

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
        $loop = new React\EventLoop\StreamSelectLoop();

        $this->dnode = new DNode\DNode($loop);
        $this->dnode->connect(7070, function($remote, $connection) use ($javascript, $parameters, &$output) {
            $remote->render($javascript, $parameters, function($rendered) use ($connection, &$output) {
                $output = trim($rendered, "\n");
                $connection->end();
            });
        });

        $loop->run();
        return $output;
    }
}
