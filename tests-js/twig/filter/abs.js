describe("twig.filter.abs", function () {

  it("returns the absolute value of the number", function () {
    twig.filter.abs(-5).should.equal(5);
  });

  it("copes with string input", function () {
    twig.filter.abs("-5").should.equal(5);
  });

});
