<?php
namespace TwigJs\Tests;

use DNode;
use Exception;
use PHPUnit\Framework\AssertionFailedError;
use PHPUnit\Framework\Test;
use PHPUnit\Framework\TestListener;
use PHPUnit\Framework\TestSuite;
use PHPUnit\Framework\Warning;
use React;
use TwigJs;

class Listener implements TestListener
{
    public function startTest(Test $test)
    {
        if ($test instanceof TwigJs\Tests\FullIntegrationTest) {
            $this->loop = new React\EventLoop\StreamSelectLoop();
            $this->dnode = new DNode\DNode($this->loop);
            $test->setDnode($this->dnode, $this->loop);
        }
    }

    public function endTestSuite(TestSuite $suite)
    {
        $exit = function ($remote, $connection) {
            $remote->exit(function () use ($connection) {
                $connection->end();
            });
        };

        if (isset($this->loop) && isset($this->dnode)) {
            $this->dnode->on('error', function ($e) {
                // Do nothing.
                // This error means the dnode server isn't running, so it doesn't
                // matter that we can't connect to it in order to shut it down.
            });

            $this->dnode->connect(7070, $exit);
            $this->loop->run();
        }
    }

    public function addError(Test $test, Exception $e, $time)
    {
    }

    public function addFailure(Test $test, AssertionFailedError $e, $time)
    {
    }

    public function addWarning(Test $test, Warning $e, $time)
    {
    }

    public function addIncompleteTest(Test $test, Exception $e, $time)
    {
    }

    public function addRiskyTest(Test $test, Exception $e, $time)
    {
    }

    public function addSkippedTest(Test $test, Exception $e, $time)
    {
    }

    public function startTestSuite(TestSuite $suite)
    {
    }

    public function endTest(Test $test, $time)
    {
    }
}
