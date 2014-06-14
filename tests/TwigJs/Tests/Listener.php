<?php
namespace TwigJs\Tests;

use DNode;
use Exception;
use PHPUnit_Framework_AssertionFailedError;
use PHPUnit_Framework_Test;
use PHPUnit_Framework_TestListener;
use PHPUnit_Framework_TestSuite;
use React;
use TwigJs;

class Listener implements PHPUnit_Framework_TestListener
{
    public function addError(PHPUnit_Framework_Test $test, Exception $e, $time) {}
    public function addFailure(PHPUnit_Framework_Test $test, PHPUnit_Framework_AssertionFailedError $e, $time) {}
    public function addIncompleteTest(PHPUnit_Framework_Test $test, Exception $e, $time) {}
    public function addRiskyTest(PHPUnit_Framework_Test $test, Exception $e, $time) {}
    public function addSkippedTest(PHPUnit_Framework_Test $test, Exception $e, $time) {}
    public function startTestSuite(PHPUnit_Framework_TestSuite $suite) {}
    public function endTest(PHPUnit_Framework_Test $test, $time) {}

    public function startTest(PHPUnit_Framework_Test $test)
    {
        if ($test instanceof TwigJs\Tests\FullIntegrationTest) {
            $this->loop = new React\EventLoop\StreamSelectLoop();
            $this->dnode = new DNode\DNode($this->loop);
            $test->setDnode($this->dnode, $this->loop);
        }
    }

    public function endTestSuite(PHPUnit_Framework_TestSuite $suite)
    {
        $exit = function($remote, $connection) {
            $remote->exit(function() use ($connection) {
                $connection->end();
            });
        };

        $this->dnode->on('error', function($e) {
            // Do nothing.
            // This error means the dnode server isn't running, so it doesn't
            // matter that we can't connect to it in order to shut it down.
        });

        $this->dnode->connect(7070, $exit);
        $this->loop->run();
    }
}
