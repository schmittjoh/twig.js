/**
 * @fileoverview Compiled template for file
 *
 * sameas.twig
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
twig.templates['sameas'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(twig.templates['sameas'], twig.Template);

/**
 * @inheritDoc
 */
twig.templates['sameas'].prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
twig.templates['sameas'].prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 1
    sb.append("This is a simple template.<br \/><br \/>\n\n");
    // line 3
    if ((!(("name" in context ? context["name"] : null) === false))) {
        // line 4
        sb.append("Hello not false!\n");
    }
};

/**
 * @inheritDoc
 */
twig.templates['sameas'].prototype.getTemplateName = function() {
    return "sameas";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
twig.templates['sameas'].prototype.isTraitable = function() {
    return false;
};
