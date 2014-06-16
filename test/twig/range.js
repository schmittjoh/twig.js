describe("twig.range", function () {

  it("can count to three", function () {
    twig.range(1, 3)[0].should.equal(1);
    twig.range(1, 3)[1].should.equal(2);
    twig.range(1, 3)[2].should.equal(3);
  });

});
