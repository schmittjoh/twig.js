describe("twig.contains", function () {

  it("detects 'foo' in 'foobar'", function () {
    twig.contains("foobar", "foo").should.equal(true);
  });

  it("detects 'bar' not in 'foo'", function () {
    twig.contains("foo", "bar").should.equal(false);
  });

  it("detects 'foo' in ['foo', 'bar']", function () {
    twig.contains(["foo", "bar"], "foo").should.equal(true);
  });

  it("detects 'bar' not in ['foo']", function () {
    twig.contains(["foo"], "bar").should.equal(false);
  });

  it("detects 'bar' in {'foo':'bar}", function () {
    twig.contains({foo: 'bar'}, "bar").should.equal(true);
  });

  it("detects 'foo' not in {'foo':'bar}", function () {
    twig.contains({foo: 'bar'}, "foo").should.equal(false);
  });

  it("detects '' not in 'bar'", function () {
    twig.contains('bar', '').should.equal(false);
  });

  it("detects '' in ''", function () {
    twig.contains('', '').should.equal(true);
  });

});
