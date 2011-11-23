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

$dir = realpath($_SERVER['TWIG_LIB'].'/Twig/Node');
$dirLength = strlen($dir);

$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($dir,
        \RecursiveDirectoryIterator::SKIP_DOTS));
foreach ($iterator as $file) {
    $path = $file->getRealPath();
    $subPath = substr($path, $dirLength);

    if (is_file($targetPath = __DIR__.'/../src/TwigJs/Compiler'.dirname($subPath).'/'.basename($subPath, '.php').'Compiler.php')) {
        continue;
    }

    if (!is_dir(dirname($targetPath))) {
        mkdir(dirname($targetPath), 0777, true);
    }

    printf('Updating "%s"...'."\n", $subPath);

    $content = file_get_contents($path);

    $subNamespace = str_replace('/', '\\', substr(dirname($subPath), 1));
    $content = "<?php\n\nnamespace TwigJs\Compiler".($subNamespace ? '\\'.$subNamespace : '').";\n\n"
    			."use TwigJs\JsCompiler;\n"
    			."use TwigJs\TypeCompilerInterface;\n"
    			."\n"
    			."class ".basename($subPath, '.php')."Compiler implements TypeCompilerInterface\n"
    			."{\n"
    			."    public function getType()\n"
    			."    {\n"
    			."        return ".var_export('Twig_Node_'.str_replace('/', '_', substr($subPath, 1, -4)), true).";\n"
    			."    }\n"
    			."\n"
    			."    public function compile(JsCompiler \$compiler, \Twig_NodeInterface \$node)\n"
    			."    {\n"
    			."        if (!\$node instanceof \\Twig_Node_".str_replace('/', '_', substr($subPath, 1, -4)).") {\n"
    			."            throw new \RuntimeException(sprintf('\$node must be an instanceof of \\Twig_Node_".str_replace('/', '_', substr($subPath, 1, -4)).", but got \"%s\".', get_class(\$node)));\n"
    			."        }\n"
    			."\n"
    			."         "
    			.$content;

    file_put_contents($targetPath, $content);
}