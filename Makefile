
PLOVR_URL="https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/plovr/plovr-81ed862.jar"

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
	./vendor/bin/phpcs --standard=PSR2 --error-severity=1 tests

.PHONY: build clean test phpcs

