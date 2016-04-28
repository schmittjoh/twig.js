/**
 * @fileoverview Compiled template for file
 *
 * custom_name_extended.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('twig.templates');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
twig.templates['bar'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(twig.templates['bar'], twig.Template);

/**
 * @inheritDoc
 */
twig.templates['bar'].prototype.getParent_ = function(context) {
    return twig.templates['foo'];
};

/**
 * @inheritDoc
 */
twig.templates['bar'].prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    this.getParent(context).render_(sb, context, twig.extend({}, this.getBlocks(), blocks));
};

/**
 * @inheritDoc
 */
twig.templates['bar'].prototype.getTemplateName = function() {
    return "bar";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
twig.templates['bar'].prototype.isTraitable = function() {
    return false;
};
