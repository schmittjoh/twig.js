Installation
------------

You can easily install twig.js using Composer. Just add the following to your
`composer.json` file:

.. code-block :: js

    // composer.json
    {
        // ...
        "require": {
            // ...
            "jms/twig-js": "dev-master"
        }
    }
    
.. note ::

    Please replace `dev-master` in the snippet above with the latest stable
    branch, for example ``1.0.*``.
    
Then, you can install the new dependencies by running Composer's ``update``
command from the directory where your ``composer.json`` file is located:

.. code-block :: bash

    php composer.phar update jms/twig-js
    
Now, Composer will automatically download all required files, and install them
for you. 

.. tip ::

    If you are using Symfony2, you should instead take a look at the 
    `JMSTwigJsBundle <http://jmsyst.com/bundles/JMSTwigJsBundle>`_ which handles
    the integration for you, and also adds some Symfony2-specific features.
