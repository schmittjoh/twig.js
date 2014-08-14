describe("twig.empty", function () {

  it("considers the empty string to be empty", function () {
    twig.empty("").should.be.true;
  });

  it("considers 0 to be empty", function () {
    twig.empty(0).should.be.true;
  });

  it("considers false to be empty", function () {
    twig.empty(false).should.be.true;
  });

  it("considers undefined to be empty", function () {
    twig.empty(undefined).should.be.true;
  });

  it("considers empty arrays to be empty", function () {
    twig.empty([]).should.be.true;
  });

  it("considers empty objects to be empty", function () {
    twig.empty({}).should.be.true;
  });

  it("considers null to be empty", function () {
    twig.empty(null).should.be.true;
  });

  it("doesn't consider strings containing characters to be empty", function () {
    twig.empty("foo").should.be.false;
  });

  it("doesn't consider true to be empty", function () {
    twig.empty(true).should.be.false;
  });

  it("doesn't consider arrays with elements to be empty", function () {
    twig.empty([1]).should.be.false;
  });

  it("doesn't consider objects with properties to be empty", function () {
    twig.empty({foo:"bar"}).should.be.false;
  });

  it("doesn't consider non-zero integers to be empty", function () {
    twig.empty(1).should.be.false;
  });

});
