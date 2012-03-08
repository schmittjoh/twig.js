<?php

/* hello_world.twig */
class __TwigTemplate_5be6e86026ba27f32fb794690e2c8914 extends Twig_Template
{
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
