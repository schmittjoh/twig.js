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

if (!isset($_SERVER['PLOVR_BIN'])) {
    throw new \RuntimeException('$_SERVER["PLOVR_BIN"] must be set.');
}

function compile($config) {
    $javaBin = isset($_SERVER['JAVA_BIN']) ? $_SERVER['JAVA_BIN'] : 'java';
    $cmd = $javaBin.' -jar '.$_SERVER['PLOVR_BIN'].' build '.$config;
    printf("Executing '%s'...\n", $cmd);

    passthru($cmd, $returnCode);

    if (0 !== $returnCode) {
        printf("Build failed.\n");
        exit(1);
    }
}

$configDir = __DIR__.'/../Resources/config/';
compile($configDir.'compile.js');
compile($configDir.'compile_dev.js');