<?php

namespace TwigJs\Tests;

use TwigJs\Twig\TwigJsExtension;
use TwigJs\JsCompiler;

class TemplateGenerationTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @dataProvider getGenerationTests
     */
    public function testGenerate($inputFile, $outputFile)
    {
        $env = new \Twig_Environment();
        $env->addExtension(new \Twig_Extension_Core());
        $env->addExtension(new TwigJsExtension());
        $env->setLoader(new \Twig_Loader_Filesystem(__DIR__.'/Fixture/templates'));
        $env->setCompiler(new JsCompiler($env));

        $source = file_get_contents($inputFile);

        $this->assertEquals(
            file_get_contents($outputFile),
            $env->compileSource($source, $inputFile)
        );
    }

    public function getGenerationTests()
    {
        $tests = array();
        $files = new \RecursiveDirectoryIterator(
            __DIR__ . '/Fixture/templates',
            \RecursiveDirectoryIterator::SKIP_DOTS
        );
        foreach ($files as $file) {
            /** @var $file \SplFileInfo */
            if (!$file->isFile()) {
                continue;
            }

            $tests[] = array(
                $file->getRealPath(),
                __DIR__.'/Fixture/generated/'.basename($file, '.twig').'.js',
            );
        }

        return $tests;
    }
}
