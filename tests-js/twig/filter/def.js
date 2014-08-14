describe("twig.filter.def", function () {

  it("defaults to foo", function () {
    twig.filter.def("", "foo").should.equal("foo");
  });

  it("returns bar if it matches", function () {
    twig.filter.def("bar", "foo").should.equal("bar");
  });

  it("returns false if all else fails", function () {
    twig.filter.def(false).should.equal("");
  });

});

