/**
 * @fileoverview Compiled template for file
 *
 * layout.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('layout');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
layout = function(env) {
    twig.Template.call(this, env);

    this.setBlocks({
        'title': twig.bind(this.block_title, this),
        'stylesheets': twig.bind(this.block_stylesheets, this),
        'body': twig.bind(this.block_body, this),
        'javascripts': twig.bind(this.block_javascripts, this)
    });
};
twig.inherits(layout, twig.Template);

/**
 * @inheritDoc
 */
layout.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
layout.prototype.render_ = function(sb, context, blocks) {
    // line 1
    sb.append("<!DOCTYPE html>\n<html>\n    <head>\n    <title>");
    // line 4
    sb.append(this.renderBlock("title", context, blocks));
    sb.append("<\/title>\n    ");
    // line 5
    sb.append(this.renderBlock("stylesheets", context, blocks));
    // line 8
    sb.append("<\/head>\n<body>\n    ");
    // line 10
    sb.append(this.renderBlock("body", context, blocks));
    // line 11
    sb.append("    ");
    sb.append(this.renderBlock("javascripts", context, blocks));
    // line 14
    sb.append("<\/body>\n<\/html>");
};

// line 4
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
layout.prototype.block_title = function(sb, context, blocks) {
    sb.append("bar");
};

// line 5
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
layout.prototype.block_stylesheets = function(sb, context, blocks) {
    // line 6
    sb.append("    <link rel=\"stylesheet\" href=\"foo.css\" \/>\n    ");
};

// line 10
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
layout.prototype.block_body = function(sb, context, blocks) {
};

// line 11
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
layout.prototype.block_javascripts = function(sb, context, blocks) {
    // line 12
    sb.append("    <script language=\"javascript\" type=\"text\/javascript\" src=\"jquery.js\"><\/script>\n    ");
};

/**
 * @inheritDoc
 */
layout.prototype.getTemplateName = function() {
    return "layout";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
layout.prototype.isTraitable = function() {
    return false;
};
