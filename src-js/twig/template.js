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

goog.provide('twig.Template');
goog.provide('twig.Template.Block');

goog.require('twig.StringBuffer');

/**
 * @constructor
 * @param {twig.Environment} env
 */
twig.Template = function(env) {
	/** @private */
	this.env_ = env;
	
	/** 
	 * @type {Object.<twig.Template.Block>} 
	 */
	this.blocks_ = [];
	
	/** 
	 * @type {Object.<twig.Template.Block>} 
	 */
	this.traits_ = {};
};

/**
 * @typedef {function(twig.StringBuffer, Object, Object)}
 */
twig.Template.Block;

/**
 * @return {Object.<twig.Template.Block>}
 */
twig.Template.prototype.getBlocks = function() {
	return this.blocks_;
};

/**
 * @param {Object.<twig.Template.Block>} blocks
 */
twig.Template.prototype.setBlocks = function(blocks) {
	this.blocks_ = blocks;
};

/**
 * @param {Object.<twig.Template.Block>} traits
 */
twig.Template.prototype.setTraits = function(traits) {
	this.traits_ = traits;
};

/**
 * @param {Object} context
 * @return {boolean|twig.Template}
 */
twig.Template.prototype.getParent = function(context) {
	var parent = this.getParent_(context);
	if (false === parent) {
		return false;
	}
	
	return this.env_.createTemplate(/** @type {Function} */ (parent));
};

/**
 * @param {Object} context
 * @return {Function|boolean}
 */
twig.Template.prototype.getParent_ = goog.abstractMethod;

/**
 * Returns a human readable representation of the template name.
 * 
 * @return {string}
 */
twig.Template.prototype.getTemplateName = goog.abstractMethod;

/**
 * @param {string} name
 * @param {Object} context
 * @param {Object.<twig.Template.Block>=} opt_blocks 
 * @return {string}
 */
twig.Template.prototype.renderParentBlock = function(name, context, opt_blocks) {
	if (name in this.traits_) {
		var sb = new twig.StringBuffer();
		this.traits_[name](sb, context, opt_blocks || {});
		
		return sb.toString();
	}
	
	var parent = this.getParent(context);
	if (false !== parent) {
		return parent.renderBlock(name, context, opt_blocks);
	}
	
	throw Error("The template '" + this.getTemplateName() + "' has no parent, and no trait defining the block '" + name + "'.");
};

/**
 * @param {string} name
 * @param {Object} context
 * @param {Object.<twig.Template.Block>=} opt_blocks
 * 
 * @return {string}
 */
twig.Template.prototype.renderBlock = function(name, context, opt_blocks) {
	if (opt_blocks && name in opt_blocks) {
		var sb = new twig.StringBuffer();
		
		// FIXME: Do we need to make a copy of the available blocks?
		var block = opt_blocks[name];
		delete opt_blocks[name];
		block(sb, context, opt_blocks);
		
		return sb.toString();
	}
	
	if (name in this.blocks_) {
		var sb = new twig.StringBuffer();
		this.blocks_[name](sb, context, opt_blocks || null);
		
		return sb.toString();
	}
	
	var parent = this.getParent(context);
	if (false !== parent) {
		return parent.renderBlock(name, context, opt_blocks);
	}
	
	return "";
};

/**
 * @param {Object=} opt_context
 * @param {Object.<twig.Template.Block>=} opt_blocks
 * @return {string}
 */
twig.Template.prototype.render = function(opt_context, opt_blocks) {
	var sb = new twig.StringBuffer();
	this.render_(sb, opt_context || {}, opt_blocks || {});

	return sb.toString();
};


twig.Template.prototype.render_ = goog.abstractMethod;