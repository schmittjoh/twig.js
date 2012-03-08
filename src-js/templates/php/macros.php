<?php

/* macros.twig */
class __TwigTemplate_2ccab0f85b7bd5a784d846e735cba04f extends Twig_Template
{
    protected function doDisplay(array $context, array $blocks = array())
    {
    }

    // line 1
    public function getlink($link = null, $content = null, $title = null)
    {
        $context = array_merge($this->env->getGlobals(), array(
            "link" => $link,
            "content" => $content,
            "title" => $title,
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
        } catch(Exception $e) {
            ob_end_clean();

            throw $e;
        }

        return ob_get_clean();
    }

    public function getTemplateName()
    {
        return "macros.twig";
    }

    public function isTraitable()
    {
        return false;
    }
}
