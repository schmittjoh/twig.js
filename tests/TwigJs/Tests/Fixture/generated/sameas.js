/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/sameas.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('Twig.templates.sameas');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
Twig.templates['sameas'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(Twig.templates['sameas'], twig.Template);

/**
 * @inheritDoc
 */
Twig.templates['sameas'].prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
Twig.templates['sameas'].prototype.render_ = function(sb, context, blocks) {
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
Twig.templates['sameas'].prototype.getTemplateName = function() {
    return "sameas";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
Twig.templates['sameas'].prototype.isTraitable = function() {
    return false;
};
