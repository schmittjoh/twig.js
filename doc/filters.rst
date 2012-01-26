Filters
#######

twig.js has support for the following filters built-in: 
default, capitalize, escape, length, upper, lower, url_encode, replace, date

The date filter doesn't support all the php date format characters:
o (ISO-8601 year number), B (Swatch Internet time), u (Microseconds),
e (Timezone identifier), I (daylight saving time), O (Difference to Greenwich time (GMT) in hours),
P (Difference to Greenwich time (GMT) with colon between hours and minutes), T (Timezone abbreviation) and
c (ISO 8601 date) filters are not supported.

Use double backslash (\\) to escape characters in date format.

Adding A Compile-Time Filter
----------------------------
Compile-time filters should generally be preferred as they are inlined into your
code, and do not make an additional round-trip through your twig.js environment.

You can add compile-time filters to the JsCompiler by simply calling::

    $compiler->setFilterFunctionName('filter-name', 'js-function-name');

Also make sure that the "js-function-name" is available wherever you have included
twig.js.


Adding A Runtime Filter
-----------------------

You can register a runtime filter at anytime. The difference to compile time filters is that
they are resolved at runtime, and thus a bit less performant than compile-time filters.

A filter can be any JS function, that you hook up with your twig.js environment::

    <script language="javascript" type="text/javascript">
        Twig.setFilter('foo-bar-filter', function(value) {
            return 'foo' + value + 'bar';
        });
    </script>

Note that you will receive the same arguments like in the PHP equivalent. For example, if the 
PHP equivalent is environment aware, then you also receive the environment in the JS version 
of your filter. The same applies to the other arguments.

Also note that a runtime filter cannot override a compile-time filter, as these function calls
have already been inlined by the compiler.
