<?php

namespace TwigJs\Compiler\Test;

use TwigJs\JsCompiler;
use TwigJs\TestCompilerInterface;

class NullCompiler extends NoneCompiler
{
    public function getName()
    {
        return 'null';
    }
}