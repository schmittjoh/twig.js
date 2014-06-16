describe("twig.extends", function () {

  it("merges objects", function () {
    twig.extend(
      {},
      { foo:"bar" },
      { bar:"baz" }
    ).should.eql({
      foo:"bar",
      bar:"baz"
    });
  });

  it("returns the same reference if changing nothing", function () {
    var target = {};
    twig.extend(target).should.equal(target);
  });

});
