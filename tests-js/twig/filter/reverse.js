describe("twig.filter.reverse", function () {

  it("reverses strings", function () {
    twig.filter.reverse(null, "abcdef").should.equal("fedcba");
  });

  it("reverses arrays", function () {
    twig.filter.reverse(null, [1, 2, 3])[0].should.equal(3);
    twig.filter.reverse(null, [1, 2, 3])[1].should.equal(2);
    twig.filter.reverse(null, [1, 2, 3])[2].should.equal(1);
  });

  it("reverses objects", function () {
    var reverse = twig.filter.reverse(null, { a:98, b:99 });
    var keys = Object.keys(reverse);
    reverse[keys[0]].should.equal(99);
    reverse[keys[1]].should.equal(98);
  });

});
