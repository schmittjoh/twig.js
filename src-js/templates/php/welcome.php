<?php

/* welcome.twig */
class __TwigTemplate_21daf103ae6ec8620d2ed5f1b0d9d02f extends Twig_Template
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
        $context["__internal_762d8a8b78645f1bac6bb1abcb1ac7c506622137"] = $this->env->loadTemplate("macros.twig");
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
        echo twig_escape_filter($this->env, ((array_key_exists("name", $context)) ? (_twig_default_filter((isset($context["name"]) ? $context["name"] : null), "World")) : ("World")), "html", null, true);
        echo "!</h1>

    <p>";
        // line 16
        if ((!twig_test_empty((isset($context["name"]) ? $context["name"] : null)))) {
            // line 17
            echo "Some Status.";
        } else {
            // line 19
            echo $context["__internal_762d8a8b78645f1bac6bb1abcb1ac7c506622137"]->getlink("/login", "Please login.", "Login");
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
        return array (  72 => 21,  69 => 19,  66 => 17,  64 => 16,  59 => 13,  56 => 12,  53 => 11,  44 => 6,  41 => 5,  36 => 3,  12 => 2,  19 => 1,  20 => 1,  70 => 12,  67 => 11,  62 => 10,  57 => 6,  54 => 5,  48 => 4,  43 => 14,  40 => 11,  38 => 10,  34 => 8,  32 => 5,  28 => 4,  23 => 1,);
    }
}
