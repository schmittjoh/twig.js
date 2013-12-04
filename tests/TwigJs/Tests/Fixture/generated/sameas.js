/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/sameas.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('sameas');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
sameas = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(sameas, twig.Template);

/**
 * @inheritDoc
 */
sameas.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
sameas.prototype.render_ = function(sb, context, blocks) {
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
sameas.prototype.getTemplateName = function() {
    return "sameas";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
sameas.prototype.isTraitable = function() {
    return false;
};
