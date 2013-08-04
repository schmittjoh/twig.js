<?php

/* macros.twig */
class __TwigTemplate_46b00b74f2e8d8d93b97e0c7d1c90047dd5621efe0a2a005eebccd51dc7fe233 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );

        $this->macros = array(
            "link" => array(
                'method' => "getLink",
                'arguments' => array(
                    "link" => null,
                    "content" => null,
                    "title" => null,
                ),
            ),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
    }

    // line 1
    public function getLink($_link = null, $_content = null, $_title = null)
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
        return array (  55 => 4,  49 => 3,  45 => 2,  32 => 1,  75 => 21,  72 => 19,  69 => 17,  67 => 16,  62 => 13,  59 => 12,  56 => 11,  47 => 6,  44 => 5,  39 => 3,  12 => 2,  22 => 1,  23 => 1,  73 => 12,  70 => 11,  65 => 10,  60 => 6,  57 => 5,  51 => 4,  46 => 14,  43 => 11,  41 => 10,  37 => 8,  35 => 5,  31 => 4,  26 => 1,);
    }
}
