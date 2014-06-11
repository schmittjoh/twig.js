var fs = require('fs')
  , dnode = require('dnode')
  , twigSource = fs.readFileSync('./twig.dev.js', 'UTF-8')
  , window = {};
eval(twigSource);
var server = dnode(function (remote, conn) {
    this.render = function (source, parameters, cb) {
      eval(source);
      cb(window.Twig.render(test, parameters));
    };
});
server.listen(7070);
