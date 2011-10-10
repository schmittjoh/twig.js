/**
 * @fileoverview Compiled template for file
 *
 * counter.twig
 */

goog.provide('counter');

/**
 * @constructor
 * @param {twig.Environment} env
 * @extends {twig.Template}
 */
counter = function(env) {
    twig.Template.call(this, env);
};
twig.inherits(counter, twig.Template);

/**
 * @inheritDoc
 */
counter.prototype.getParent_ = function(context) {
    return false;
};

/**
 * @inheritDoc
 */
counter.prototype.render_ = function(sb, context, blocks) {
    // line 1
    context['_parent'] = context;
    var seq = twig.range(1, 5);
    var loop = {
        'index0': 0,
        'index': 1,
        'first': true
    };
    if (twig.countable(seq)) {
        var length = twig.count(seq);
        loop['revindex0'] = length - 1;
        loop['revindex'] = length;
        loop['length'] = length;
        loop['last'] = 1 === length;
    }
    twig.forEach(seq, function(v, k) {
        context["_key"] = k;
        context["i"] = v;
        // line 2
        var tmp_i = ("i" in context) ? context["i"] : null;
        sb.append(twig.filter.escape(this.env_, tmp_i, "html", null, true));
        // line 4
        var seq1 = twig.range(tmp_i, tmp_i);
        twig.forEach(seq1, function(v1, k1) {
            context["_key"] = k1;
            context["j"] = v1;
            // line 5
            var tmp_j = ("j" in context) ? context["j"] : null;
            sb.append(twig.filter.escape(this.env_, (", " + tmp_j), "html", null, true));
        }, this);
        // line 8
        if ((!twig.attr(loop, "last"))) {
            sb.append(", ");
        }
        ++loop['index0'];
        ++loop['index'];
        loop['first'] = false;
        if (loop['length']) {
            --loop['revindex0'];
            --loop['revindex'];
            loop['last'] = 0 === loop['revindex0'];
        }
    }, this);
};

/**
 * @inheritDoc
 */
counter.prototype.getTemplateName = function() {
    return "counter";
};

/**
 * Returns whether this template can be used as trait.
 *
 * @return {boolean}
 */
counter.prototype.isTraitable = function() {
    return false;
};
