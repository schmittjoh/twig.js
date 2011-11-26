<?php

/* hello_world.twig */
class __TwigTemplate_ed1f3ea75184b22957868d33e5d3e206 extends Twig_Template
{
    protected function doGetParent(array $context)
    {
        return false;
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "Hello ";
        if (isset($context["name"])) { $_name_ = $context["name"]; } else { $_name_ = null; }
        echo twig_escape_filter($this->env, ((array_key_exists("name", $context)) ? (_twig_default_filter($_name_, "World")) : ("World")), "html", null, true);
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
}
