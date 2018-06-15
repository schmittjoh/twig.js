<?php
namespace TwigJs\Compiler\ModuleCompiler;

use Twig_Node;
use TwigJs\JsCompiler;
use TwigJs\Compiler\ModuleCompiler;
use TwigJs\TypeCompilerInterface;

class AmdCompiler extends ModuleCompiler implements TypeCompilerInterface
{
    /**
     * @var boolean
     */
    private $explicitName;

    public function __construct($explicitName = true)
    {
        $this->explicitName = $explicitName;
    }

    protected function compileClassHeader(JsCompiler $compiler, Twig_Node $node)
    {
        $this->functionName = $functionName = $compiler->templateFunctionName
            = $compiler->getFunctionName($node);

        $parts = explode('.', $functionName);
        array_pop($parts);

        $filename = $node->getAttribute('filename');
        if (!empty($filename)
                && false !== strpos($filename, DIRECTORY_SEPARATOR)) {
            $parts = explode(DIRECTORY_SEPARATOR, realpath($filename));
            $filename = implode(DIRECTORY_SEPARATOR, array_splice($parts, -4));
        }

        $compiler
            ->write("/**\n")
            ->write(" * @fileoverview Compiled template for file\n")
            ->write(" *\n")
            ->write(" * ".str_replace('*/', '*\\/', $filename)."\n")
            ->write(" *\n")
            ->write(" * @suppress {checkTypes|fileoverviewTags}\n")
            ->write(" */\n")
            ->write("\n")
        ;

        if ($this->explicitName) {
            $compiler->write("define('$functionName.twig', ['twig'], function (Twig) {\n");
        } else {
            $compiler->write("define(['twig'], function (Twig) {\n");
        }
        $compiler
            ->indent()
            ->write("\n")
            ->write(
                "/**\n",
                " * @constructor\n",
                " * @param {twig.Environment} env\n",
                " * @extends {twig.Template}\n",
                " */\n"
            )
            ->write("$functionName = function (env) {\n")
            ->indent()
            ->write("twig.Template.call(this, env);\n")
        ;

        if (count($node->getNode('blocks')) || count($node->getNode('traits'))) {
            $this->compileConstructor($compiler, $node);
        }

        $compiler
            ->outdent()
            ->write("};\n")
            ->write("twig.inherits($functionName, twig.Template);\n\n")
        ;
    }

    protected function compileClassFooter(JsCompiler $compiler, \Twig_Node $node)
    {
        $compiler
            ->write("return ".$this->functionName.";\n")
            ->outdent()
            ->write("});");
    }
}
