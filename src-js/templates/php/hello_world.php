<?php

/* hello_world.twig */
class __TwigTemplate_5c9cf7aa7acdd02b73a47de53459f9f4 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
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
        return array (  70 => 12,  67 => 11,  62 => 10,  57 => 6,  54 => 5,  43 => 14,  40 => 11,  32 => 5,  28 => 4,  23 => 1,  72 => 21,  69 => 19,  66 => 17,  64 => 16,  59 => 13,  56 => 12,  53 => 11,  41 => 5,  12 => 2,  20 => 1,  48 => 4,  42 => 5,  36 => 3,  19 => 1,  44 => 6,  38 => 10,  34 => 8,  21 => 1,);
    }
}
