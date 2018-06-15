/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/divisibleby.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('divisibleby');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
divisibleby = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(divisibleby, twig.Template);

/**
 * @inheritDoc
 */
divisibleby.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
divisibleby.prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 1
    context["count"] = 3;
    // line 2
    sb.append("\n");
    // line 3
    if (0 === ("count" in context ? context["count"] : null) % 3) {
        // line 4
        sb.append("  Yo!\n");
    }
};

/**
 * @inheritDoc
 */
divisibleby.prototype.getTemplateName = function() {
    return "divisibleby";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
divisibleby.prototype.isTraitable = function() {
    return false;
};
