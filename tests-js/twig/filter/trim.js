describe("twig.filter.trim", function () {

  it("strips whitespace from the beginning", function () {
    twig.filter.trim(" test").should.equal("test");
  });


  it("strips whitespace from the end", function () {
    twig.filter.trim("test\n").should.equal("test");
  });

  it("supports trimming arbitrary characters", function () {
    twig.filter.trim("...test...", ".").should.equal("test");
  });

});
