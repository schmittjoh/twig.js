Running The Test Suite
######################

twig.js has a PHP, and a Javascript Test Suite. Depending on which parts of the
code you change, you need to run either one, or both test suites to verify that
your changes have not broken anything.

PHPUnit Test Suite
------------------

You can run the PHPUnit test suite by simply typing "phpunit" in the root folder.

If you run this for the first time, you need to first create a config.php where
you specify all the paths to twig.js dependencies. The distribution already
includes a config.php.dist which you can use as a starting point.

JsUnit Test Suite
-----------------
The JsUnit test suite is run by opening src-js/all_tests.html in your preferred
browser, and then clicking the "start" button.

Note that if you made change to the compiler code, you first need to rebuild all
test templates by running (from the root folder)::

    $ php bin/generate_test_templates.php

If you also made changes to the Javascript, you need to re-compile the minified
versions of twig.js::

    $ php bin/compile.php
