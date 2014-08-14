var sinon = require("sinon");
describe("twig.functions.random", function () {

  before(function () {
    sinon.stub(Math, "random").returns(0.4);
  });

  after(function () {
    Math.random.restore();
  });

  it("chooses an element from an array", function () {
    twig.functions.random(null, ["a", "b", "c"]).should.equal("b");
  });

  it("chooses a character from a string", function () {
    twig.functions.random(null, "abc").should.equal("b");
  });

  it("generates a number between 0 and n", function () {
    twig.functions.random(null, 10).should.equal(4);
  });

  it("generates a number between 0 and 2147483647 if n is null", function () {
    twig.functions.random(null).should.equal(858993458);
  });

});
