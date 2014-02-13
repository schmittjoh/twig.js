describe("TwigJs.Filter.Capitalize", function () {

  it("capitalizes the first word", function () {
    twig.filter.capitalize({}, 'hello').should.equal('Hello');
  });

  it("does nothing with an empty string", function () {
    twig.filter.capitalize({}, '').should.equal('');
  });

});
