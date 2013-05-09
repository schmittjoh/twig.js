<?php

/* welcome.twig */
class __TwigTemplate_6cf61ba9fedc78b0eba1f7343ec77c24 extends Twig_Template
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

        $this->traits = $_trait_0_blocks;

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
        $context["__internal_7220c2a762d5d5ecf78419f4b6e89bd4ebdcc4da"] = $this->env->loadTemplate("macros.twig");
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
            echo $context["__internal_7220c2a762d5d5ecf78419f4b6e89bd4ebdcc4da"]->getlink("/login", "Please login.", "Login");
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

    public function getDebugInfo()
    {
        return array (  74 => 21,  71 => 19,  68 => 17,  65 => 16,  59 => 13,  56 => 12,  53 => 11,  41 => 5,  12 => 2,  51 => 8,  44 => 6,  39 => 4,  36 => 3,  19 => 1,  20 => 1,);
    }
}
