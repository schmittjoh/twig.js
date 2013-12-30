<?php

/* scope.twig */
class __TwigTemplate_6c16a53e9ecd87c1c4276ac1be26ad50 extends Twig_Template
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
            echo twig_escape_filter($this->env, (isset($context["example"]) ? $context["example"] : null), "html", null, true);
        }
        echo 3;
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
        return array (  44 => 4,  21 => 1,  70 => 12,  67 => 11,  62 => 10,  57 => 6,  54 => 5,  43 => 14,  40 => 11,  34 => 2,  32 => 5,  28 => 4,  23 => 1,  48 => 4,  42 => 5,  38 => 3,  36 => 2,  19 => 1,  20 => 1,);
    }
}
