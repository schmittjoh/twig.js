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
 * @fileoverview Exports symbols which should be usuable from uncompiled code.
 *
 * If you intend to compile the source libraries into your javascript on your
 * own, then you do not need this default export file.
 */

goog.require('twig');
goog.require('twig.Environment');
goog.require('twig.Markup');
goog.require('twig.filter');

window['Twig'] = new twig.Environment();

goog.exportSymbol('goog.provide', goog.provide);
goog.exportSymbol('twig.attr', twig.attr);
goog.exportSymbol('twig.bind', twig.bind);
goog.exportSymbol('twig.inherits', twig.inherits);
goog.exportSymbol('twig.extend', twig.extend);
goog.exportSymbol('twig.spaceless', twig.spaceless);
goog.exportSymbol('twig.range', twig.range);
goog.exportSymbol('twig.contains', twig.contains);
goog.exportSymbol('twig.countable', twig.countable);
goog.exportSymbol('twig.count', twig.count);
goog.exportSymbol('twig.forEach', twig.forEach);
goog.exportSymbol('twig.empty', twig.empty);
goog.exportSymbol('twig.filter.capitalize', twig.filter.capitalize);
goog.exportSymbol('twig.filter.escape', twig.filter.escape);
goog.exportSymbol('twig.filter.length', twig.filter.length);
goog.exportSymbol('twig.filter.def', twig.filter.def);
goog.exportSymbol('twig.filter.replace', twig.filter.replace);

goog.exportSymbol('twig.StringBuffer', twig.StringBuffer);
goog.exportProperty(twig.StringBuffer.prototype, 'append', twig.StringBuffer.prototype.append);
goog.exportProperty(twig.StringBuffer.prototype, 'toString', twig.StringBuffer.prototype.toString);

goog.exportProperty(twig.Environment.prototype, 'createTemplate', twig.Environment.prototype.createTemplate);
goog.exportProperty(twig.Environment.prototype, 'filter', twig.Environment.prototype.filter);
goog.exportProperty(twig.Environment.prototype, 'invoke', twig.Environment.prototype.invoke);
goog.exportProperty(twig.Environment.prototype, 'test', twig.Environment.prototype.test);
goog.exportProperty(twig.Environment.prototype, 'setFilter', twig.Environment.prototype.setFilter);
goog.exportProperty(twig.Environment.prototype, 'setFunction', twig.Environment.prototype.setFunction);
goog.exportProperty(twig.Environment.prototype, 'setTest', twig.Environment.prototype.setTest);
goog.exportProperty(twig.Environment.prototype, 'render', twig.Environment.prototype.render);
goog.exportProperty(twig.Environment.prototype, 'getGlobals', twig.Environment.prototype.getGlobals);
goog.exportProperty(twig.Environment.prototype, 'initRuntime', twig.Environment.prototype.initRuntime);
goog.exportProperty(twig.Environment.prototype, 'hasExtension', twig.Environment.prototype.hasExtension);
goog.exportProperty(twig.Environment.prototype, 'getExtension', twig.Environment.prototype.getExtension);
goog.exportProperty(twig.Environment.prototype, 'addExtension', twig.Environment.prototype.addExtension);
goog.exportProperty(twig.Environment.prototype, 'removeExtension', twig.Environment.prototype.removeExtension);
goog.exportProperty(twig.Environment.prototype, 'setExtensions', twig.Environment.prototype.setExtensions);
goog.exportProperty(twig.Environment.prototype, 'getExtensions', twig.Environment.prototype.getExtensions);

goog.exportSymbol('twig.Template', twig.Template);
goog.exportProperty(twig.Template.prototype, 'setTraits', twig.Template.prototype.setTraits);
goog.exportProperty(twig.Template.prototype, 'setBlocks', twig.Template.prototype.setBlocks);
goog.exportProperty(twig.Template.prototype, 'getBlocks', twig.Template.prototype.getBlocks);
// unnecessary since getParent is in some extern definition
//goog.exportProperty(twig.Template.prototype, 'getParent', twig.Template.prototype.getParent);
goog.exportProperty(twig.Template.prototype, 'renderParentBlock', twig.Template.prototype.renderParentBlock);
goog.exportProperty(twig.Template.prototype, 'renderBlock', twig.Template.prototype.renderBlock);

goog.exportSymbol('twig.Markup', twig.Markup);
