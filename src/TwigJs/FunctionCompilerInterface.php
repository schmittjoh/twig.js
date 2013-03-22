<?php

/*
 * Copyright 2013 Josiah <josiah@jjs.id.au>
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

namespace TwigJs;

use Twig_Function;
use Twig_Node_Expression_Function;

/**
 * Function Compiler
 *
 * Specialized compiler for function nodes which allows for different
 * compilation logic based on the name of the function.
 *
 * @author Josiah <josiah@jjs.id.au>
 */
interface FunctionCompilerInterface
{
    /**
     * Compiles a twig function for use in javascript and compiles a method call
     * appropriate for the specified node.
     * 
     * @param JsCompiler                    $compiler Javascript twig compiler
     * @param Twig_Node_Expression_Function $node     Node for compilation
     */
    function compile(JsCompiler $compiler, Twig_Node_Expression_Function $node);
}