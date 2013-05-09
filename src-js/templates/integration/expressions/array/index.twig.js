/**
 * @fileoverview Compiled template for file
 *
 * index.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('index');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
index = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(index, twig.Template);

/**
 * @inheritDoc
 */
index.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
index.prototype.render_ = function(sb, context, blocks) {
    // line 1
    sb.append("\n");
    // line 3
    sb.append(twig.filter.escape(this.env_, twig.filter.join([], ","), "html", null, true));
    sb.append("\n\n");
    // line 5
    sb.append(twig.filter.escape(this.env_, twig.filter.join([1, 2], ","), "html", null, true));
    sb.append("\n");
    // line 6
    sb.append(twig.filter.escape(this.env_, twig.filter.join(["foo", "bar"], ","), "html", null, true));
    sb.append("\n");
    // line 7
    sb.append(twig.filter.escape(this.env_, twig.filter.join({0: 1, "foo": "bar"}, ","), "html", null, true));
    sb.append("\n");
    // line 8
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.filter.keys({0: 1, "foo": "bar"}), ","), "html", null, true));
    sb.append("\n\n");
    // line 10
    sb.append(twig.filter.escape(this.env_, twig.filter.join({0: 1, "foo": "bar"}, ","), "html", null, true));
    sb.append("\n");
    // line 11
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.filter.keys({0: 1, "foo": "bar"}), ","), "html", null, true));
    sb.append("\n\n");
    // line 14
    context["a"] = [1, 2, [1, 2], {"foo": {"foo": "bar"}}];
    // line 15
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr("a" in context ? context["a"] : null, 2, undefined, "array"), ","), "html", null, true));
    sb.append("\n");
    // line 16
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr(twig.attr("a" in context ? context["a"] : null, 3, undefined, "array"), "foo", undefined, "array"), ","), "html", null, true));
    sb.append("\n\n");
    // line 19
    sb.append(twig.filter.escape(this.env_, twig.filter.join([twig.attr("foo" in context ? context["foo"] : null, "bar" in context ? context["bar"] : null, undefined, "array")], ","), "html", null, true));
    sb.append("\n\n");
    // line 22
    sb.append(twig.filter.escape(this.env_, twig.filter.join([twig.filter.upper(this.env_, "foo"), twig.filter.upper(this.env_, "bar" in context ? context["bar"] : null), (("bar" in context ? context["bar"] : null) == ("foo" in context ? context["foo"] : null))], ","), "html", null, true));
    sb.append("\n\n");
    // line 25
    sb.append(twig.filter.escape(this.env_, twig.filter.join([1, 2], ","), "html", null, true));
    // line 30
    sb.append("\n\n");
    // line 33
    context["a"] = 1;
    // line 34
    context["b"] = "foo";
    // line 35
    context["ary"] = twig.createObj("a" in context ? context["a"] : null, "a", "b" in context ? context["b"] : null, "b", "c", "c", (("a" in context ? context["a"] : null) + ("b" in context ? context["b"] : null)), "d");
    // line 36
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.filter.keys("ary" in context ? context["ary"] : null), ","), "html", null, true));
    sb.append("\n");
    // line 37
    sb.append(twig.filter.escape(this.env_, twig.filter.join("ary" in context ? context["ary"] : null, ","), "html", null, true));
};

/**
 * @inheritDoc
 */
index.prototype.getTemplateName = function() {
    return "index";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
index.prototype.isTraitable = function() {
    return false;
};
