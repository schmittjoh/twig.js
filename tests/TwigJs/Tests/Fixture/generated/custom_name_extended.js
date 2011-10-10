/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/custom_name_extended.twig
 */

goog.provide('bar');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
bar = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(bar, twig.Template);

/**
 * @inheritDoc
 */
bar.prototype.getParent_ = function(context) {
    return foo;
};

/**
 * @inheritDoc
 */
bar.prototype.render_ = function(sb, context, blocks) {
    this.getParent(context).render_(sb, context, twig.extend({}, this.getBlocks(), blocks));
};

/**
 * @inheritDoc
 */
bar.prototype.getTemplateName = function() {
    return "bar";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
bar.prototype.isTraitable = function() {
    return false;
};
