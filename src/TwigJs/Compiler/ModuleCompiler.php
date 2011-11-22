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

namespace TwigJs\Compiler;

use TwigJs\JsCompiler;
use TwigJs\TypeCompilerInterface;

class ModuleCompiler implements TypeCompilerInterface
{
    private $functionName;
    private $constantParent;

    public function getType()
    {
        return 'Twig_Node_Module';
    }

    public function compile(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        if (!$node instanceof \Twig_Node_Module) {
            throw new \RuntimeException(sprintf('$node must be an instanceof of \Module, but got "%s".', get_class($node)));
        }

        $this->compileTemplate($compiler, $node);
    }

    protected function compileTemplate(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $this->compileClassHeader($compiler, $node);

        $this->compileGetParent($compiler, $node);
        $this->compileDisplayHeader($compiler, $node);
        $this->compileDisplayBody($compiler, $node);
        $this->compileDisplayFooter($compiler, $node);

        $compiler->subcompile($node->getNode('blocks'));

        $this->compileMacros($compiler, $node);

        $this->compileGetTemplateName($compiler, $node);

        $this->compileIsTraitable($compiler, $node);
        $this->compileClassFooter($compiler, $node);
    }

    protected function compileGetParent(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler
            ->write("/**\n", " * @inheritDoc\n", " */\n")
            ->write($this->functionName.".prototype.getParent_ = function(context) {\n")
            ->indent()
            ->write('return ')
        ;

        if (null === $node->getNode('parent')) {
            $compiler->repr(false);
        } else {
            $compiler
                ->setTemplateName(true)
                ->subcompile($node->getNode('parent'))
                ->setTemplateName(false)
            ;
        }

        $compiler
            ->raw(";\n")
            ->outdent()
            ->write("};\n\n")
        ;
    }

    protected function compileDisplayBody(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler
            ->enterScope()
            ->subcompile($node->getNode('body'))
            ->leaveScope()
        ;

        if (null !== $node->getNode('parent')) {
            $compiler
                ->write("this.getParent(context).render_(sb, context, twig.extend({}, this.getBlocks(), blocks));\n")
            ;
        }
    }

    protected function compileClassHeader(JsCompiler $compiler, \Twig_NodeInterface $node)
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
            ->write("/**\n * @fileoverview Compiled template for file\n *\n * ".str_replace('*/', '*\\/', $filename)."\n */\n\n")
        ;

        $compiler
            ->write("goog.provide('$functionName');\n\n")
            ->write(
                "/**\n",
                " * @constructor\n",
                " * @param {twig.Environment} env\n",
                " * @extends {twig.Template}\n",
                " */\n"
            )
            ->write("$functionName = function(env) {\n")
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

    protected function compileConstructor(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler->raw("\n");

        $countTraits = count($node->getNode('traits'));
        if ($countTraits) {
            // traits
            foreach ($node->getNode('traits') as $i => $trait) {
                $this->compileLoadTemplate($compiler, $trait->getNode('template'), sprintf('trait_%s', $i));

                $compiler
                    ->addDebugInfo($trait->getNode('template'))
                    ->write(sprintf("if (!trait_%s.isTraitable()) {\n", $i))
                    ->indent()
                    ->write("throw Error('Template \"' + trait_".$i.".getTemplateName() + '\" cannot be used as a trait.');\n")
                    ->outdent()
                    ->write("}\n")
                    ->write(sprintf("var trait_%s_blocks = trait_%s.getBlocks();\n\n", $i, $i))
                ;

                foreach ($trait->getNode('targets') as $key => $value) {
                    $compiler
                        ->write(sprintf("trait_%s_blocks[", $i))
                        ->subcompile($value)
                        ->raw(sprintf("] = trait_%s_blocks[", $i))
                        ->string($key)
                        ->raw(sprintf("]; delete trait_%s_blocks[", $i))
                        ->string($key)
                        ->raw("];\n\n")
                    ;
                }
            }

            $compiler
                ->write("var traits = twig.extend({},\n")
                ->indent()
            ;

            for ($i = 0; $i < $countTraits; $i++) {
                $compiler
                    ->write(sprintf("trait_%s_blocks".($i == $countTraits - 1 ? '' : ',')."\n", $i))
                ;
            }

            $compiler
                ->outdent()
                ->write(");\n")
                ->write("this.setTraits(traits);\n\n")
            ;

            $compiler
                ->write("this.setBlocks(twig.extend({}, traits, {\n")
            ;
        } else {
            $compiler
                ->write("this.setBlocks({\n")
            ;
        }

        // blocks
        $compiler
            ->indent()
        ;

        $first = true;
        foreach ($node->getNode('blocks') as $name => $node) {
            if (!$first) {
                $compiler->raw(",\n");
            }
            $first = false;

            $compiler
                ->write(sprintf("'%s': twig.bind(this.block_%s, this)", $name, $name))
            ;
        }

        if (!$first) {
            $compiler->raw("\n");
        }

        if ($countTraits) {
            $compiler
                ->outdent()
                ->write("}));\n")
            ;
        } else {
            $compiler
                ->outdent()
                ->write("});\n")
            ;
        }
    }

    protected function compileDisplayHeader(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler
            ->write("/**\n", " * @inheritDoc\n", " */\n")
            ->write($this->functionName.".prototype.render_ = function(sb, context, blocks) {\n")
            ->indent()
        ;
    }

    protected function compileDisplayFooter(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler
            ->outdent()
            ->write("};\n\n")
        ;
    }

    protected function compileClassFooter(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
    }

    protected function compileMacros(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler->subcompile($node->getNode('macros'));
    }

    protected function compileGetTemplateName(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        $compiler
            ->write("/**\n", " * @inheritDoc\n", " */\n")
            ->write($this->functionName.".prototype.getTemplateName = function() {\n")
            ->indent()
            ->write('return '.json_encode($this->functionName).";\n")
            ->outdent()
            ->write("};\n\n")
        ;
    }

    protected function compileIsTraitable(JsCompiler $compiler, \Twig_NodeInterface $node)
    {
        // A template can be used as a trait if all of the following is true:
        //   * it has no parent
        //   * it has no macros
        //   * it has no body
        //
        // Put another way, a template can be used as a trait if it
        // only contains blocks and use statements.
        $traitable = null === $node->getNode('parent') && 0 === count($node->getNode('macros'));
        if ($traitable) {
            if (!count($nodes = $node->getNode('body'))) {
                $nodes = new Twig_Node(array($node->getNode('body')));
            }

            foreach ($nodes as $node) {
                if (!count($node)) {
                    continue;
                }

                if ($node instanceof Twig_Node_Text && ctype_space($node->getAttribute('data'))) {
                    continue;
                }

                if ($node instanceof Twig_Node_BlockReference) {
                    continue;
                }

                $traitable = false;
                break;
            }
        }

        $compiler
            ->write("/**\n", " * Returns whether this template can be used as trait.\n", " *\n", " * @return {boolean}\n", " */\n")
            ->write($this->functionName.".prototype.isTraitable = function() {\n")
            ->indent()
            ->write(sprintf("return %s;\n", $traitable ? 'true' : 'false'))
            ->outdent()
            ->write("};\n")
        ;
    }

    public function compileLoadTemplate(JsCompiler $compiler, $node, $var)
    {
        $compiler->isTemplateName = true;
        $compiler
            ->write(sprintf("var %s = this.env_.createTemplate(", $var))
            ->subcompile($node)
            ->raw(");\n")
        ;
        $compiler->isTemplateName = false;
    }
}
