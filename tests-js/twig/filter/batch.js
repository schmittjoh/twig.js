describe("twig.filter.batch", function () {

  it("batches a tiny array into even tinier ones", function () {
    twig.filter.batch([1, 2], 1).should.eql([[1], [2]]);
  });

  it("stops at the end of the array even when the last batch isn't full", function () {
    twig.filter.batch(["a", "b", "c"], 2).should.eql([["a", "b"], ["c"]]);
  });

  it("accepts a parameter defining what to use as filler", function () {
    twig.filter.batch(["a", "b", "c"], 2, "No item").should.eql([["a", "b"], ["c", "No item"]]);
  });

});
