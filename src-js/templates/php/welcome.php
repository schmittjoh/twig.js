<?php

/* welcome.twig */
class __TwigTemplate_bfd499f9d482b3c6060c91232c6b94b7 extends Twig_Template
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
        $context["__internal_fa22a5809e41033cc31eb0967cad6eaaacef9fc6"] = $this->env->loadTemplate("macros.twig");
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
            echo $context["__internal_fa22a5809e41033cc31eb0967cad6eaaacef9fc6"]->getlink("/login", "Please login.", "Login");
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
        return array (  72 => 21,  69 => 19,  66 => 17,  64 => 16,  59 => 13,  56 => 12,  53 => 11,  41 => 5,  12 => 2,  20 => 1,  48 => 8,  42 => 5,  36 => 3,  19 => 1,  44 => 6,  38 => 4,  34 => 2,  21 => 1,);
    }
}
