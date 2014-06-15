describe("twig.functions.max", function () {

  it("finds the largest number in an array", function () {
    twig.functions.max([1, 2, 3]).should.equal(3);
  });

  it("finds the largest number in an object", function () {
    twig.functions.max({ a:1, b:2, c:3 }).should.equal(3);
  });

  it("falls back to finding the largest number in the argument list", function () {
    twig.functions.max(1, 2, 3).should.equal(3);
  });

});
