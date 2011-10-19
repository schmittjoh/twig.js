<?php

namespace TwigJs;

interface FilterCompilerInterface
{
    function getName();
    function compile(JsCompiler $compiler, \Twig_Node_Expression_Filter $filter);
}