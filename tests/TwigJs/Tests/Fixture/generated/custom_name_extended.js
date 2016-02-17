/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/custom_name_extended.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('Twig.templates.bar');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
Twig.templates['bar'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(Twig.templates['bar'], twig.Template);

/**
 * @inheritDoc
 */
Twig.templates['bar'].prototype.getParent_ = function(context) {
    return Twig.templates.foo;
};

/**
 * @inheritDoc
 */
Twig.templates['bar'].prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    this.getParent(context).render_(sb, context, twig.extend({}, this.getBlocks(), blocks));
};

/**
 * @inheritDoc
 */
Twig.templates['bar'].prototype.getTemplateName = function() {
    return "bar";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
Twig.templates['bar'].prototype.isTraitable = function() {
    return false;
};
