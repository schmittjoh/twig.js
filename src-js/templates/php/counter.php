<?php

/* counter.twig */
class __TwigTemplate_93979ac3b3749ca27d0a5899f5a762b994df1827cd11a59c71d5f537341bac40 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );

        $this->macros = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable(range(1, 5));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
            // line 2
            echo twig_escape_filter($this->env, (isset($context["i"]) ? $context["i"] : null), "html", null, true);
            // line 4
            $context['_parent'] = (array) $context;
            $context['_seq'] = twig_ensure_traversable(range((isset($context["i"]) ? $context["i"] : null), (isset($context["i"]) ? $context["i"] : null)));
            foreach ($context['_seq'] as $context["_key"] => $context["j"]) {
                // line 5
                echo twig_escape_filter($this->env, (", " . (isset($context["j"]) ? $context["j"] : null)), "html", null, true);
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['j'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 8
            if ((!twig_template_get_attributes($this, (isset($context["loop"]) ? $context["loop"] : null), "last"))) {
                echo ", ";
            }
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "counter.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 4,  49 => 3,  45 => 5,  32 => 1,  75 => 21,  72 => 19,  69 => 17,  67 => 16,  62 => 13,  59 => 12,  56 => 11,  47 => 6,  44 => 5,  39 => 2,  12 => 2,  22 => 1,  23 => 1,  73 => 12,  70 => 11,  65 => 10,  60 => 6,  57 => 5,  51 => 8,  46 => 14,  43 => 11,  41 => 4,  37 => 8,  35 => 5,  31 => 4,  26 => 1,);
    }
}
