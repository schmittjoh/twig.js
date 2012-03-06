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

goog.provide('twig.ExtensionInterface');

/**
 * Interface implemented by extension classes.
 *
 * @interface
 */
twig.ExtensionInterface = function() {};

/**
 * Initializes the runtime environment.
 *
 * This is where you can load some file that contains filter functions for instance.
 *
 * @param {twig.Environment} environment The current environment instance
 */
twig.ExtensionInterface.prototype.initRuntime = function(environment) {};

/**
 * Returns a list of filters to add to the existing list.
 *
 * @return {Array} An array of filters
 */
twig.ExtensionInterface.prototype.getFilters = function() {};

/**
 * Returns a list of tests to add to the existing list.
 *
 * @return {Array} An array of tests
 */
twig.ExtensionInterface.prototype.getTests = function() {};

/**
 * Returns a list of functions to add to the existing list.
 *
 * @return {Array} An array of functions
 */
twig.ExtensionInterface.prototype.getFunctions = function() {};

/**
 * Returns a list of global variables to add to the existing list.
 *
 * @return {Array} An array of global variables
 */
twig.ExtensionInterface.prototype.getGlobals = function() {};

/**
 * Returns the name of the extension.
 *
 * @return {string} The extension name
 */
twig.ExtensionInterface.prototype.getName = function() {};
