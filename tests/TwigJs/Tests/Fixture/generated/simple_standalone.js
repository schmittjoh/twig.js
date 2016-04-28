/**
 * @fileoverview Compiled template for file
 *
 * simple_standalone.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('twig.templates');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
twig.templates['simple_standalone'] = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(twig.templates['simple_standalone'], twig.Template);

/**
 * @inheritDoc
 */
twig.templates['simple_standalone'].prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
twig.templates['simple_standalone'].prototype.render_ = function(sb, context, blocks) {
    blocks = typeof(blocks) == "undefined" ? {} : blocks;
    // line 1
    sb.append("This is a simple template.<br \/><br \/>\n\n");
    // line 3
    if (("name" in context)) {
        // line 4
        sb.append("Hello ");
        sb.append(twig.filter.escape(this.env_, twig.filter.capitalize(this.env_, ("name" in context ? context["name"] : null)), "html", null, true));
        sb.append("!\n");
    } else {
        // line 6
        sb.append("Hello World!\n");
    }
};

/**
 * @inheritDoc
 */
twig.templates['simple_standalone'].prototype.getTemplateName = function() {
    return "simple_standalone";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
twig.templates['simple_standalone'].prototype.isTraitable = function() {
    return false;
};
