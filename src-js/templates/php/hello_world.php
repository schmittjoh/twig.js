<?php

/* hello_world.twig */
class __TwigTemplate_2e2dc4863a0f81d6834be9b5418092566e877cdcf1d9713034648c7ad19e02cb extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );

        $this->macros = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "Hello ";
        echo twig_escape_filter($this->env, ((array_key_exists("name", $context)) ? (_twig_default_filter((isset($context["name"]) ? $context["name"] : null), "World")) : ("World")), "html", null, true);
        echo "!";
    }

    public function getTemplateName()
    {
        return "hello_world.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  22 => 1,  23 => 1,  73 => 12,  70 => 11,  65 => 10,  60 => 6,  57 => 5,  51 => 4,  46 => 14,  43 => 11,  41 => 10,  37 => 8,  35 => 5,  31 => 4,  26 => 1,);
    }
}
