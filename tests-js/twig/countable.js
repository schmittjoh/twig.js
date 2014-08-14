describe("twig.countable", function () {

  it("considers empty strings as countable", function () {
    twig.countable("").should.equal(true);
  });

  it("considers empty arrays as countable", function () {
    twig.countable([]).should.equal(true);
  });

  it("considers empty objects as countable", function () {
    twig.countable({}).should.equal(true);
  });

  it("doesn't consider boolean values countable", function () {
    twig.countable(true).should.equal(false);
    twig.countable(false).should.equal(false);
  });

  it("doesn't consider integers countable", function () {
    twig.countable(4).should.equal(false);
  });

});
