<?php

/* layout.twig */
class __TwigTemplate_3da162716be93edc3b815e02ef32b32c extends Twig_Template
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
        return array (  70 => 12,  67 => 11,  62 => 10,  57 => 6,  54 => 5,  43 => 14,  40 => 11,  32 => 5,  28 => 4,  23 => 1,  72 => 21,  69 => 19,  66 => 17,  64 => 16,  59 => 13,  56 => 12,  53 => 11,  41 => 5,  12 => 2,  20 => 1,  48 => 4,  42 => 5,  36 => 3,  19 => 1,  44 => 6,  38 => 10,  34 => 8,  21 => 1,);
    }
}
