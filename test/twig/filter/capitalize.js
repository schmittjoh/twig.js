describe("TwigJs.Filter.Capitalize", function () {
  it("capitalizes the first word", function () {
    twig.filter.capitalize({}, 'hello').should.equal('Hello');
  });
});
