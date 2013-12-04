<?php

/* layout.twig */
class __TwigTemplate_9aaa986cffef21138e1fce33237ac67366b91ca80b38d7de01ca7f0ccbbf1ebc extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'body' => array($this, 'block_body'),
            'javascripts' => array($this, 'block_javascripts'),
        );

        $this->macros = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>
    <title>";
        // line 4
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
    ";
        // line 5
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 8
        echo "</head>
<body>
    ";
        // line 10
        $this->displayBlock('body', $context, $blocks);
        // line 11
        echo "    ";
        $this->displayBlock('javascripts', $context, $blocks);
        // line 14
        echo "</body>
</html>";
    }

    // line 4
    public function block_title($context, array $blocks = array())
    {
        echo "bar";
    }

    // line 5
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 6
        echo "    <link rel=\"stylesheet\" href=\"foo.css\" />
    ";
    }

    // line 10
    public function block_body($context, array $blocks = array())
    {
    }

    // line 11
    public function block_javascripts($context, array $blocks = array())
    {
        // line 12
        echo "    <script language=\"javascript\" type=\"text/javascript\" src=\"jquery.js\"></script>
    ";
    }

    public function getTemplateName()
    {
        return "layout.twig";
    }

    public function getDebugInfo()
    {
        return array (  73 => 12,  70 => 11,  65 => 10,  60 => 6,  57 => 5,  51 => 4,  46 => 14,  43 => 11,  41 => 10,  37 => 8,  35 => 5,  31 => 4,  26 => 1,);
    }
}
