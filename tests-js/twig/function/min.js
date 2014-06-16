describe("twig.functions.min", function () {

  it("finds the smallest number in an array", function () {
    twig.functions.min([1, 2, 3]).should.equal(1);
  });

  it("finds the smallest number in an object", function () {
    twig.functions.min({ a:1, b:2, c:3 }).should.equal(1);
  });

  it("falls back to finding the smallest number in the argument list", function () {
    twig.functions.min(1, 2, 3).should.equal(1);
  });

});
