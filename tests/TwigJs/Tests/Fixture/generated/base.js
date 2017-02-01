/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/base.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('base');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
base = function(env) {
    twig.Template.call(this, env);

    this.setBlocks({
        'title': twig.bind(this.block_title, this),
        'stylesheets': twig.bind(this.block_stylesheets, this),
        'body': twig.bind(this.block_body, this),
        'javascripts': twig.bind(this.block_javascripts, this)
    });
};
twig.inherits(base, twig.Template);

/**
 * @inheritDoc
 */
base.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
base.prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
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
    sb.append("<\/body>\n<\/html>\n");
};

// line 4
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base.prototype.block_title = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
    sb.append("bar");
};

// line 5
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base.prototype.block_stylesheets = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 6
    sb.append("    <link rel=\"stylesheet\" href=\"foo.css\" \/>\n    ");
};

// line 10
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base.prototype.block_body = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
};

// line 11
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base.prototype.block_javascripts = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 12
    sb.append("    <script language=\"javascript\" type=\"text\/javascript\" src=\"jquery.js\"><\/script>\n    ");
};

/**
 * @inheritDoc
 */
base.prototype.getTemplateName = function() {
    return "base";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
base.prototype.isTraitable = function() {
    return false;
};
