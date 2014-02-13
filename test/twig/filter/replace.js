describe("twig.filter.replace", function () {

  it("replaces strings in the haystack", function () {
    twig.filter.replace("I love %this%, and %that%.", {
      "%this%": "foo",
      "%that%": "bar"
    }).should.equal('I love foo, and bar.');
  });

  it("does replacements in sequence", function () {
    twig.filter.replace("greet", {
      "greet": "Hello Johannes",
      "l": "m"
    }).should.equal("Hemmo Johannes");
  });

  it("doesn't get confused about dots", function () {
    twig.filter.replace("mydomain.nl", {
      ".": "-"
    }).should.equal("mydomain-nl");
  });

  it("doesn't get confused about multiple sequential dots", function () {
    twig.filter.replace("...---...", {
      ".": "x"
    }).should.equal("xxx---xxx");
  });

  it("copes with a wide variety of special regex characters", function () {
    twig.filter.replace(".\\+*?[^]$(){}=!<>|:-", {
      ".": "a",
      "\\": "b",
      "+": "c",
      "*": "d",
      "?": "e",
      "[": "f",
      "^": "g",
      "]": "h",
      "$": "i",
      "(": "j",
      ")": "k",
      "{": "l",
      "}": "m",
      "=": "n",
      "!": "o",
      "<": "p",
      ">": "q",
      "|": "r",
      ":": "s",
      "-": "t"
    }).should.equal("abcdefghijklmnopqrst");
  });

});
