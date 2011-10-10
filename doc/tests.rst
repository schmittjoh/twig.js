Tests
#####

twig.js has support for the following tests built-in: 
defined, divisibleby, empty, even, none, null, odd, sameas

Adding A Compile-Time Test
--------------------------
Compile-time tests should generally be preferred as they are inlined into your
code, and do not make an additional round-trip through your twig.js environment,
and in some cases not even a function call.

For compile-time tests, you need to create a dedicated class, and implement the
``TwigJs\TestCompilerInterface``. You can then add your test compiler by calling::

    $jsCompiler->addTestCompiler(new MyTestCompiler());

Adding A Runtime Test
-----------------------
You can register a runtime test at anytime. The difference to compile-time tests is that
they are resolved at runtime, and thus a bit less performant than compile-time tests.

A test can be any JS function that returns a boolean result::

    <script language="javascript" type="text/javascript">
        Twig.setTest('foo-bar-test', function(value) {
            return 'foobar' === value;
        });
    </script>

Note that you will receive the same arguments like in the PHP equivalent.

Also note that a runtime test cannot override a compile-time test, as these tests are
not delegated through your twig.js runtime environment.
