<?php

/* traitable.twig */
class __TwigTemplate_8eccb8b18c8f1c60507303b1226eb981e38ebc1bc4aab0c165f8478d6586965a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
        );

        $this->macros = array(
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
        return array (  23 => 1,  73 => 12,  70 => 11,  65 => 10,  60 => 6,  57 => 5,  51 => 4,  46 => 14,  43 => 11,  41 => 10,  37 => 8,  35 => 5,  31 => 4,  26 => 1,);
    }
}
