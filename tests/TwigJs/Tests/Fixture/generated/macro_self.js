/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/macro_self.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('macro_self');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
macro_self = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(macro_self, twig.Template);

/**
 * @inheritDoc
 */
macro_self.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
macro_self.prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 4
    sb.append(twig.filter.escape(this.env_, twig.attr(this, "show", ["Hello World!"], "method"), "html", null, true));
    sb.append("\n");
};

// line 1
/**
 * Macro "show"
 *
 * @param {*} opt_value
 * @return {string}
 */
macro_self.prototype.macro_show = function(opt_value) {
    var context = twig.extend({}, this.env_.getGlobals());

    var sb = new twig.StringBuffer;
    // line 2
    sb.append("the value is: ");
    sb.append(twig.filter.escape(this.env_, opt_value, "html", null, true));

    return new twig.Markup(sb.toString());
};

/**
 * @inheritDoc
 */
macro_self.prototype.getTemplateName = function() {
    return "macro_self";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
macro_self.prototype.isTraitable = function() {
    return false;
};
