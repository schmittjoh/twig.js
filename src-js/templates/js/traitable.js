/**
 * @fileoverview Compiled template for file
 *
 * traitable.twig
 */

goog.provide('traitable');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
traitable = function(env) {
    twig.Template.call(this, env);

    this.setBlocks({
        'title': twig.bind(this.block_title, this)
    });
};
twig.inherits(traitable, twig.Template);

/**
 * @inheritDoc
 */
traitable.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
traitable.prototype.render_ = function(sb, context, blocks) {
    // line 1
    sb.append(this.renderBlock("title", context, blocks));
};

/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
traitable.prototype.block_title = function(sb, context, blocks) {
    sb.append("foo");
};

/**
 * @inheritDoc
 */
traitable.prototype.getTemplateName = function() {
    return "traitable";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
traitable.prototype.isTraitable = function() {
    return true;
};
