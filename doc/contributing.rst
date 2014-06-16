Contributing
============

Introduction
############

If you discover a bug, or maybe a feature is missing that you'd like to add,
you can simply `fork the repository <http://github.com/schmittjoh/twig.js>`_ 
on GitHub, and then send a pull request with your proposed patch.

Please make sure to run the test suite, and also to add tests for your changes. 

Running the Test Suite
######################

twig.js has a PHP, and a Javascript Test Suite. Depending on which parts of the
code you change, you need to run either one, or both test suites to verify that
your changes have not broken anything. On most systems, you can run the entire
test suite instantly with one simple command.

    $ make test

PHPUnit Test Suite
------------------

You can run the PHPUnit test suite by simply typing "phpunit" in the root folder.

If you run this for the first time, you need to first create a config.php where
you specify all the paths to twig.js dependencies. The distribution already
includes a config.php.dist which you can use as a starting point.

Mocha Test Suite
----------------

The Mocha test suite is run by installing the NPM dependencies using "npm
install", and then by running the mocha binary installed by NPM.

    $ ./node_modules/.bin/mocha --require test/bootstrap.js test/twig/* test/twig/*/*

If you also made changes to the Javascript, you need to re-compile the minified
versions of twig.js::

    $ make build

