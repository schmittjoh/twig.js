describe("twig.filter.json_encode", function () {

  it("encodes data in JSON format", function () {
    twig.filter.json_encode({ foo: 123 }).should.equal('{"foo":123}');
  });

});
