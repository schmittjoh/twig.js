{
	"id":"twig",
	
	"paths":["./../../src-js/"],
	"inputs": "./../../src-js/export.js",
	"output-file":"./../../twig.js",
	"output-wrapper": "/**\n * twig.js\n * https://github.com/schmittjoh/twig.js\n *\n * (C) 2011 Johannes M. Schmitt <schmittjoh@gmail.com>\n * Licensed under the Apache 2.0 License.\n *\n * Portions of this code are from the Google Closure Library received\n * from the Closure Authors under the Apache 2.0 License.\n */\n(function() {%output%})();\n",
	"externs": ["./../../src-js/externs.js", "//webkit_console.js", "//json.js"],
	
	"mode":"ADVANCED",
	"level":"VERBOSE",
	"debug":false,
	"pretty-print":false,
	
	"define": {
		"goog.DEBUG":false
	}
}
