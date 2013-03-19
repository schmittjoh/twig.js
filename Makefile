
PLOVR_URL="http://plovr.googlecode.com/files/plovr-eba786b34df9.jar"

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

.PHONY: build clean

