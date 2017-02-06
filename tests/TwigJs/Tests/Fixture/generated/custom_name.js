/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/custom_name.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('Twig.templates.foo');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
Twig.templates['foo'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(Twig.templates['foo'], twig.Template);

/**
 * @inheritDoc
 */
Twig.templates['foo'].prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
Twig.templates['foo'].prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 2
    sb.append("Hello!\n");
};

/**
 * @inheritDoc
 */
Twig.templates['foo'].prototype.getTemplateName = function() {
    return "foo";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
Twig.templates['foo'].prototype.isTraitable = function() {
    return false;
};
