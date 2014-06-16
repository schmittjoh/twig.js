var sinon = require('sinon');
describe("twig.forEach", function () {

  describe("array handling", function () {
    var spy, array;

    beforeEach(function () {
      spy = sinon.spy();
      array = [1, 2, 3];
    });

    it("iterates through the elements", function () {
      twig.forEach(array, spy);
      spy.calledWith(1, 0, array).should.be.true;
      spy.calledWith(2, 1, array).should.be.true;
      spy.calledWith(3, 2, array).should.be.true;
    });

  });

  describe("object handling", function () {
    var spy, object;

    beforeEach(function () {
      spy = sinon.spy();
      object = { foo:"bar", bar:"baz" };
    });

    it("iterates through the properties", function () {
      twig.forEach(object, spy);
      spy.calledWith("bar", "foo", object).should.be.true;
      spy.calledWith("baz", "bar", object).should.be.true;
    });

  });

});
