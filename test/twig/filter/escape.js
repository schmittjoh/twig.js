describe("TwigJs.Filter.Escape", function () {

  it("escapes a bracket", function () {
    twig.filter.escape(null, '<').should.equal('&lt;');
  });

});
