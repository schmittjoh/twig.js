<?php

/* ajax_layout.twig */
class __TwigTemplate_bd99b6610482bffda89d135a79c57164 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

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

}
