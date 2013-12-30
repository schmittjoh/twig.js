<?php

/* macros.twig */
class __TwigTemplate_58836c3cfbf133af2f75655f7e89638c extends Twig_Template
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
    }

    // line 1
    public function getlink($_link = null, $_content = null, $_title = null)
    {
        $context = $this->env->mergeGlobals(array(
            "link" => $_link,
            "content" => $_content,
            "title" => $_title,
        ));

        $blocks = array();

        ob_start();
        try {
            // line 2
            echo "<a href=\"";
            echo twig_escape_filter($this->env, (isset($context["link"]) ? $context["link"] : null), "html", null, true);
            echo "\"";
            // line 3
            if ((!twig_test_empty((isset($context["title"]) ? $context["title"] : null)))) {
                echo " title=\"";
                echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : null), "html", null, true);
                echo "\"";
            }
            // line 4
            echo ">";
            echo twig_escape_filter($this->env, (isset($context["content"]) ? $context["content"] : null), "html", null, true);
            echo "</a>
";
        } catch (Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ('' === $tmp = ob_get_clean()) ? '' : new Twig_Markup($tmp, $this->env->getCharset());
    }

    public function getTemplateName()
    {
        return "macros.twig";
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
