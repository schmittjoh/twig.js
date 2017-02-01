<?php

namespace TwigJs\Tests;

use TwigJs\Twig\TwigJsExtension;
use TwigJs\JsCompiler;

class TemplateGenerationTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider getGenerationTests
     */
    public function testGenerate($inputFile, $outputFile, $twice)
    {
        $env = new \Twig_Environment(new \Twig_Loader_Filesystem(__DIR__.'/Fixture/templates'));
        $env->addExtension(new TwigJsExtension());
        $env->setCompiler(new JsCompiler($env));

        $source = file_get_contents($inputFile);

        $internalHash = '19e4402c168b2b967e32502724fd7259940b610e71106e32d1ab38064bc9dbad';
        $normalizeInternal = function ($s) use ($internalHash) {
            $pattern = '__internal_[a-z0-9]*';
            return preg_replace(sprintf('/%s/', $pattern), '__internal_'.$internalHash, $s);
        };

        $this->assertEquals(
            $normalizeInternal(file_get_contents($outputFile)),
            $normalizeInternal($env->compileSource(new \Twig_Source($source, $inputFile)))
        );

        if ($twice) {
            // run twice to ensure we can reuse the compiler
            $this->assertEquals(
                file_get_contents($outputFile),
                $env->compileSource(new \Twig_Source($source, $inputFile))
            );
        }
    }

    public function getGenerationTests()
    {
        $twice = true;
        $tests = array();
        $files = new \RecursiveDirectoryIterator(
            __DIR__ . '/Fixture/templates',
            \RecursiveDirectoryIterator::SKIP_DOTS
        );
        foreach ($files as $file) {
            /** @var $file \SplFileInfo */
            if (!$file->isFile() || 'twig' != $file->getExtension()) {
                continue;
            }

            $tests[basename($file)] = array(
                $file->getRealPath(),
                __DIR__.'/Fixture/generated/'.basename($file, '.twig').'.js',
                $twice,
            );
            $twice = false;
        }

        return $tests;
    }
}
