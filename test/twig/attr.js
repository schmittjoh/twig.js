describe("twig.attr", function () {

  var SimpleObject = function(foo, bar) {
    this.foo_ = foo;
    this.bar = bar;
    this.baz_ = true;
  };

  SimpleObject.prototype.getFoo = function() {
    return this.foo_;
  };

  SimpleObject.prototype.getBar = function() {
    return 'foo' + this.bar;
  };

  SimpleObject.prototype.isBaz = function() {
    return this.baz_;
  };

  it("retrieves array elements", function () {
    twig.attr(["foo", "bar"], 0).should.equal("foo");
  });

  it("handles requests for non-existent array elements by returning false", function () {
    twig.attr(["foo","bar"], 5, undefined, undefined, true).should.equal(false);
  });

  it("retrieves object properties", function () {
    twig.attr({"foo":"bar"}, "foo").should.equal("bar");
  });

  it("can tell when a property is present", function () {
    twig.attr({"foo":"bar"}, "foo", undefined, undefined, true).should.equal(true);
  });

  it("can tell when a property is absent", function () {
    twig.attr({"foo":"bar"}, "bar", undefined, undefined, true).should.equal(false);
  });

  it("gets properties from getter methods", function () {
    twig.attr(new SimpleObject("foo"), "foo").should.equal("foo");
  });

  it("can tell when a getter is present", function () {
    twig.attr(new SimpleObject("foo"), "foo", undefined, undefined, true).should.equal(true);
  });

  it("can tell when a getter is absent", function () {
    twig.attr(new SimpleObject("foo"), "foobar", undefined, undefined, true).should.equal(false);
  });

  it("doesn't call the getter when told to use only array access", function () {
    (twig.attr(twig.attr(new SimpleObject(), "foo", undefined, "array")) === null).should.be.true;
  });

  it("calls the getter instead of accessing the property when told to avoid array access", function () {
    twig.attr(new SimpleObject("foo", "bar"), "bar", undefined, "method").should.equal("foobar");
  });

  it("calls isser methods", function () {
    twig.attr(new SimpleObject(), "baz").should.equal(true);
  });

});
