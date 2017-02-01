{% macro link(link, content, title) %}
<a href="{{ link }}"
    {%- if title is not empty %} title="{{ title }}"{% endif -%}
    >{{ content }}</a>
{% endmacro %}

