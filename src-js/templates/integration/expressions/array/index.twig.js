/**
 * @fileoverview Compiled template for file
 *
 * index.twig
 */

goog.provide('index');

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
    var tmp_a = ("a" in context) ? context["a"] : null;
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr(tmp_a, 2, undefined, "array"), ","), "html", null, true));
    sb.append("\n");
    // line 16
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.attr(twig.attr(tmp_a, 3, undefined, "array"), "foo", undefined, "array"), ","), "html", null, true));
    sb.append("\n\n");
    // line 19
    var tmp_foo = ("foo" in context) ? context["foo"] : null;
    var tmp_bar = ("bar" in context) ? context["bar"] : null;
    sb.append(twig.filter.escape(this.env_, twig.filter.join([twig.attr(tmp_foo, tmp_bar, undefined, "array")], ","), "html", null, true));
    sb.append("\n\n");
    // line 22
    sb.append(twig.filter.escape(this.env_, twig.filter.join([twig.filter.upper(this.env_, "foo"), twig.filter.upper(this.env_, tmp_bar), (tmp_bar == tmp_foo)], ","), "html", null, true));
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
    var tmp_a = ("a" in context) ? context["a"] : null;
    var tmp_b = ("b" in context) ? context["b"] : null;
    context["ary"] = twig.createObj(tmp_a, "a", tmp_b, "b", "c", "c", (tmp_a + tmp_b), "d");
    // line 36
    var tmp_ary = ("ary" in context) ? context["ary"] : null;
    sb.append(twig.filter.escape(this.env_, twig.filter.join(twig.filter.keys(tmp_ary), ","), "html", null, true));
    sb.append("\n");
    // line 37
    sb.append(twig.filter.escape(this.env_, twig.filter.join(tmp_ary, ","), "html", null, true));
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
