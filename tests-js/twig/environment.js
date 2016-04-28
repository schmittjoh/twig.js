var sinon = require("sinon");
describe("twig.Environment", function () {

  var env;

  beforeEach(function () {
    env = new twig.Environment();
  });

  describe("#filter", function () {
    var filter;

    beforeEach(function () {
      filter = sinon.spy();
      env.setFilter("baz", filter);
    });

    it("runs filters that have been set", function () {
      env.filter("baz", "foo", "bar");
      filter.calledWith("foo", "bar").should.be.true;
    });
  });

  describe("#setGlobal", function () {

    it("assigns a property into the environment's globals", function () {
      env.setGlobal("foo", "bar");
      env.getGlobals().should.eql({ foo:"bar" });
    });

  });

  describe("#createTemplate", function () {

    var FooTemplate = function(env) {
      twig.Template.call(this, env);
    }

    twig.inherits(FooTemplate, twig.Template);

    FooTemplate.prototype.render_ = function(sb, context, blocks) {
      sb.append("Foo");
    };

    BarTemplate = function(env) {
      twig.Template.call(this, env);
    }

    twig.inherits(BarTemplate, twig.Template);

    BarTemplate.prototype.render_ = function(sb, context, blocks) {
      sb.append("Bar");
    };

    var template, anotherTemplate, diffTemplate;

    beforeEach(function () {
      template = env.createTemplate(FooTemplate);
      anotherTemplate = env.createTemplate(FooTemplate);
      diffTemplate = env.createTemplate(BarTemplate);
    });

    it("leaves the templates as an instanceof themselves", function () {
      (template instanceof FooTemplate).should.be.true;
    });

    it("injects a reference to the environment", function () {
      template.env_.should.equal(env);
    });

    it("returns the exact same reference when making the same template twice", function () {
      template.should.equal(anotherTemplate);
    });

    it("returns a different reference when making a different template", function () {
      template.should.not.equal(diffTemplate);
    });

    it("generates templates that render their output correctly", function () {
      template.render().should.equal("Foo");
      diffTemplate.render().should.equal("Bar");
    });

  });


});
