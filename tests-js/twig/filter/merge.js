describe("twig.filter.merge", function () {

  it("merges arrays", function () {
    twig.filter.merge([1, 2], [3, 4]).should.eql([1, 2, 3, 4]);
  });

  it("deduplicates merged arrays", function () {
    twig.filter.merge([1, 2], [2, 3]).should.eql([1, 2, 3]);
  });

  it("merges objects", function () {
    twig.filter.merge({ foo:"bar" }, { bar:"baz" }).should.eql({ foo:"bar", bar:"baz" });
  });

  it("doesn't damage the input data", function () {
    var input1 = { foo: "bar" };
    var input2 = { bar: "baz" };
    twig.filter.merge(input1, input2)
    input1.should.eql({ foo: "bar" });
    input2.should.eql({ bar: "baz" });
  });

});
