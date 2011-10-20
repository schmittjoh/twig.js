/**
 * @fileoverview Compiled template for file
 *
 * hello_world.twig
 */

goog.provide('hello_world');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
hello_world = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(hello_world, twig.Template);

/**
 * @inheritDoc
 */
hello_world.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
hello_world.prototype.render_ = function(sb, context, blocks) {
    // line 1
    sb.append("Hello ");
    var tmp_name = ("name" in context) ? context["name"] : null;
    sb.append(twig.filter.escape(this.env_, ((("name" in context)) ? (twig.filter.def(tmp_name, "World")) : ("World")), "html", null, true));
    sb.append("!");
};

/**
 * @inheritDoc
 */
hello_world.prototype.getTemplateName = function() {
    return "hello_world";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
hello_world.prototype.isTraitable = function() {
    return false;
};
