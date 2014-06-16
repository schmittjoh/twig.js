describe("twig.filter.title", function () {

  it("capitalizes the first letter of each word", function () {
    twig.filter.title(null, "hello world").should.equal("Hello World");
  });

});
