describe("twig.pregQuote", function () {

  var specialCharacters = {
    "\\."  : ".",
    "\\\\" : "\\",
    "\\+"  : "+",
    "\\*"  : "*",
    "\\?"  : "?",
    "\\["  : "[",
    "\\]"  : "]",
    "\\^"  : "^",
    "\\$"  : "$",
    "\\("  : "(",
    "\\)"  : ")",
    "\\{"  : "{",
    "\\}"  : "}",
    "\\="  : "=",
    "\\!"  : "!",
    "\\<"  : "<",
    "\\>"  : ">",
    "\\|"  : "|",
    "\\:"  : ":",
    "\\-"  : "-",
  }

  for (var quoted in specialCharacters) {
    var unquoted = specialCharacters[quoted];
    it("quotes " + unquoted + " as " + quoted, function () {
      twig.pregQuote(unquoted).should.equal(quoted);
    });
  }

});
