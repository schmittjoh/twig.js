describe("twig.filter.first", function () {

  it("returns the first element of an array", function () {
    twig.filter.first({}, [1, 2, 3, 4]).should.equal(1);
  });

  it("returns the first property of an object", function () {
    twig.filter.first({}, {a: 1, b: 2, c: 3, d: 4}).should.equal(1);
  });

  it("returns the first character of a string", function () {
    twig.filter.first({}, "1234").should.equal("1");
  });

});
