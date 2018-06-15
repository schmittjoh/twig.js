/**
 * @fileoverview Compiled template for file
 *
 * Tests/Fixture/templates/base_view.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('base_view');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
base_view = function(env) {
    twig.Template.call(this, env);

    this.setBlocks({
        'title': twig.bind(this.block_title, this),
        'javascripts': twig.bind(this.block_javascripts, this),
        'body': twig.bind(this.block_body, this)
    });
};
twig.inherits(base_view, twig.Template);

/**
 * @inheritDoc
 */
base_view.prototype.getParent_ = function(context) {
    return base;
};

/**
 * @inheritDoc
 */
base_view.prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 3
    context["__internal_19e4402c168b2b967e32502724fd7259940b610e71106e32d1ab38064bc9dbad"] = this.env_.createTemplate(macros);
    this.getParent(context).render_(sb, context, twig.extend({}, this.getBlocks(), blocks));
};

// line 5
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base_view.prototype.block_title = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
    sb.append("Yup");
};

// line 7
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base_view.prototype.block_javascripts = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 8
    sb.append("    ");
    sb.append(this.renderParentBlock("javascripts", context, blocks));
    sb.append("\n\n    <script language=\"javascript\" type=\"text\/javascript\" src=\"welcome.js\"><\/script>\n");
};

// line 13
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
base_view.prototype.block_body = function(sb, context, blocks) {
blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 14
    sb.append("\n    <h1>Welcome ");
    // line 15
    sb.append(twig.filter.escape(this.env_, ((("name" in context)) ? (twig.filter.def(("name" in context ? context["name"] : null), "World")) : ("World")), "html", null, true));
    sb.append("!<\/h1>\n\n    <p>");
    // line 18
    if ((!twig.empty(("name" in context ? context["name"] : null)))) {
        // line 19
        sb.append("Some Status.");
    } else {
        // line 21
        sb.append(context["__internal_19e4402c168b2b967e32502724fd7259940b610e71106e32d1ab38064bc9dbad"].macro_link("\/login", "Please login.", "Login"));
    }
    // line 23
    sb.append("<\/p>\n\n");
};

/**
 * @inheritDoc
 */
base_view.prototype.getTemplateName = function() {
    return "base_view";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
base_view.prototype.isTraitable = function() {
    return false;
};
