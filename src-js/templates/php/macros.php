<?php

/* macros.twig */
class __TwigTemplate_ea58ce2cb24dad6f36ff7f8f50cd803d extends Twig_Template
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
        return array (  21 => 1,  72 => 21,  69 => 19,  66 => 17,  64 => 16,  59 => 13,  56 => 12,  53 => 11,  44 => 4,  41 => 5,  36 => 3,  12 => 2,  19 => 1,  20 => 1,  70 => 12,  67 => 11,  62 => 10,  57 => 6,  54 => 5,  48 => 4,  43 => 14,  40 => 11,  38 => 3,  34 => 2,  32 => 5,  28 => 4,  23 => 1,);
    }
}
