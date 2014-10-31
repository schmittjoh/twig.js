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

  describe("keeps old value intact when", function () {

    it("reverses string", function(){
      var value = "abcdef";
      twig.filter.reverse(null, value).should.not.equal(value);
    });

    it("reverses arrays", function () {
      var value = [1, 2, 3, 4];
      var reversed = twig.filter.reverse(null, value);

      reversed[0].should.not.equal(value[0]);
      reversed[1].should.not.equal(value[1]);
      reversed[2].should.not.equal(value[2]);
      reversed[3].should.not.equal(value[3]);
    });

    it("reverses objects", function () {
      var object = { a:98, b:99 };
      var reverse = twig.filter.reverse(null, object);
      var keys = Object.keys(object);
      var reverseKeys = Object.keys(reverse);

      reverseKeys[0].should.not.equal(keys[0]);
      reverseKeys[1].should.not.equal(keys[1]);
    });
  })

});
