Functions
#########

twig.js has support for the following functions built-in:
range

Adding A Compile-Time Function
------------------------------
Compile-time functions should generally be preferred as they are inlined into your
code, and do not make an additional round-trip through your twig.js environment.

You can add compile-time functions to the JsCompiler by simply calling::

    $compiler->setJsFunction('twig-function-name', 'js-function-name');

Also make sure that the "js-function-name" is available wherever you have included
twig.js.


Adding A Runtime Function
-------------------------
You can register a runtime function at anytime. The difference to compile time functions is that
they are resolved at runtime, and thus a bit less performant than compile-time functions.

A filter can be any JS function, that you hook up with your twig.js environment::

    <script language="javascript" type="text/javascript">
        Twig.setFunction('foo-bar-function', function(value) {
            return 'foo' + value + 'bar';
        });
    </script>

Note that you will receive the same arguments like in the PHP equivalent. For example, if the
PHP equivalent is environment aware, then you also receive the environment in the JS version
of your function. The same applies to the other arguments.

Also note that a runtime function cannot override a compile-time function, as these function calls
have already been inlined by the compiler.
