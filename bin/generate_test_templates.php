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
