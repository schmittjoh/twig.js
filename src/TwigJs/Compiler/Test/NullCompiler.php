<?php

namespace TwigJs\Compiler\Test;

class NullCompiler extends NoneCompiler
{
    public function getName()
    {
        return 'null';
    }
}
