describe("twig.filter.last", function () {

  it("returns the last element of an array", function () {
    twig.filter.last(null, [1, 2, 3]).should.equal(3);
  });

  it("returns the last character of a string", function () {
    twig.filter.last(null, "abc").should.equal("c");
  });

  it("returns the last property of an object", function () {
    twig.filter.last(null, {a: 1, b: 2, c: 3}).should.equal(3);
  });

});
