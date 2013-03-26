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

/**
 * @fileoverview Contains some utility functions
 * 
 * The implementation of these methods are taken from the Google Closure Library,
 * but may be overridden by using implementations of jQuery et. al.
 */

goog.provide('twig');
goog.provide('twig.StringBuffer');

goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');

twig.inherits = goog.inherits;
twig.bind = goog.bind;

goog.UID_PROPERTY_ = 'twig_ui_' + 
	Math.floor(Math.random() * 2147483648).toString(36);

/**
 * @constructor
 * @extends {goog.string.StringBuffer}
 */
twig.StringBuffer = goog.string.StringBuffer;

/**
 * Whether the given value is considered empty.
 * 
 * @param {*} value
 * @return {boolean}
 */
twig.empty = function(value) {
	if (null === value || false === value || undefined === value 
			|| 0 === value) {
		return true;
	}

	if (twig.countable(value)) {
		return 0 === twig.count(value);
	}
	
	return false;
};

/**
 * @param {Object} target
 * @param {...Object} var_args
 * @return {Object} The target object
 */
twig.extend = function(target, var_args) {
	goog.object.extend.apply(null, Array.prototype.slice.call(arguments, 0));
	
	return target;
};

/**
 * @enum {string}
 */
twig.AttrAccess = {
	ANY: 'any',
	ARRAY: 'array',
	METHOD: 'method'
};

/**
 * Returns the value of the given attr for the given object.
 * 
 * @param {Object|Array} obj
 * @param {string|number} attr
 * @param {Array.<*>=} opt_args
 * @param {twig.AttrAccess=} opt_accessType
 * @param {boolean=} opt_isTest
 * @return {*}
 */
twig.attr = function(obj, attr, opt_args, opt_accessType, opt_isTest) {
	var accessType = opt_accessType || twig.AttrAccess.ANY;
	var isTest = goog.isDef(opt_isTest) ? opt_isTest : false;
	
	if (!goog.isObject(obj) && !goog.isArray(obj)) {
		return isTest ? false : null;
	}
	
	if (attr in obj) {
		if (twig.AttrAccess.ARRAY !== accessType 
				&& goog.isFunction(obj[attr])) {
			if (isTest) {
				return true;
			}

			return obj[attr].apply(obj, opt_args || []);
		}
		
		if (twig.AttrAccess.METHOD !== accessType) {
			if (isTest) {
				return true;
			}

			return obj[attr];
		}
	}
	
	if (twig.AttrAccess.ARRAY === accessType
			|| goog.isArray(obj)) {
		if (isTest) {
			return false;
		}
		
		// FIXME: Should we add strict behavior similar to Twig's implementation?
		return null;
	}
	
	// check for getters/issers
	attr = attr.toLowerCase();
	var getter = 'get' + attr;
	var isser = 'is' + attr;
	var functionName = goog.object.findKey(obj, function(v, k) {
		k = k.toLowerCase();
		
		return k === getter || k === isser;
	});
	
	if (functionName && goog.isFunction(obj[functionName])) {
		if (isTest) {
			return true;
		}
		
		return obj[functionName].apply(obj, opt_args || []);
	}
	
	if (isTest) {
		return false;
	}
	
	// FIXME: Strict behavior?
	return null;
};

/**
 * Removes all non-meaningful spaces from the HTML.
 * 
 * @param {string} s
 * @return {string}
 */
twig.spaceless = function(s) {
	// Since IE doesn't include non-breaking-space (0xa0) in their \s character
	// class (as required by section 7.2 of the ECMAScript spec), we explicitly
	// include it in the regexp to enforce consistent cross-browser behavior.
	return goog.string.trim(s.replace(/>[\s\xa0]+</g, "><"));	
};

/**
 * Port of the PHP range() function.
 * 
 * @param {number} start
 * @param {number} end
 * @return {Array.<number>}
 */
twig.range = function(start, end) {
	var rs = [];
	for (;start <= end; start += 1) {
		rs.push(start);
	}
	
	return rs;
};

/**
 * @param {Array|Object|string} haystack
 * @param {*} needle
 * @return {boolean}
 */
twig.contains = function(haystack, needle) {
	if (goog.isArray(haystack)) {
		return goog.array.contains(/** @type {Array} */ (haystack), needle);
	}
	if (goog.isString(haystack)) {
		return goog.string.contains(haystack, /** @type {string} */ (needle));
	}
	
	return goog.object.contains(/** @type {Object} */ (haystack), needle);
};

/**
 * Returns whether the given value is countable.
 * 
 * @param {*} v
 * @return {boolean}
 */
twig.countable = function(v) {
	return goog.isArray(v) || goog.isString(v) || goog.isObject(v);
};

/**
 * Returns the count for the given value.
 * 
 * @param {*} v
 * @return {number}
 */
twig.count = function(v) {
	if (goog.isArray(v)) {
		return v.length;
	}
	
	if (goog.isString(v)) {
		return v.length;
	}
	
	if (goog.isObject(v)) {
		return goog.object.getCount(v);
	}
	
	throw Error((typeof v) + " is not countable.");
};

/**
 * Returns the given value as a string
 *
 * @param {*} value
 * @return {string}
 */
twig.castToString = function(value) {
	if (typeof value === "number") {
		return value.toString();
	}
	return "";
};

/**
 * 
 * @param {Array|Object} v
 * @param {Function} func
 * @param {Object=} opt_this
 */
twig.forEach = function(v, func, opt_this) {
	if (goog.isArray(v)) {
		goog.array.forEach(/** @type {Array} */ (v), func, opt_this);
		
		return;
	}
	
	goog.object.forEach(/** @type {Object} */ (v), func, opt_this);
};

/**
 * Creates an object literal if keys can be dynamic.
 * 
 * @param {...*} var_args
 * @return {Object}
 */
twig.createObj = function(var_args) {
	var rs = {};
	for (var i = 0; i<arguments.length; i += 2) {
		rs[arguments[i]] = arguments[i+1];
	}
	
	return rs;
};
