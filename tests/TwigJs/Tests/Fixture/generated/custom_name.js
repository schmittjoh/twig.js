/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/custom_name.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('foo');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
foo = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(foo, twig.Template);

/**
 * @inheritDoc
 */
foo.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
foo.prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 2
    sb.append("Hello!\n");
};

/**
 * @inheritDoc
 */
foo.prototype.getTemplateName = function() {
    return "foo";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
foo.prototype.isTraitable = function() {
    return false;
};
