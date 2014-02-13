<?php

namespace TwigJs;

interface FilterCompilerInterface
{
    public function getName();
    public function compile(JsCompiler $compiler, \Twig_Node_Expression_Filter $filter);
}
