<?php

/* traitable.twig */
class __TwigTemplate_288581d3f1db09f6288d3661b5a036aa extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->displayBlock('title', $context, $blocks);
    }

    public function block_title($context, array $blocks = array())
    {
        echo "foo";
    }

    public function getTemplateName()
    {
        return "traitable.twig";
    }

    public function getDebugInfo()
    {
        return array (  20 => 1,  48 => 8,  42 => 5,  36 => 2,  19 => 1,  44 => 4,  38 => 4,  34 => 2,  21 => 1,);
    }
}
