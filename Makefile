
PLOVR_URL="http://plovr.googlecode.com/files/plovr-81ed862.jar"

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

test: vendor
	./vendor/bin/phpunit

vendor:
	composer install

.PHONY: build clean test

