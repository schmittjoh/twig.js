<?php

/* scope.twig */
class __TwigTemplate_5c3909eec5646c237bc769cf6e0c357e extends Twig_Template
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
        $context["example"] = 12345;
        if (false) {
            if (isset($context["example"])) { $_example_ = $context["example"]; } else { $_example_ = null; }
            echo twig_escape_filter($this->env, $_example_, "html", null, true);
        }
        if (isset($context["example"])) { $_example_ = $context["example"]; } else { $_example_ = null; }
        echo twig_escape_filter($this->env, $_example_, "html", null, true);
        echo "
";
    }

    public function getTemplateName()
    {
        return "scope.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,  20 => 1,);
    }
}
