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
 * @param {string=} opt_charset
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
	}
	
	throw Error("The type '" + opt_type + "' is not supported.");
};

/**
 * @enum {string}
 */
twig.filter.escape.Type = {
	HTML: "html",
	JAVASCRIPT: "js"
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
 * @export
 * @param {string} str
 * @param {string} format
 * @return {string}
 */
twig.filter.date = function (str, format) {
    var date = new Date(str);
    var finalDate = '';

    var dayAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var first = new Date(date.getFullYear(), 0, 1);

    for (var i = 0; i < format.length; i++) {
        var currentSymbol = format.charAt(i);

        if ((i - 1 >= 0 && format.charAt(i - 1) == "\\") && (i - 2 >= 0 && format.charAt(i - 2) != '\\')) {
            finalDate += currentSymbol;
        } else if (currentSymbol != "\\") {
            switch (currentSymbol) {
                // Day functions
                case 'd':
                    finalDate += ((date.getDate() < 10) ? '0' : '') + date.getDate();
                    break;
                case 'D':
                    finalDate += dayAbbr[date.getDate()];
                    break;
                case 'j':
                    finalDate += date.getDate();
                    break;
                case 'l':
                    finalDate += days[date.getDay()];
                    break;
                case 'N':
                    finalDate += date.getDay() + 1;
                    break;
                case 'S':
                    var suffix = '';
                    if (date.getDate() % 10 == 1 && date.getDate() != 11) {
                        suffix = 'st';
                    } else if (date.getDate() % 10 == 2 && date.getDate() != 12) {
                        suffix = 'nd';
                    } else if (date.getDate() % 10 == 3 && date.getDate() != 13) {
                        suffix = 'rd'
                    } else {
                        suffix = 'th';
                    }
                    finalDate += suffix;
                    break;
                case 'w':
                    finalDate += date.getDay();
                    break;
                case 'z':
                    finalDate += Math.ceil((date - first) / 86400000);
                    break;
                // Week functions
                case 'W':
                    finalDate += Math.ceil((((date - first) / 86400000) + first.getDay() + 1) / 7);
                    break;
                // Month functions
                case 'F':
                    finalDate += months[date.getMonth()];
                    break;
                case 'm':
                    finalDate += ((date.getMonth() < 10) ? '0' : '') + (date.getMonth() + 1);
                    break;
                case 'M':
                    finalDate += monthAbbr[date.getMonth()];
                    break;
                case 'n':
                    finalDate += date.getMonth() + 1;
                    break;
                case 't':
                    finalDate += new Date(date.getFullYear(), date.getMonth(), 0).getDate();
                    break;
                // Year functions
                case 'L':
                    finalDate += (new Date(date.getYear(), 1, 29).getDate() == 29) ? 1 : 0;
                    break;
                case 'Y':
                    finalDate += date.getFullYear();
                    break;
                case 'y':
                    finalDate += date.getFullYear().toString().substr(2);
                    break;
                // Time functions
                case 'a':
                    finalDate += (date.getHours() < 12) ? 'am' : 'pm';
                    break;
                case 'A':
                    finalDate += (date.getHours() < 12) ? 'AM' : 'PM';
                    break;
                case 'g':
                    finalDate += (date.getHours() > 12) ? date.getHours() % 12 : date.getHours();
                    break;
                case 'G':
                    finalDate += date.getHours();
                    break;
                case 'h':
                    var noLeadingZeros = (date.getHours() > 12) ? date.getHours() % 12 : date.getHours();
                    finalDate += ((noLeadingZeros < 10) ? '0' : '') + noLeadingZeros;
                    break;
                case 'H':
                    finalDate += ((date.getHours() < 10) ? '0' : '') + date.getHours();
                    break;
                case 'i':
                    finalDate += ((date.getMinutes() < 10) ? '0' : '') + date.getMinutes();
                    break;
                case 's':
                    finalDate += ((date.getSeconds() < 10) ? '0' : '') + date.getSeconds();
                    break;
                // Timezone functions
                case 'Z':
                    finalDate += -date.getTimezoneOffset() * 60;
                    break;
                // Full date/time functions
                case 'r':
                    finalDate += date.toString();
                    break;
                case 'U':
                    finalDate += date.getTime();
                    break;
                // any other symbol
                default:
                    finalDate += currentSymbol;
            }
        }
    }

    return finalDate;
};