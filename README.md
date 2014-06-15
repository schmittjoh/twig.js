Twig.js
=======

[![Build Badge]] [Build Status]
[![Scrutinizer Badge]] [Scrutinizer Code Quality]

[Twig.js](http://jmsyst.com/libs/twig.js) is a PHP project that compiles Twig
templates into executable Javascript for client-side execution. It is not to be
confused with [Twig.js](https://github.com/justjohn/twig.js/), which is a pure
Javascript implementation of the Twig templating language.

Twig Compatibility
------------------

Compatibility with vanilla PHP Twig is not yet at 100%. If you need your
templates to work with both Twig.js *and* Twig, stick to the supported filters
and functions described below.

#### Supported Filters

* `abs`
* `capitalize`
* `default`
* `e`
* `escape`
* `first`
* `join`
* `json_encode`
* `keys`
* `length`
* `lower`
* `nl2br`
* `replace`
* `title`
* `trim`
* `upper`
* `url_encode`

#### Supported Functions

* `block`
* `include`
* `range`

Incompatibilities
-----------------

The following is a list of functionality present in Twig that is not yet
available in Twig.js. There are some really easy pickings in these lists for
anybody hoping to make a contribution to the project.

#### Unsupported Filters

* `batch`
* `convert_encoding`
* `date`
* `date_modify`
* `format`
* `last`
* `number_format`
* `merge`
* `upper`
* `raw`
* `reverse`
* `round`
* `slice`
* `sort`
* `split`
* `striptags`

#### Unsupported Functions

* `attribute`
* `constant`
* `cycle`
* `date`
* `dump`
* `max`
* `min`
* `parent`
* `random`
* `source`
* `template_from_string`

Testing
-------

To run the tests, you'll need [Composer], [Node] and [NPM] on your system.

```bash
$ make test
```

License
-------

Twig.js is released under the [Apache License], Version 2.0.

[Apache License]: http://www.apache.org/licenses/LICENSE-2.0
[Composer]: https://getcomposer.org/
[Node]: http://nodejs.org/
[NPM]: https://www.npmjs.org/
[Build Badge]: https://secure.travis-ci.org/schmittjoh/twig.js.png
[Build Status]: http://travis-ci.org/schmittjoh/twig.js
[Scrutinizer Badge]: https://scrutinizer-ci.com/g/h2s/twig.js/badges/quality-score.png?b=master
[Scrutinizer Code Quality]: https://scrutinizer-ci.com/g/h2s/twig.js/?branch=master
