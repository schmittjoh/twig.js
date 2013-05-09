<?php

/* macros.twig */
class __TwigTemplate_a196fe400f6588a5b4d80c882c4411e8 extends Twig_Template
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
            if (isset($context["link"])) { $_link_ = $context["link"]; } else { $_link_ = null; }
            echo twig_escape_filter($this->env, $_link_, "html", null, true);
            echo "\"";
            // line 3
            if (isset($context["title"])) { $_title_ = $context["title"]; } else { $_title_ = null; }
            if ((!twig_test_empty($_title_))) {
                echo " title=\"";
                if (isset($context["title"])) { $_title_ = $context["title"]; } else { $_title_ = null; }
                echo twig_escape_filter($this->env, $_title_, "html", null, true);
                echo "\"";
            }
            // line 4
            echo ">";
            if (isset($context["content"])) { $_content_ = $context["content"]; } else { $_content_ = null; }
            echo twig_escape_filter($this->env, $_content_, "html", null, true);
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
        return array (  47 => 4,  34 => 2,  21 => 1,  74 => 21,  71 => 19,  68 => 17,  65 => 16,  59 => 13,  56 => 12,  53 => 11,  41 => 5,  12 => 2,  51 => 8,  44 => 6,  39 => 3,  36 => 3,  19 => 1,  20 => 1,);
    }
}
