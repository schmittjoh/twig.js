# twig.js #

twig.js is a flexible, secure, and high-performance templating engine for Javascript.

It compiles your [Twig templates][1] to raw Javascript allowing you to use the same
templates for both server-, and client-side.

```html+jinja
{% twig_js name="greeting" %}
Hello {{ name|default("World") }}!
```

```html
<script language="javascript" type="text/javascript" src="twig.js"></script>
<script language="javascript" type="text/javascript" src="greeting.js"></script>
<script language"javascript" type="text/javascript">
    alert(Twig.render(greeting, {name: "Johannes"}));
</script>
```

Status
------
While twig.js already provides support for most of Twig's features that you will
ever need in your templates. There are some things which are not (yet) available:

  - the behavior for a variable named "prototype" is undefined
  - macros are not available
  - some filters are not available (see doc/filters.rst)
  - some functions are not available (see doc/functions.rst)
  - some tests are not available (see doc/tests.rst)
  - sandboxed mode is not available
  - compatibility with older Twig versions (anything but Twig head) is untested    
  - Conditional template includes at runtime are not supported
  - ExtensionReferences are not supported
  - Custom functions are not supported
  - strict variables behavior is not supported

If you need support for any of these, patches are very welcome, and if you can attach a few
unit tests even better :)

Integration
-----------

With Symfony2
~~~~~~~~~~~~~
Seamless integration with Symfony2 is provided by the [JMSTwigJsBundle][2].

With Assetic
~~~~~~~~~~~~
If you are not using Symfony2, but [Assetic][3], you can leverage the TwigJsFilter 
which ships with twig.js.

Documentation
-------------
See the doc/ folder for documentation 


[1]: https://github.com/fabpot/twig
[2]: https://github.com/schmittjoh/JMSTwigJsBundle
[3]: https://github.com/kriswallsmith/assetic

