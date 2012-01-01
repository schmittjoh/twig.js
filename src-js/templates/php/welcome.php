<?php

/* welcome.twig */
class __TwigTemplate_2547295a140ac5330ced4d5f977bde50 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $_trait_0 = $this->env->loadTemplate("traitable.twig");
        // line 2
        if (!$_trait_0->isTraitable()) {
            throw new Twig_Error_Runtime('Template "'."traitable.twig".'" cannot be used as a trait.');
        }
        $_trait_0_blocks = $_trait_0->getBlocks();

        $this->traits = array_merge(
            $_trait_0_blocks
        );

        $this->blocks = array_merge(
            $this->traits,
            array(
                'javascripts' => array($this, 'block_javascripts'),
                'body' => array($this, 'block_body'),
            )
        );
    }

    protected function doGetParent(array $context)
    {
        return $this->env->resolveTemplate((((!array_key_exists("ajax", $context))) ? ("layout.twig") : ("ajax_layout.twig")));
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["__internal_2547295a140ac5330ced4d5f977bde50_1"] = $this->env->loadTemplate("macros.twig");
        $this->getParent($context)->display($context, array_merge($this->blocks, $blocks));
    }

    // line 5
    public function block_javascripts($context, array $blocks = array())
    {
        // line 6
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "

    <script language=\"javascript\" type=\"text/javascript\" src=\"welcome.js\"></script>
";
    }

    // line 11
    public function block_body($context, array $blocks = array())
    {
        // line 12
        echo "
    <h1>Welcome ";
        // line 13
        if (isset($context["name"])) { $_name_ = $context["name"]; } else { $_name_ = null; }
        echo twig_escape_filter($this->env, ((array_key_exists("name", $context)) ? (_twig_default_filter($_name_, "World")) : ("World")), "html", null, true);
        echo "!</h1>

    <p>";
        // line 16
        if (isset($context["name"])) { $_name_ = $context["name"]; } else { $_name_ = null; }
        if ((!twig_test_empty($_name_))) {
            // line 17
            echo "Some Status.";
        } else {
            // line 19
            echo twig_escape_filter($this->env, $this->getAttribute($context["__internal_2547295a140ac5330ced4d5f977bde50_1"], "link", array("/login", "Please login.", "Login", ), "method"), "html", null, true);
        }
        // line 21
        echo "</p>

";
    }

    public function getTemplateName()
    {
        return "welcome.twig";
    }

    public function isTraitable()
    {
        return false;
    }
}
