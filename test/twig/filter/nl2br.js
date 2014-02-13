describe("twig.filter.nl2br", function () {

  it("has no effect on a string containing no new lines", function () {
    twig.filter.nl2br('one-two').should.equal('one-two');
  });

  it("replaces a new line with a <br /> tag", function () {
    twig.filter.nl2br("one\ntwo").should.equal("one<br />two");
  });

  it("replaces two new lines with two <br /> tags", function () {
    twig.filter.nl2br("one\n\ntwo").should.equal("one<br /><br />two");
  });

});
