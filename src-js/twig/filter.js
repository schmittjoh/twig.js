/*
 * Copyright 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('twig.filter');

goog.require('twig');
goog.require('twig.Markup');

goog.require('goog.string');
goog.require('goog.object');

/**
 * @export
 * @param {string} str
 * @param {Object.<string>} map
 * @return {string}
 */
twig.filter.replace = function(str, map) {
	for (var key in map) {
		str = str.replace(new RegExp(key, 'g'), map[key]);
	}
	
	return str;
};

/**
 * @export
 * @param {*} value
 * @param {*=} opt_default
 * @return {*}
 */
twig.filter.def = function(value, opt_default) {
	if (twig.empty(value)) {
		return opt_default || '';
	}
	
	return value;
};

/**
 * @export
 * @param {twig.Environment} env
 * @param {string} str
 * @return {string}
 */
twig.filter.capitalize = function(env, str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
};

/**
 * @export
 * @param {twig.Environment} env
 * @param {*} value
 * @param {twig.filter.escape.Type=} opt_type
 * @param {string|null=} opt_charset
 * @param {boolean=} opt_autoescape defaults to false
 * @return {string}
 */
twig.filter.escape = function(env, value, opt_type, opt_charset, opt_autoescape) {
	if (opt_autoescape && value instanceof twig.Markup) {
		return value.toString();
	}
	
	value = goog.string.makeSafe(value);
	
	if (twig.filter.escape.Type.JAVASCRIPT === opt_type) {
		value = goog.string.quote(value);
		
		return value.substring(1, value.length - 1);
	} else if (!opt_type || twig.filter.escape.Type.HTML === opt_type) {
		return goog.string.htmlEscape(value);
	} else if (twig.filter.escape.Type.URL === opt_type) {
		return encodeURIComponent(value);
	}
	
	throw Error("The type '" + opt_type + "' is not supported.");
};

/**
 * @enum {string}
 */
twig.filter.escape.Type = {
	HTML: "html",
	JAVASCRIPT: "js",
	URL: "url"
};

/**
 * @export
 * @param {twig.Environment} env
 * @param {goog.array.ArrayLike|Object|string} value
 * @return {number}
 */
twig.filter.length = function(env, value) {
	return twig.count(value);
};

/**
 * 
 * @param {Array|Object} value
 * @param {string=} opt_glue
 * @return {string}
 */
twig.filter.join = function(value, opt_glue) {
	var glue = opt_glue || '';
	var buffer = new twig.StringBuffer();
	
	var first = true;
	twig.forEach(value, function(v) {
		if (!first) {
			buffer.append(glue);
		}
		first = false;
		
		buffer.append(v);
	});
	
	return buffer.toString();
};

twig.filter.keys = goog.object.getKeys;

/**
 * @param {twig.Environment} env
 * @param {string} value
 * @return {string}
 */
twig.filter.upper = function(env, value) {
	return value.toUpperCase();
};

/**
 * @param {twig.Environment} env
 * @param {string} value
 * @return {string}
 */
twig.filter.lower = function(env, value) {
	return value.toLowerCase();
};