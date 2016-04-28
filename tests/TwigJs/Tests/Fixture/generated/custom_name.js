/**
 * @fileoverview Compiled template for file
 *
 * custom_name.twig
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
twig.templates['foo'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(twig.templates['foo'], twig.Template);

/**
 * @inheritDoc
 */
twig.templates['foo'].prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
twig.templates['foo'].prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 2
    sb.append("Hello!\n");
};

/**
 * @inheritDoc
 */
twig.templates['foo'].prototype.getTemplateName = function() {
    return "foo";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
twig.templates['foo'].prototype.isTraitable = function() {
    return false;
};
