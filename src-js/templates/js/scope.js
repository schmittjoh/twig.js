/**
 * @fileoverview Compiled template for file
 *
 * scope.twig
 *
 * @suppress {checkTypes|fileoverviewTags}
 */

goog.provide('scope');

goog.require('twig');
goog.require('twig.filter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
scope = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(scope, twig.Template);

/**
 * @inheritDoc
 */
scope.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
scope.prototype.render_ = function(sb, context, blocks) {
    // line 1
    context["example"] = 12345;
    if (false) {
        sb.append(twig.filter.escape(this.env_, ("example" in context ? context["example"] : null), "html", null, true));
    }
    sb.append(3);
    sb.append("\n");
};

/**
 * @inheritDoc
 */
scope.prototype.getTemplateName = function() {
    return "scope";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
scope.prototype.isTraitable = function() {
    return false;
};
