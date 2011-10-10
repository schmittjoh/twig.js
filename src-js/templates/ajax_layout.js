/**
 * @fileoverview Compiled template for file
 *
 * ajax_layout.twig
 */

goog.provide('ajax_layout');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
ajax_layout = function(env) {
    twig.Template.call(this, env);

    this.setBlocks({
        'body': twig.bind(this.block_body, this)
    });
};
twig.inherits(ajax_layout, twig.Template);

/**
 * @inheritDoc
 */
ajax_layout.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
ajax_layout.prototype.render_ = function(sb, context, blocks) {
    // line 1
    sb.append(this.renderBlock("body", context, blocks));
};

/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
ajax_layout.prototype.block_body = function(sb, context, blocks) {
};

/**
 * @inheritDoc
 */
ajax_layout.prototype.getTemplateName = function() {
    return "ajax_layout";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
ajax_layout.prototype.isTraitable = function() {
    return true;
};
