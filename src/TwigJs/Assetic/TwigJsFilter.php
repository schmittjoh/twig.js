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

namespace TwigJs\Assetic;

use TwigJs\CompileRequestHandler;
use TwigJs\CompileRequest;
use Assetic\Asset\AssetInterface;
use Assetic\Filter\FilterInterface;

class TwigJsFilter implements FilterInterface
{
    private $compileRequestHandler;

    public function __construct(CompileRequestHandler $handler)
    {
        $this->compileRequestHandler = $handler;
    }

    public function filterDump(AssetInterface $asset)
    {
        $values = method_exists($asset, 'getValues') ? $asset->getValues() : array();
        $defines = array();

        if (isset($values['locale'])) {
            $defines['locale'] = $values['locale'];
        }

        $compileRequest = new CompileRequest($asset->getSourcePath(), $asset->getContent(), $defines);
        $asset->setContent($this->compileRequestHandler->process($compileRequest));
    }

    public function filterLoad(AssetInterface $asset)
    {
    }
}