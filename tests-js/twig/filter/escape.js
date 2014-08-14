describe("twig.filter.escape", function () {

  it("escapes a bracket", function () {
    twig.filter.escape(null, '<').should.equal('&lt;');
  });

  it("escapes a bracket in HTML mode", function () {
    twig.filter.escape(null, '<', 'html').should.equal('&lt;');
  });

  it("escapes JS", function () {
    twig.filter.escape(null, "\u00dcberpr\u00fcfung", "js").should.equal("\\xDCberpr\\xFCfung");
  });

  it("escapes URLs", function () {
    twig.filter.escape(null, "~!@#$%^&*()=+[]{}\\;:\'\",/?", "url").should.equal("~!%40%23%24%25%5E%26*()%3D%2B%5B%5D%7B%7D%5C%3B%3A'%22%2C%2F%3F");
  });

});
