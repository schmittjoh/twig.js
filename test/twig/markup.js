describe("twig.Markup", function () {

  var markup;

  beforeEach(function () {
    markup = new twig.Markup("foo");
  });

  describe("#toString", function () {
    it("returns a string representation", function () {
      markup.toString().should.equal("foo");
    });
  });

  it("turns into a string when passed to the String constructor", function () {
    String(markup).should.equal("foo");
  });

  it("turns into a string when concatenated with an empty string", function () {
    ("" + markup).should.equal("foo");
  });

});
