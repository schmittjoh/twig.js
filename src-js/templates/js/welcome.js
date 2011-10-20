/**
 * @fileoverview Compiled template for file
 *
 * welcome.twig
 */

goog.provide('welcome');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
welcome = function(env) {
    twig.Template.call(this, env);

    var trait_0 = this.env_.createTemplate(traitable);
    // line 2
    if (!trait_0.isTraitable()) {
        throw Error('Template "' + trait_0.getTemplateName() + '" cannot be used as a trait.');
    }
    var trait_0_blocks = trait_0.getBlocks();

    var traits = twig.extend({},
        trait_0_blocks
    );
    this.setTraits(traits);

    this.setBlocks(twig.extend({}, traits, {
        'javascripts': twig.bind(this.block_javascripts, this),
        'body': twig.bind(this.block_body, this)
    }));
};
twig.inherits(welcome, twig.Template);

/**
 * @inheritDoc
 */
welcome.prototype.getParent_ = function(context) {
    return (((!("ajax" in context))) ? (layout) : (ajax_layout));
};

/**
 * @inheritDoc
 */
welcome.prototype.render_ = function(sb, context, blocks) {
    // line 3
    context["__internal_9162a8dce4458f34ee79ba42a570ec4d_1"] = this.env_.createTemplate(macros);
    this.getParent(context).render_(sb, context, twig.extend({}, this.getBlocks(), blocks));
};

// line 5
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
welcome.prototype.block_javascripts = function(sb, context, blocks) {
    // line 6
    sb.append("    ");
    sb.append(this.renderParentBlock("javascripts", context, blocks));
    sb.append("\n\n    <script language=\"javascript\" type=\"text\/javascript\" src=\"welcome.js\"><\/script>\n");
};

// line 11
/**
 * @param {!twig.StringBuffer} sb
 * @param {Object.<*>} context
 * @param {Object.<Function>} blocks
 */
welcome.prototype.block_body = function(sb, context, blocks) {
    // line 12
    sb.append("\n    <h1>Welcome ");
    // line 13
    var tmp_name = ("name" in context) ? context["name"] : null;
    sb.append(twig.filter.escape(this.env_, ((("name" in context)) ? (twig.filter.def(tmp_name, "World")) : ("World")), "html", null, true));
    sb.append("!<\/h1>\n\n    <p>");
    // line 16
    if ((!twig.empty(tmp_name))) {
        // line 17
        sb.append("Some Status.");
    } else {
        // line 19
        sb.append(twig.filter.escape(this.env_, twig.attr(context["__internal_9162a8dce4458f34ee79ba42a570ec4d_1"], "link", ["\/login", "Please login.", "Login"], "method"), "html", null, true));
    }
    // line 21
    sb.append("<\/p>\n\n");
};

/**
 * @inheritDoc
 */
welcome.prototype.getTemplateName = function() {
    return "welcome";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
welcome.prototype.isTraitable = function() {
    return false;
};
