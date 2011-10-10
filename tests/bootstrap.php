<?php

if (is_file($file = __DIR__.'/../config.php')) {
    require_once $file;
}

spl_autoload_register(function($class) {
    if (0 === strpos($class, 'TwigJs\\Tests\\')) {
        $file = __DIR__ . '/' . str_replace('\\', '/', $class) . '.php';
        if (is_file($file)) {
            require $file;

            return true;
        }
    } elseif (0 === strpos($class, 'TwigJs\\')) {
        $file = __DIR__ . '/../src/' . str_replace('\\', '/', $class) . '.php';
        if (is_file($file)) {
            require $file;

            return true;
        }
    } elseif (isset($_SERVER['TWIG_LIB']) && 0 === strpos($class, 'Twig_')) {
        $file = $_SERVER['TWIG_LIB'] . '/' . str_replace('_', '/', $class) . '.php';
        if (is_file($file)) {
            require $file;

            return true;
        }
    }
});
