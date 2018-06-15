
PLOVR_URL="https://github.com/bolinfest/plovr/releases/download/v5.2.0/plovr.jar"

build: clean twig.js twig.dev.js

clean:
	rm -f twig.js
	rm -f twig.dev.js

twig.js: bin/plovr
	java -jar bin/plovr build Resources/config/compile.js

twig.dev.js: bin/plovr
	java -jar bin/plovr build Resources/config/compile_dev.js

bin/plovr:
	wget $(PLOVR_URL) -O bin/plovr

test: vendor node_modules
	node tests-js/dnode.js &
	./vendor/bin/phpunit
	./node_modules/.bin/mocha --require tests-js/bootstrap.js tests-js/twig/* tests-js/twig/*/*

node_modules:
	npm install

vendor:
	composer install

phpcs: vendor
	./vendor/bin/phpcs --standard=PSR2 --error-severity=1 src
	./vendor/bin/phpcs --standard=PSR2 --ignore=tests/TwigJs/Tests/Fixture --error-severity=1 tests

phpcbf: vendor
	./vendor/bin/phpcbf --standard=PSR2 --error-severity=1 src
	./vendor/bin/phpcbf --standard=PSR2 --ignore=tests/TwigJs/Tests/Fixture --error-severity=1 tests

.PHONY: build clean test phpcs

