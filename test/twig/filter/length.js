describe("TwigJs.Filter.Length", function () {

  it("returns the number of characters in a string", function () {
    twig.filter.length(null, "foo").should.equal(3);
  });

  it("returns the number of elements in an array", function () {
    twig.filter.length(null, []).should.equal(0);
  });

  it("returns the number of properties of an object", function () {
    twig.filter.length(null, {foo: "bar"}).should.equal(1);
  });

  it("returns 0 for null", function () {
    twig.filter.length(null, null).should.equal(0);
  });

  it("returns the number of characters in an integer", function () {
    twig.filter.length(null, 1234).should.equal(4);
  });

});
