<?php

/* traitable.twig */
class __TwigTemplate_3425c06aa00ecbce78b8b480cc5e0e5a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

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

}
