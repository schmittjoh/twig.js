<?php

/* welcome.twig */
class __TwigTemplate_a8c7a5e9a8e2922fac4a1c87b11dcb2b5b6d4824e43c915c29add216509528d0 extends Twig_Template
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

        $this->macros = array(
        );
    }

    protected function doGetParent(array $context)
    {
        return $this->env->resolveTemplate((((!array_key_exists("ajax", $context))) ? ("layout.twig") : ("ajax_layout.twig")));
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 3
        $context["__internal_4959edb76f68f86a4f4dad86d32f84c5a2e579fdd62090890e3ccbc17254c81e"] = $this->env->loadTemplate("macros.twig");
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
            echo $this->callMacro($context["__internal_4959edb76f68f86a4f4dad86d32f84c5a2e579fdd62090890e3ccbc17254c81e"], "link", array(0 => "/login", 1 => "Please login.", 2 => "Login"));
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
        return array (  75 => 21,  72 => 19,  69 => 17,  67 => 16,  62 => 13,  59 => 12,  56 => 11,  47 => 6,  44 => 5,  39 => 3,  12 => 2,  22 => 1,  23 => 1,  73 => 12,  70 => 11,  65 => 10,  60 => 6,  57 => 5,  51 => 4,  46 => 14,  43 => 11,  41 => 10,  37 => 8,  35 => 5,  31 => 4,  26 => 1,);
    }
}
