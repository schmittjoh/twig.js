Usage
=====

.. code-block :: html+jinja

    {# greeting.twig #}
    {% twig_js name="greeting" %}
    Hello {{ name|default("World") }}!

Note the ``twig_js`` tag above is a compile-time directive which allows you to set
the name of the compiled Javascript function. You can omit it, in which case the compiler
will make a best effort to determine a good name, but might fail.

The above Twig file, will then be compiled to Javascript which will look similar to this:

.. code-block :: js

    // greeting.js
    greeting = function(env) {
        twig.Template.call(this, env);
    }
    // pseudo-classical inheritance (http://bolinfest.com/javascript/inheritance.php)
    twig.inherits(greeting, twig.Template);
    
    greeting.prototype.render_ = function(stringBuffer, context, blocks) {
        stringBuffer.append("Hello ");
        stringBuffer.append("name" in context ? twig.filter.def(this.env_, context["name"], "World") : "World");
        stringBuffer.append("!");
    }

You can then include this file along with the twig.js runtime environment on your website:

.. code-block :: html

    <script language="javascript" type="text/javascript" src="twig.js"></script>
    <script language="javascript" type="text/javascript" src="greeting.js"></script>
    <script language="javascript" type="text/javascript">
        alert(Twig.render(greeting, {name: "Johannes"}));
    </script>

.. tip :: 
    
    If you are using Symfony2 integration looks a bit different, please see 
    `JMSTwigJsBundle <http://jmsyst.com/bundles/JMSTwigJsBundle>`_.