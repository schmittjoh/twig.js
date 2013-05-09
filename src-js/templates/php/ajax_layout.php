<?php

/* ajax_layout.twig */
class __TwigTemplate_bb4bb3072b2239c4cb86071858da4291 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'body' => array($this, 'block_body'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $this->displayBlock('body', $context, $blocks);
    }

    public function block_body($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "ajax_layout.twig";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,  20 => 1,);
    }
}
