var fs = require('fs')
  , dnode = require('dnode')
  , twigSource = fs.readFileSync('./twig.dev.js', 'UTF-8')
  , window = {};
eval(twigSource);
var server = dnode(function (remote, conn) {
    this.render = function (name, source, parameters, cb) {
      eval(source);
      cb(window.Twig.render(eval(name), eval("(" + parameters + ")")));
    };
    this.exit = function (cb) {
      cb();
      setTimeout(function() {
        process.exit(0);
      }, 100);
    };
});
server.listen(7070);
