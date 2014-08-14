var fs = require('fs')
  , should = require('should')
  , twigSource = fs.readFileSync('./twig.dev.js', 'UTF-8')
  , window = {};
eval(twigSource);
