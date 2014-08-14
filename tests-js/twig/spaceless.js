describe("twig.spaceless", function () {

  it("removes spaces from a string containing only spaces", function () {
    twig.spaceless("          ").should.equal("");
  });

  it("removes spaces from a string wrapped with spaces", function () {
    twig.spaceless("    foo  ").should.equal("foo");
  });

  it("removes spaces from within a string", function () {
    twig.spaceless('  <a href="#">  <img /> </a>   ').should.equal('<a href="#"><img /></a>');
  });

});
