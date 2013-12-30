<?php

/*
 * Copyright 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require_once __DIR__.'/../tests/bootstrap.php';

$_SERVER['TWIG_LIB'] = __DIR__ . '/../vendor/twig/twig/lib';
if (!isset($_SERVER['TWIG_LIB'])) {
    throw new \RuntimeException('$_SERVER["TWIG_LIB"] must be set.');
}

$env = new Twig_Environment();
$env->setLoader(new Twig_Loader_Filesystem(array(
    __DIR__.'/../src-js/templates/twig',
)));
$env->addExtension(new Twig_Extension_Core());
$handler = new TwigJs\CompileRequestHandler($env, new TwigJs\JsCompiler($env));

foreach (new RecursiveDirectoryIterator(__DIR__.'/../src-js/templates/twig', RecursiveDirectoryIterator::SKIP_DOTS) as $file) {
    if ('.twig' !== substr($file, -5)) {
        continue;
    }

    $request = new TwigJs\CompileRequest(basename($file), file_get_contents($file));
    file_put_contents(__DIR__.'/../src-js/templates/js/'.basename($file, '.twig').'.js',
        $handler->process($request));
    file_put_contents(__DIR__.'/../src-js/templates/php/'.basename($file, '.twig').'.php',
            $env->compileSource(file_get_contents($file), basename($file)));
}

// port over selected twig integration tests
$testsToPort = array('expressions/array');
$pathToFixtures = realpath($_SERVER['TWIG_LIB'].'/../test/Twig/Tests/Fixtures');
$targetDir = realpath(__DIR__.'/../src-js/templates/integration');
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($pathToFixtures, RecursiveDirectoryIterator::SKIP_DOTS)) as $file) {
    if ('.test' !== substr($file, -5)) {
        continue;
    }

    $testName = str_replace(DIRECTORY_SEPARATOR, '/', substr($file, strlen($pathToFixtures) + 1, -5));
    if (!in_array($testName, $testsToPort, true)) {
        continue;
    }

    // parse test (copy&paste from twig's integrationTest.php)
    $test = file_get_contents($file->getRealpath());
    if (preg_match('/
            --TEST--\s*(.*?)\s*(?:--CONDITION--\s*(.*))?\s*((?:--TEMPLATE(?:\(.*?\))?--(?:.*))+)\s*--EXCEPTION--\s*(.*)/sx', $test, $match)) {
        $message = $match[1];
        $condition = $match[2];
        $templates = parseTemplates($match[3]);
        $exception = $match[4];
        $outputs = array();
    } elseif (preg_match('/--TEST--\s*(.*?)\s*(?:--CONDITION--\s*(.*))?\s*((?:--TEMPLATE(?:\(.*?\))?--(?:.*?))+)--DATA--.*?--EXPECT--.*/s', $test, $match)) {
        $message = $match[1];
        $condition = $match[2];
        $templates = parseTemplates($match[3]);
        $exception = false;
        preg_match_all('/--DATA--(.*?)(?:--CONFIG--(.*?))?--EXPECT--(.*?)(?=\-\-DATA\-\-|$)/s', $test, $outputs, PREG_SET_ORDER);
    } else {
        throw new InvalidArgumentException(sprintf('Test "%s" is not valid.', str_replace($fixturesDir.'/', '', $file)));
    }

    // compile template, and prepare test.html file
    foreach ($templates as $name => $code) {
        $targetPath = $targetDir.'/'.$testName.'/'.$name.'.js';
        @mkdir(dirname($targetPath), 0777, true);
        file_put_contents($targetPath, $handler->process(new TwigJs\CompileRequest($name, $code)));
    }

    foreach ($outputs as $k => $output) {
        $output[3] = trim($output[3]);

        if (0 === $k && 'expressions/array' === $testName) {
            $lines = explode("\n", $output[3]);
            $lines[13] .= 'false';
            $output[3] = implode("\n", $lines);
        }

        $outputs[$k] = $output;
    }

    ob_start();
    include __DIR__.'/test_template.html.php';
    file_put_contents($targetDir.'/'.$testName.'/test.html', ob_get_clean());
}

// update global test file
file_put_contents($targetDir.'/alltests.js', 'var _integrationTests = '.json_encode(array_map(function($name) {
    return 'templates/integration/'.$name.'/test.html';
}, $testsToPort)).';');

function parseTemplates($test) {
    $templates = array();
    preg_match_all('/--TEMPLATE(?:\((.*?)\))?--(.*?)(?=\-\-TEMPLATE|$)/s', $test, $matches, PREG_SET_ORDER);
    foreach ($matches as $match) {
        $templates[($match[1] ? $match[1] : 'index.twig')] = $match[2];
    }

    return $templates;
}

