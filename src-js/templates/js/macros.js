/**
 * @fileoverview Compiled template for file
 *
 * macros.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('macros');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
macros = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(macros, twig.Template);

/**
 * @inheritDoc
 */
macros.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
macros.prototype.render_ = function(sb, context, blocks) {
};

// line 1
/**
 * Macro "link"
 *
 * @param {*} opt_link
 * @param {*} opt_content
 * @param {*} opt_title
 * @return {string}
 */
macros.prototype.getlink = function(opt_link, opt_content, opt_title) {
    var context = twig.extend({}, this.env_.getGlobals());

    var sb = new twig.StringBuffer;
    // line 2
    sb.append("<a href=\"");
    sb.append(twig.filter.escape(this.env_, opt_link, "html", null, true));
    sb.append("\"");
    // line 3
    if ((!twig.empty(opt_title))) {
        sb.append(" title=\"");
        sb.append(twig.filter.escape(this.env_, opt_title, "html", null, true));
        sb.append("\"");
    }
    // line 4
    sb.append(">");
    sb.append(twig.filter.escape(this.env_, opt_content, "html", null, true));
    sb.append("<\/a>\n");

    return new twig.Markup(sb.toString());
};

/**
 * @inheritDoc
 */
macros.prototype.getTemplateName = function() {
    return "macros";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
macros.prototype.isTraitable = function() {
    return false;
};
