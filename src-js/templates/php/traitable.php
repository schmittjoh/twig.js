<?php

/* traitable.twig */
class __TwigTemplate_5281c639629fb941cf603ad27edadc72 extends Twig_Template
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
        return array (  20 => 1,  70 => 12,  67 => 11,  62 => 10,  57 => 6,  54 => 5,  48 => 4,  43 => 14,  40 => 11,  38 => 10,  34 => 8,  32 => 5,  28 => 4,  23 => 1,);
    }
}
