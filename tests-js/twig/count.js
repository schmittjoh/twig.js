describe("twig.count", function () {

  it("counts string lengths", function () {
    twig.count("").should.equal(0);
    twig.count("foo").should.equal(3);
  });

  it("counts array lengths", function () {
    twig.count([]).should.equal(0);
    twig.count([1, 2, 3, 4]).should.equal(4);
  });

  it("counts object properties", function () {
    twig.count({}).should.equal(0);
    twig.count({ foo:"bar", bar:"baz" }).should.equal(2);
  });

  it("isn't fooled by objects with a length property", function () {
    twig.count({ length:3 }).should.equal(1);
  });

  it("treats integers like strings", function () {
    twig.count(99).should.equal(2);
  });

});
