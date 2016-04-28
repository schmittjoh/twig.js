/**
 * twig.js
 * https://github.com/schmittjoh/twig.js
 *
 * (C) 2011 Johannes M. Schmitt <schmittjoh@gmail.com>
 * Licensed under the Apache 2.0 License.
 *
 * Portions of this code are from the Google Closure Library received
 * from the Closure Authors under the Apache 2.0 License.
 */
(function() {var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.exportPath_ = function $goog$exportPath_$($name$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$ = $name$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || goog.global;
  $name$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$[0]);
  for(var $part$$;$name$$.length && ($part$$ = $name$$.shift());) {
    $name$$.length || void 0 === $opt_object$$ ? $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {} : $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$
  }
};
goog.define = function $goog$define$($name$$, $defaultValue$$) {
  var $value$$ = $defaultValue$$;
  COMPILED || goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, $name$$) && ($value$$ = goog.global.CLOSURE_DEFINES[$name$$]);
  goog.exportPath_($name$$, $value$$)
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.provide = function $goog$provide$($name$$) {
  if(!COMPILED) {
    if(goog.isProvided_($name$$)) {
      throw Error('Namespace "' + $name$$ + '" already declared.');
    }
    delete goog.implicitNamespaces_[$name$$];
    for(var $namespace$$ = $name$$;($namespace$$ = $namespace$$.substring(0, $namespace$$.lastIndexOf("."))) && !goog.getObjectByName($namespace$$);) {
      goog.implicitNamespaces_[$namespace$$] = !0
    }
  }
  goog.exportPath_($name$$)
};
goog.setTestOnly = function $goog$setTestOnly$($opt_message$$) {
  if(COMPILED && !goog.DEBUG) {
    throw $opt_message$$ = $opt_message$$ || "", Error("Importing test-only code into non-debug environment" + $opt_message$$ ? ": " + $opt_message$$ : ".");
  }
};
COMPILED || (goog.isProvided_ = function $goog$isProvided_$($name$$) {
  return!goog.implicitNamespaces_[$name$$] && !!goog.getObjectByName($name$$)
}, goog.implicitNamespaces_ = {});
goog.getObjectByName = function $goog$getObjectByName$($name$$, $opt_obj$$) {
  for(var $parts$$ = $name$$.split("."), $cur$$ = $opt_obj$$ || goog.global, $part$$;$part$$ = $parts$$.shift();) {
    if(goog.isDefAndNotNull($cur$$[$part$$])) {
      $cur$$ = $cur$$[$part$$]
    }else {
      return null
    }
  }
  return $cur$$
};
goog.globalize = function $goog$globalize$($obj$$, $opt_global$$) {
  var $global$$ = $opt_global$$ || goog.global, $x$$;
  for($x$$ in $obj$$) {
    $global$$[$x$$] = $obj$$[$x$$]
  }
};
goog.addDependency = function $goog$addDependency$($path$$, $provides_require$$, $requires$$) {
  if(goog.DEPENDENCIES_ENABLED) {
    var $j_provide$$;
    $path$$ = $path$$.replace(/\\/g, "/");
    for(var $deps$$ = goog.dependencies_, $i$$ = 0;$j_provide$$ = $provides_require$$[$i$$];$i$$++) {
      $deps$$.nameToPath[$j_provide$$] = $path$$, $path$$ in $deps$$.pathToNames || ($deps$$.pathToNames[$path$$] = {}), $deps$$.pathToNames[$path$$][$j_provide$$] = !0
    }
    for($j_provide$$ = 0;$provides_require$$ = $requires$$[$j_provide$$];$j_provide$$++) {
      $path$$ in $deps$$.requires || ($deps$$.requires[$path$$] = {}), $deps$$.requires[$path$$][$provides_require$$] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function $goog$require$($errorMessage_name$$) {
  if(!COMPILED && !goog.isProvided_($errorMessage_name$$)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var $path$$ = goog.getPathFromDeps_($errorMessage_name$$);
      if($path$$) {
        goog.included_[$path$$] = !0;
        goog.writeScripts_();
        return
      }
    }
    $errorMessage_name$$ = "goog.require could not find: " + $errorMessage_name$$;
    goog.global.console && goog.global.console.error($errorMessage_name$$);
    throw Error($errorMessage_name$$);
  }
};
goog.basePath = "";
goog.nullFunction = function $goog$nullFunction$() {
};
goog.identityFunction = function $goog$identityFunction$($opt_returnValue$$, $var_args$$) {
  return $opt_returnValue$$
};
goog.abstractMethod = function $goog$abstractMethod$() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function $goog$addSingletonGetter$($ctor$$) {
  $ctor$$.getInstance = function $$ctor$$$getInstance$() {
    if($ctor$$.instance_) {
      return $ctor$$.instance_
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = $ctor$$);
    return $ctor$$.instance_ = new $ctor$$
  }
};
goog.instantiatedSingletons_ = [];
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function $goog$inHtmlDocument_$() {
  var $doc$$ = goog.global.document;
  return"undefined" != typeof $doc$$ && "write" in $doc$$
}, goog.findBasePath_ = function $goog$findBasePath_$() {
  if(goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH
  }else {
    if(goog.inHtmlDocument_()) {
      for(var $scripts$$ = goog.global.document.getElementsByTagName("script"), $i$$ = $scripts$$.length - 1;0 <= $i$$;--$i$$) {
        var $src$$ = $scripts$$[$i$$].src, $l_qmark$$ = $src$$.lastIndexOf("?"), $l_qmark$$ = -1 == $l_qmark$$ ? $src$$.length : $l_qmark$$;
        if("base.js" == $src$$.substr($l_qmark$$ - 7, 7)) {
          goog.basePath = $src$$.substr(0, $l_qmark$$ - 7);
          break
        }
      }
    }
  }
}, goog.importScript_ = function $goog$importScript_$($src$$) {
  var $importScript$$ = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
  !goog.dependencies_.written[$src$$] && $importScript$$($src$$) && (goog.dependencies_.written[$src$$] = !0)
}, goog.writeScriptTag_ = function $goog$writeScriptTag_$($src$$) {
  if(goog.inHtmlDocument_()) {
    var $doc$$ = goog.global.document;
    if("complete" == $doc$$.readyState) {
      if(/\bdeps.js$/.test($src$$)) {
        return!1
      }
      throw Error('Cannot write "' + $src$$ + '" after document load');
    }
    $doc$$.write('\x3cscript type\x3d"text/javascript" src\x3d"' + $src$$ + '"\x3e\x3c/script\x3e');
    return!0
  }
  return!1
}, goog.writeScripts_ = function $goog$writeScripts_$() {
  function $visitNode$$($path$$) {
    if(!($path$$ in $deps$$.written)) {
      if(!($path$$ in $deps$$.visited) && ($deps$$.visited[$path$$] = !0, $path$$ in $deps$$.requires)) {
        for(var $requireName$$ in $deps$$.requires[$path$$]) {
          if(!goog.isProvided_($requireName$$)) {
            if($requireName$$ in $deps$$.nameToPath) {
              $visitNode$$($deps$$.nameToPath[$requireName$$])
            }else {
              throw Error("Undefined nameToPath for " + $requireName$$);
            }
          }
        }
      }
      $path$$ in $seenScript$$ || ($seenScript$$[$path$$] = !0, $scripts$$.push($path$$))
    }
  }
  var $scripts$$ = [], $seenScript$$ = {}, $deps$$ = goog.dependencies_, $i$$3_path$$;
  for($i$$3_path$$ in goog.included_) {
    $deps$$.written[$i$$3_path$$] || $visitNode$$($i$$3_path$$)
  }
  for($i$$3_path$$ = 0;$i$$3_path$$ < $scripts$$.length;$i$$3_path$$++) {
    if($scripts$$[$i$$3_path$$]) {
      goog.importScript_(goog.basePath + $scripts$$[$i$$3_path$$])
    }else {
      throw Error("Undefined script input");
    }
  }
}, goog.getPathFromDeps_ = function $goog$getPathFromDeps_$($rule$$) {
  return $rule$$ in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[$rule$$] : null
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.typeOf = function $goog$typeOf$($value$$) {
  var $s$$ = typeof $value$$;
  if("object" == $s$$) {
    if($value$$) {
      if($value$$ instanceof Array) {
        return"array"
      }
      if($value$$ instanceof Object) {
        return $s$$
      }
      var $className$$ = Object.prototype.toString.call($value$$);
      if("[object Window]" == $className$$) {
        return"object"
      }
      if("[object Array]" == $className$$ || "number" == typeof $value$$.length && "undefined" != typeof $value$$.splice && "undefined" != typeof $value$$.propertyIsEnumerable && !$value$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$ || "undefined" != typeof $value$$.call && "undefined" != typeof $value$$.propertyIsEnumerable && !$value$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$ && "undefined" == typeof $value$$.call) {
      return"object"
    }
  }
  return $s$$
};
goog.isDef = function $goog$isDef$($val$$) {
  return void 0 !== $val$$
};
goog.isNull = function $goog$isNull$($val$$) {
  return null === $val$$
};
goog.isDefAndNotNull = function $goog$isDefAndNotNull$($val$$) {
  return null != $val$$
};
goog.isArray = function $goog$isArray$($val$$) {
  return"array" == goog.typeOf($val$$)
};
goog.isArrayLike = function $goog$isArrayLike$($val$$) {
  var $type$$ = goog.typeOf($val$$);
  return"array" == $type$$ || "object" == $type$$ && "number" == typeof $val$$.length
};
goog.isDateLike = function $goog$isDateLike$($val$$) {
  return goog.isObject($val$$) && "function" == typeof $val$$.getFullYear
};
goog.isString = function $goog$isString$($val$$) {
  return"string" == typeof $val$$
};
goog.isBoolean = function $goog$isBoolean$($val$$) {
  return"boolean" == typeof $val$$
};
goog.isNumber = function $goog$isNumber$($val$$) {
  return"number" == typeof $val$$
};
goog.isFunction = function $goog$isFunction$($val$$) {
  return"function" == goog.typeOf($val$$)
};
goog.isObject = function $goog$isObject$($val$$) {
  var $type$$ = typeof $val$$;
  return"object" == $type$$ && null != $val$$ || "function" == $type$$
};
goog.getUid = function $goog$getUid$($obj$$) {
  return $obj$$[goog.UID_PROPERTY_] || ($obj$$[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function $goog$removeUid$($obj$$) {
  "removeAttribute" in $obj$$ && $obj$$.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete $obj$$[goog.UID_PROPERTY_]
  }catch($ex$$) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function $goog$cloneObject$($obj$$) {
  var $clone_type$$ = goog.typeOf($obj$$);
  if("object" == $clone_type$$ || "array" == $clone_type$$) {
    if($obj$$.clone) {
      return $obj$$.clone()
    }
    var $clone_type$$ = "array" == $clone_type$$ ? [] : {}, $key$$;
    for($key$$ in $obj$$) {
      $clone_type$$[$key$$] = goog.cloneObject($obj$$[$key$$])
    }
    return $clone_type$$
  }
  return $obj$$
};
goog.bindNative_ = function $goog$bindNative_$($fn$$, $selfObj$$, $var_args$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
};
goog.bindJs_ = function $goog$bindJs_$($fn$$, $selfObj$$, $var_args$$) {
  if(!$fn$$) {
    throw Error();
  }
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$.apply($selfObj$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$.apply($selfObj$$, arguments)
  }
};
goog.bind = function $goog$bind$($fn$$, $selfObj$$, $var_args$$) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function $goog$partial$($fn$$, $var_args$$) {
  var $args$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$ = Array.prototype.slice.call(arguments);
    $newArgs$$.unshift.apply($newArgs$$, $args$$);
    return $fn$$.apply(this, $newArgs$$)
  }
};
goog.mixin = function $goog$mixin$($target$$, $source$$) {
  for(var $x$$ in $source$$) {
    $target$$[$x$$] = $source$$[$x$$]
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return+new Date
};
goog.globalEval = function $goog$globalEval$($script$$) {
  if(goog.global.execScript) {
    goog.global.execScript($script$$, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ \x3d 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) {
        goog.global.eval($script$$)
      }else {
        var $doc$$ = goog.global.document, $scriptElt$$ = $doc$$.createElement("script");
        $scriptElt$$.type = "text/javascript";
        $scriptElt$$.defer = !1;
        $scriptElt$$.appendChild($doc$$.createTextNode($script$$));
        $doc$$.body.appendChild($scriptElt$$);
        $doc$$.body.removeChild($scriptElt$$)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function $goog$getCssName$($className$$, $opt_modifier$$) {
  var $getMapping$$ = function $$getMapping$$$($cssName$$) {
    return goog.cssNameMapping_[$cssName$$] || $cssName$$
  }, $rename_renameByParts$$ = function $$rename_renameByParts$$$($cssName$$1_parts$$) {
    $cssName$$1_parts$$ = $cssName$$1_parts$$.split("-");
    for(var $mapped$$ = [], $i$$ = 0;$i$$ < $cssName$$1_parts$$.length;$i$$++) {
      $mapped$$.push($getMapping$$($cssName$$1_parts$$[$i$$]))
    }
    return $mapped$$.join("-")
  }, $rename_renameByParts$$ = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? $getMapping$$ : $rename_renameByParts$$ : function($a$$) {
    return $a$$
  };
  return $opt_modifier$$ ? $className$$ + "-" + $rename_renameByParts$$($opt_modifier$$) : $rename_renameByParts$$($className$$)
};
goog.setCssNameMapping = function $goog$setCssNameMapping$($mapping$$, $opt_style$$) {
  goog.cssNameMapping_ = $mapping$$;
  goog.cssNameMappingStyle_ = $opt_style$$
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function $goog$getMsg$($str$$, $opt_values$$) {
  var $values$$ = $opt_values$$ || {}, $key$$;
  for($key$$ in $values$$) {
    var $value$$ = ("" + $values$$[$key$$]).replace(/\$/g, "$$$$");
    $str$$ = $str$$.replace(RegExp("\\{\\$" + $key$$ + "\\}", "gi"), $value$$)
  }
  return $str$$
};
goog.getMsgWithFallback = function $goog$getMsgWithFallback$($a$$, $b$$) {
  return $a$$
};
goog.exportSymbol = function $goog$exportSymbol$($publicPath$$, $object$$, $opt_objectToExportTo$$) {
  goog.exportPath_($publicPath$$, $object$$, $opt_objectToExportTo$$)
};
goog.exportProperty = function $goog$exportProperty$($object$$, $publicName$$, $symbol$$) {
  $object$$[$publicName$$] = $symbol$$
};
goog.inherits = function $goog$inherits$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.superClass_ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$
};
goog.base = function $goog$base$($me$$, $opt_methodName$$, $var_args$$) {
  var $caller$$ = arguments.callee.caller;
  if(goog.DEBUG && !$caller$$) {
    throw Error("arguments.caller not defined.  goog.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if($caller$$.superClass_) {
    return $caller$$.superClass_.constructor.apply($me$$, Array.prototype.slice.call(arguments, 1))
  }
  for(var $args$$ = Array.prototype.slice.call(arguments, 2), $foundCaller$$ = !1, $ctor$$ = $me$$.constructor;$ctor$$;$ctor$$ = $ctor$$.superClass_ && $ctor$$.superClass_.constructor) {
    if($ctor$$.prototype[$opt_methodName$$] === $caller$$) {
      $foundCaller$$ = !0
    }else {
      if($foundCaller$$) {
        return $ctor$$.prototype[$opt_methodName$$].apply($me$$, $args$$)
      }
    }
  }
  if($me$$[$opt_methodName$$] === $caller$$) {
    return $me$$.constructor.prototype[$opt_methodName$$].apply($me$$, $args$$)
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function $goog$scope$($fn$$) {
  $fn$$.call(goog.global)
};
goog.string = {};
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function $goog$string$startsWith$($str$$, $prefix$$) {
  return 0 == $str$$.lastIndexOf($prefix$$, 0)
};
goog.string.endsWith = function $goog$string$endsWith$($str$$, $suffix$$) {
  var $l$$ = $str$$.length - $suffix$$.length;
  return 0 <= $l$$ && $str$$.indexOf($suffix$$, $l$$) == $l$$
};
goog.string.caseInsensitiveStartsWith = function $goog$string$caseInsensitiveStartsWith$($str$$, $prefix$$) {
  return 0 == goog.string.caseInsensitiveCompare($prefix$$, $str$$.substr(0, $prefix$$.length))
};
goog.string.caseInsensitiveEndsWith = function $goog$string$caseInsensitiveEndsWith$($str$$, $suffix$$) {
  return 0 == goog.string.caseInsensitiveCompare($suffix$$, $str$$.substr($str$$.length - $suffix$$.length, $suffix$$.length))
};
goog.string.caseInsensitiveEquals = function $goog$string$caseInsensitiveEquals$($str1$$, $str2$$) {
  return $str1$$.toLowerCase() == $str2$$.toLowerCase()
};
goog.string.subs = function $goog$string$subs$($str$$, $var_args$$) {
  for(var $splitParts$$ = $str$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift()
  }
  return $returnString$$ + $splitParts$$.join("%s")
};
goog.string.collapseWhitespace = function $goog$string$collapseWhitespace$($str$$) {
  return $str$$.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
};
goog.string.isEmpty = function $goog$string$isEmpty$($str$$) {
  return/^[\s\xa0]*$/.test($str$$)
};
goog.string.isEmptySafe = function $goog$string$isEmptySafe$($str$$) {
  return goog.string.isEmpty(goog.string.makeSafe($str$$))
};
goog.string.isBreakingWhitespace = function $goog$string$isBreakingWhitespace$($str$$) {
  return!/[^\t\n\r ]/.test($str$$)
};
goog.string.isAlpha = function $goog$string$isAlpha$($str$$) {
  return!/[^a-zA-Z]/.test($str$$)
};
goog.string.isNumeric = function $goog$string$isNumeric$($str$$) {
  return!/[^0-9]/.test($str$$)
};
goog.string.isAlphaNumeric = function $goog$string$isAlphaNumeric$($str$$) {
  return!/[^a-zA-Z0-9]/.test($str$$)
};
goog.string.isSpace = function $goog$string$isSpace$($ch$$) {
  return" " == $ch$$
};
goog.string.isUnicodeChar = function $goog$string$isUnicodeChar$($ch$$) {
  return 1 == $ch$$.length && " " <= $ch$$ && "~" >= $ch$$ || "\u0080" <= $ch$$ && "\ufffd" >= $ch$$
};
goog.string.stripNewlines = function $goog$string$stripNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)+/g, " ")
};
goog.string.canonicalizeNewlines = function $goog$string$canonicalizeNewlines$($str$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, "\n")
};
goog.string.normalizeWhitespace = function $goog$string$normalizeWhitespace$($str$$) {
  return $str$$.replace(/\xa0|\s/g, " ")
};
goog.string.normalizeSpaces = function $goog$string$normalizeSpaces$($str$$) {
  return $str$$.replace(/\xa0|[ \t]+/g, " ")
};
goog.string.collapseBreakingSpaces = function $goog$string$collapseBreakingSpaces$($str$$) {
  return $str$$.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
};
goog.string.trim = function $goog$string$trim$($str$$) {
  return $str$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
goog.string.trimLeft = function $goog$string$trimLeft$($str$$) {
  return $str$$.replace(/^[\s\xa0]+/, "")
};
goog.string.trimRight = function $goog$string$trimRight$($str$$) {
  return $str$$.replace(/[\s\xa0]+$/, "")
};
goog.string.caseInsensitiveCompare = function $goog$string$caseInsensitiveCompare$($str1$$, $str2$$) {
  var $test1$$ = String($str1$$).toLowerCase(), $test2$$ = String($str2$$).toLowerCase();
  return $test1$$ < $test2$$ ? -1 : $test1$$ == $test2$$ ? 0 : 1
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function $goog$string$numerateCompare$($str1$$, $str2$$) {
  if($str1$$ == $str2$$) {
    return 0
  }
  if(!$str1$$) {
    return-1
  }
  if(!$str2$$) {
    return 1
  }
  for(var $num1_tokens1$$ = $str1$$.toLowerCase().match(goog.string.numerateCompareRegExp_), $num2_tokens2$$ = $str2$$.toLowerCase().match(goog.string.numerateCompareRegExp_), $count$$ = Math.min($num1_tokens1$$.length, $num2_tokens2$$.length), $i$$ = 0;$i$$ < $count$$;$i$$++) {
    var $a$$ = $num1_tokens1$$[$i$$], $b$$ = $num2_tokens2$$[$i$$];
    if($a$$ != $b$$) {
      return $num1_tokens1$$ = parseInt($a$$, 10), !isNaN($num1_tokens1$$) && ($num2_tokens2$$ = parseInt($b$$, 10), !isNaN($num2_tokens2$$) && $num1_tokens1$$ - $num2_tokens2$$) ? $num1_tokens1$$ - $num2_tokens2$$ : $a$$ < $b$$ ? -1 : 1
    }
  }
  return $num1_tokens1$$.length != $num2_tokens2$$.length ? $num1_tokens1$$.length - $num2_tokens2$$.length : $str1$$ < $str2$$ ? -1 : 1
};
goog.string.urlEncode = function $goog$string$urlEncode$($str$$) {
  return encodeURIComponent(String($str$$))
};
goog.string.urlDecode = function $goog$string$urlDecode$($str$$) {
  return decodeURIComponent($str$$.replace(/\+/g, " "))
};
goog.string.newLineToBr = function $goog$string$newLineToBr$($str$$, $opt_xml$$) {
  return $str$$.replace(/(\r\n|\r|\n)/g, $opt_xml$$ ? "\x3cbr /\x3e" : "\x3cbr\x3e")
};
goog.string.htmlEscape = function $goog$string$htmlEscape$($str$$, $opt_isLikelyToContainHtmlChars$$) {
  if($opt_isLikelyToContainHtmlChars$$) {
    return $str$$.replace(goog.string.amperRe_, "\x26amp;").replace(goog.string.ltRe_, "\x26lt;").replace(goog.string.gtRe_, "\x26gt;").replace(goog.string.quotRe_, "\x26quot;")
  }
  if(!goog.string.allRe_.test($str$$)) {
    return $str$$
  }
  -1 != $str$$.indexOf("\x26") && ($str$$ = $str$$.replace(goog.string.amperRe_, "\x26amp;"));
  -1 != $str$$.indexOf("\x3c") && ($str$$ = $str$$.replace(goog.string.ltRe_, "\x26lt;"));
  -1 != $str$$.indexOf("\x3e") && ($str$$ = $str$$.replace(goog.string.gtRe_, "\x26gt;"));
  -1 != $str$$.indexOf('"') && ($str$$ = $str$$.replace(goog.string.quotRe_, "\x26quot;"));
  return $str$$
};
goog.string.amperRe_ = /&/g;
goog.string.ltRe_ = /</g;
goog.string.gtRe_ = />/g;
goog.string.quotRe_ = /\"/g;
goog.string.allRe_ = /[&<>\"]/;
goog.string.unescapeEntities = function $goog$string$unescapeEntities$($str$$) {
  return goog.string.contains($str$$, "\x26") ? "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_($str$$) : goog.string.unescapePureXmlEntities_($str$$) : $str$$
};
goog.string.unescapeEntitiesUsingDom_ = function $goog$string$unescapeEntitiesUsingDom_$($str$$) {
  var $seen$$ = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'}, $div$$ = document.createElement("div");
  return $str$$.replace(goog.string.HTML_ENTITY_PATTERN_, function($s$$, $entity$$) {
    var $value$$ = $seen$$[$s$$];
    if($value$$) {
      return $value$$
    }
    if("#" == $entity$$.charAt(0)) {
      var $n$$ = Number("0" + $entity$$.substr(1));
      isNaN($n$$) || ($value$$ = String.fromCharCode($n$$))
    }
    $value$$ || ($div$$.innerHTML = $s$$ + " ", $value$$ = $div$$.firstChild.nodeValue.slice(0, -1));
    return $seen$$[$s$$] = $value$$
  })
};
goog.string.unescapePureXmlEntities_ = function $goog$string$unescapePureXmlEntities_$($str$$) {
  return $str$$.replace(/&([^;]+);/g, function($s$$, $entity$$) {
    switch($entity$$) {
      case "amp":
        return"\x26";
      case "lt":
        return"\x3c";
      case "gt":
        return"\x3e";
      case "quot":
        return'"';
      default:
        if("#" == $entity$$.charAt(0)) {
          var $n$$ = Number("0" + $entity$$.substr(1));
          if(!isNaN($n$$)) {
            return String.fromCharCode($n$$)
          }
        }
        return $s$$
    }
  })
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function $goog$string$whitespaceEscape$($str$$, $opt_xml$$) {
  return goog.string.newLineToBr($str$$.replace(/  /g, " \x26#160;"), $opt_xml$$)
};
goog.string.stripQuotes = function $goog$string$stripQuotes$($str$$, $quoteChars$$) {
  for(var $length$$ = $quoteChars$$.length, $i$$ = 0;$i$$ < $length$$;$i$$++) {
    var $quoteChar$$ = 1 == $length$$ ? $quoteChars$$ : $quoteChars$$.charAt($i$$);
    if($str$$.charAt(0) == $quoteChar$$ && $str$$.charAt($str$$.length - 1) == $quoteChar$$) {
      return $str$$.substring(1, $str$$.length - 1)
    }
  }
  return $str$$
};
goog.string.truncate = function $goog$string$truncate$($str$$, $chars$$, $opt_protectEscapedCharacters$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  $str$$.length > $chars$$ && ($str$$ = $str$$.substring(0, $chars$$ - 3) + "...");
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$
};
goog.string.truncateMiddle = function $goog$string$truncateMiddle$($str$$, $chars$$, $opt_protectEscapedCharacters$$, $half_opt_trailingChars$$) {
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.unescapeEntities($str$$));
  if($half_opt_trailingChars$$ && $str$$.length > $chars$$) {
    $half_opt_trailingChars$$ > $chars$$ && ($half_opt_trailingChars$$ = $chars$$);
    var $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$;
    $str$$ = $str$$.substring(0, $chars$$ - $half_opt_trailingChars$$) + "..." + $str$$.substring($endPoint_endPos$$)
  }else {
    $str$$.length > $chars$$ && ($half_opt_trailingChars$$ = Math.floor($chars$$ / 2), $endPoint_endPos$$ = $str$$.length - $half_opt_trailingChars$$, $str$$ = $str$$.substring(0, $half_opt_trailingChars$$ + $chars$$ % 2) + "..." + $str$$.substring($endPoint_endPos$$))
  }
  $opt_protectEscapedCharacters$$ && ($str$$ = goog.string.htmlEscape($str$$));
  return $str$$
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function $goog$string$quote$($s$$) {
  $s$$ = String($s$$);
  if($s$$.quote) {
    return $s$$.quote()
  }
  for(var $sb$$ = ['"'], $i$$ = 0;$i$$ < $s$$.length;$i$$++) {
    var $ch$$ = $s$$.charAt($i$$), $cc$$ = $ch$$.charCodeAt(0);
    $sb$$[$i$$ + 1] = goog.string.specialEscapeChars_[$ch$$] || (31 < $cc$$ && 127 > $cc$$ ? $ch$$ : goog.string.escapeChar($ch$$))
  }
  $sb$$.push('"');
  return $sb$$.join("")
};
goog.string.escapeString = function $goog$string$escapeString$($str$$) {
  for(var $sb$$ = [], $i$$ = 0;$i$$ < $str$$.length;$i$$++) {
    $sb$$[$i$$] = goog.string.escapeChar($str$$.charAt($i$$))
  }
  return $sb$$.join("")
};
goog.string.escapeChar = function $goog$string$escapeChar$($c$$) {
  if($c$$ in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[$c$$]
  }
  if($c$$ in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[$c$$] = goog.string.specialEscapeChars_[$c$$]
  }
  var $rv$$ = $c$$, $cc$$ = $c$$.charCodeAt(0);
  if(31 < $cc$$ && 127 > $cc$$) {
    $rv$$ = $c$$
  }else {
    if(256 > $cc$$) {
      if($rv$$ = "\\x", 16 > $cc$$ || 256 < $cc$$) {
        $rv$$ += "0"
      }
    }else {
      $rv$$ = "\\u", 4096 > $cc$$ && ($rv$$ += "0")
    }
    $rv$$ += $cc$$.toString(16).toUpperCase()
  }
  return goog.string.jsEscapeCache_[$c$$] = $rv$$
};
goog.string.toMap = function $goog$string$toMap$($s$$) {
  for(var $rv$$ = {}, $i$$ = 0;$i$$ < $s$$.length;$i$$++) {
    $rv$$[$s$$.charAt($i$$)] = !0
  }
  return $rv$$
};
goog.string.contains = function $goog$string$contains$($s$$, $ss$$) {
  return-1 != $s$$.indexOf($ss$$)
};
goog.string.countOf = function $goog$string$countOf$($s$$, $ss$$) {
  return $s$$ && $ss$$ ? $s$$.split($ss$$).length - 1 : 0
};
goog.string.removeAt = function $goog$string$removeAt$($s$$, $index$$, $stringLength$$) {
  var $resultStr$$ = $s$$;
  0 <= $index$$ && ($index$$ < $s$$.length && 0 < $stringLength$$) && ($resultStr$$ = $s$$.substr(0, $index$$) + $s$$.substr($index$$ + $stringLength$$, $s$$.length - $index$$ - $stringLength$$));
  return $resultStr$$
};
goog.string.remove = function $goog$string$remove$($s$$, $ss$$) {
  var $re$$ = RegExp(goog.string.regExpEscape($ss$$), "");
  return $s$$.replace($re$$, "")
};
goog.string.removeAll = function $goog$string$removeAll$($s$$, $ss$$) {
  var $re$$ = RegExp(goog.string.regExpEscape($ss$$), "g");
  return $s$$.replace($re$$, "")
};
goog.string.regExpEscape = function $goog$string$regExpEscape$($s$$) {
  return String($s$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
goog.string.repeat = function $goog$string$repeat$($string$$, $length$$) {
  return Array($length$$ + 1).join($string$$)
};
goog.string.padNumber = function $goog$string$padNumber$($num$$4_s$$, $length$$, $index$$45_opt_precision$$) {
  $num$$4_s$$ = goog.isDef($index$$45_opt_precision$$) ? $num$$4_s$$.toFixed($index$$45_opt_precision$$) : String($num$$4_s$$);
  $index$$45_opt_precision$$ = $num$$4_s$$.indexOf(".");
  -1 == $index$$45_opt_precision$$ && ($index$$45_opt_precision$$ = $num$$4_s$$.length);
  return goog.string.repeat("0", Math.max(0, $length$$ - $index$$45_opt_precision$$)) + $num$$4_s$$
};
goog.string.makeSafe = function $goog$string$makeSafe$($obj$$) {
  return null == $obj$$ ? "" : String($obj$$)
};
goog.string.buildString = function $goog$string$buildString$($var_args$$) {
  return Array.prototype.join.call(arguments, "")
};
goog.string.getRandomString = function $goog$string$getRandomString$() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
};
goog.string.compareVersions = function $goog$string$compareVersions$($version1$$, $version2$$) {
  for(var $order_v1CompNum$$ = 0, $v1Subs$$ = goog.string.trim(String($version1$$)).split("."), $v2Subs$$ = goog.string.trim(String($version2$$)).split("."), $subCount$$ = Math.max($v1Subs$$.length, $v2Subs$$.length), $subIdx$$ = 0;0 == $order_v1CompNum$$ && $subIdx$$ < $subCount$$;$subIdx$$++) {
    var $v1Sub$$ = $v1Subs$$[$subIdx$$] || "", $v2Sub$$ = $v2Subs$$[$subIdx$$] || "", $v1CompParser$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$ = RegExp("(\\d*)(\\D*)", "g");
    do {
      var $v1Comp$$ = $v1CompParser$$.exec($v1Sub$$) || ["", "", ""], $v2Comp$$ = $v2CompParser$$.exec($v2Sub$$) || ["", "", ""];
      if(0 == $v1Comp$$[0].length && 0 == $v2Comp$$[0].length) {
        break
      }
      var $order_v1CompNum$$ = 0 == $v1Comp$$[1].length ? 0 : parseInt($v1Comp$$[1], 10), $v2CompNum$$ = 0 == $v2Comp$$[1].length ? 0 : parseInt($v2Comp$$[1], 10), $order_v1CompNum$$ = goog.string.compareElements_($order_v1CompNum$$, $v2CompNum$$) || goog.string.compareElements_(0 == $v1Comp$$[2].length, 0 == $v2Comp$$[2].length) || goog.string.compareElements_($v1Comp$$[2], $v2Comp$$[2])
    }while(0 == $order_v1CompNum$$)
  }
  return $order_v1CompNum$$
};
goog.string.compareElements_ = function $goog$string$compareElements_$($left$$, $right$$) {
  return $left$$ < $right$$ ? -1 : $left$$ > $right$$ ? 1 : 0
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function $goog$string$hashCode$($str$$) {
  for(var $result$$ = 0, $i$$ = 0;$i$$ < $str$$.length;++$i$$) {
    $result$$ = 31 * $result$$ + $str$$.charCodeAt($i$$), $result$$ %= goog.string.HASHCODE_MAX_
  }
  return $result$$
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function $goog$string$createUniqueString$() {
  return"goog_" + goog.string.uniqueStringCounter_++
};
goog.string.toNumber = function $goog$string$toNumber$($str$$) {
  var $num$$ = Number($str$$);
  return 0 == $num$$ && goog.string.isEmpty($str$$) ? NaN : $num$$
};
goog.string.isLowerCamelCase = function $goog$string$isLowerCamelCase$($str$$) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test($str$$)
};
goog.string.isUpperCamelCase = function $goog$string$isUpperCamelCase$($str$$) {
  return/^([A-Z][a-z]*)+$/.test($str$$)
};
goog.string.toCamelCase = function $goog$string$toCamelCase$($str$$) {
  return String($str$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase()
  })
};
goog.string.toSelectorCase = function $goog$string$toSelectorCase$($str$$) {
  return String($str$$).replace(/([A-Z])/g, "-$1").toLowerCase()
};
goog.string.toTitleCase = function $goog$string$toTitleCase$($str$$, $opt_delimiters$$) {
  var $delimiters$$ = goog.isString($opt_delimiters$$) ? goog.string.regExpEscape($opt_delimiters$$) : "\\s";
  return $str$$.replace(RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase()
  })
};
goog.string.parseInt = function $goog$string$parseInt$($value$$) {
  isFinite($value$$) && ($value$$ = String($value$$));
  return goog.isString($value$$) ? /^\s*-?0x/i.test($value$$) ? parseInt($value$$, 16) : parseInt($value$$, 10) : NaN
};
goog.string.splitLimit = function $goog$string$splitLimit$($parts$$3_str$$, $separator$$, $limit$$) {
  $parts$$3_str$$ = $parts$$3_str$$.split($separator$$);
  for(var $returnVal$$ = [];0 < $limit$$ && $parts$$3_str$$.length;) {
    $returnVal$$.push($parts$$3_str$$.shift()), $limit$$--
  }
  $parts$$3_str$$.length && $returnVal$$.push($parts$$3_str$$.join($separator$$));
  return $returnVal$$
};
goog.string.StringBuffer = function $goog$string$StringBuffer$($opt_a1$$, $var_args$$) {
  null != $opt_a1$$ && this.append.apply(this, arguments)
};
goog.string.StringBuffer.prototype.buffer_ = "";
goog.string.StringBuffer.prototype.set = function $goog$string$StringBuffer$$set$($s$$) {
  this.buffer_ = "" + $s$$
};
goog.string.StringBuffer.prototype.append = function $goog$string$StringBuffer$$append$($a1$$, $opt_a2$$, $var_args$$) {
  this.buffer_ += $a1$$;
  if(null != $opt_a2$$) {
    for(var $i$$ = 1;$i$$ < arguments.length;$i$$++) {
      this.buffer_ += arguments[$i$$]
    }
  }
  return this
};
goog.string.StringBuffer.prototype.clear = function $goog$string$StringBuffer$$clear$() {
  this.buffer_ = ""
};
goog.string.StringBuffer.prototype.getLength = function $goog$string$StringBuffer$$getLength$() {
  return this.buffer_.length
};
goog.string.StringBuffer.prototype.toString = function $goog$string$StringBuffer$$toString$() {
  return this.buffer_
};
goog.object = {};
goog.object.forEach = function $goog$object$forEach$($obj$$, $f$$, $opt_obj$$) {
  for(var $key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)
  }
};
goog.object.filter = function $goog$object$filter$($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for($key$$ in $obj$$) {
    $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$) && ($res$$[$key$$] = $obj$$[$key$$])
  }
  return $res$$
};
goog.object.map = function $goog$object$map$($obj$$, $f$$, $opt_obj$$) {
  var $res$$ = {}, $key$$;
  for($key$$ in $obj$$) {
    $res$$[$key$$] = $f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)
  }
  return $res$$
};
goog.object.some = function $goog$object$some$($obj$$, $f$$, $opt_obj$$) {
  for(var $key$$ in $obj$$) {
    if($f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return!0
    }
  }
  return!1
};
goog.object.every = function $goog$object$every$($obj$$, $f$$, $opt_obj$$) {
  for(var $key$$ in $obj$$) {
    if(!$f$$.call($opt_obj$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return!1
    }
  }
  return!0
};
goog.object.getCount = function $goog$object$getCount$($obj$$) {
  var $rv$$ = 0, $key$$;
  for($key$$ in $obj$$) {
    $rv$$++
  }
  return $rv$$
};
goog.object.getAnyKey = function $goog$object$getAnyKey$($obj$$) {
  for(var $key$$ in $obj$$) {
    return $key$$
  }
};
goog.object.getAnyValue = function $goog$object$getAnyValue$($obj$$) {
  for(var $key$$ in $obj$$) {
    return $obj$$[$key$$]
  }
};
goog.object.contains = function $goog$object$contains$($obj$$, $val$$) {
  return goog.object.containsValue($obj$$, $val$$)
};
goog.object.getValues = function $goog$object$getValues$($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for($key$$ in $obj$$) {
    $res$$[$i$$++] = $obj$$[$key$$]
  }
  return $res$$
};
goog.object.getKeys = function $goog$object$getKeys$($obj$$) {
  var $res$$ = [], $i$$ = 0, $key$$;
  for($key$$ in $obj$$) {
    $res$$[$i$$++] = $key$$
  }
  return $res$$
};
goog.object.getValueByKeys = function $goog$object$getValueByKeys$($obj$$, $var_args$$) {
  for(var $i$$ = goog.isArrayLike($var_args$$), $keys$$ = $i$$ ? $var_args$$ : arguments, $i$$ = $i$$ ? 0 : 1;$i$$ < $keys$$.length && ($obj$$ = $obj$$[$keys$$[$i$$]], goog.isDef($obj$$));$i$$++) {
  }
  return $obj$$
};
goog.object.containsKey = function $goog$object$containsKey$($obj$$, $key$$) {
  return $key$$ in $obj$$
};
goog.object.containsValue = function $goog$object$containsValue$($obj$$, $val$$) {
  for(var $key$$ in $obj$$) {
    if($obj$$[$key$$] == $val$$) {
      return!0
    }
  }
  return!1
};
goog.object.findKey = function $goog$object$findKey$($obj$$, $f$$, $opt_this$$) {
  for(var $key$$ in $obj$$) {
    if($f$$.call($opt_this$$, $obj$$[$key$$], $key$$, $obj$$)) {
      return $key$$
    }
  }
};
goog.object.findValue = function $goog$object$findValue$($obj$$, $f$$6_key$$, $opt_this$$) {
  return($f$$6_key$$ = goog.object.findKey($obj$$, $f$$6_key$$, $opt_this$$)) && $obj$$[$f$$6_key$$]
};
goog.object.isEmpty = function $goog$object$isEmpty$($obj$$) {
  for(var $key$$ in $obj$$) {
    return!1
  }
  return!0
};
goog.object.clear = function $goog$object$clear$($obj$$) {
  for(var $i$$ in $obj$$) {
    delete $obj$$[$i$$]
  }
};
goog.object.remove = function $goog$object$remove$($obj$$, $key$$) {
  var $rv$$;
  ($rv$$ = $key$$ in $obj$$) && delete $obj$$[$key$$];
  return $rv$$
};
goog.object.add = function $goog$object$add$($obj$$, $key$$, $val$$) {
  if($key$$ in $obj$$) {
    throw Error('The object already contains the key "' + $key$$ + '"');
  }
  goog.object.set($obj$$, $key$$, $val$$)
};
goog.object.get = function $goog$object$get$($obj$$, $key$$, $opt_val$$) {
  return $key$$ in $obj$$ ? $obj$$[$key$$] : $opt_val$$
};
goog.object.set = function $goog$object$set$($obj$$, $key$$, $value$$) {
  $obj$$[$key$$] = $value$$
};
goog.object.setIfUndefined = function $goog$object$setIfUndefined$($obj$$, $key$$, $value$$) {
  return $key$$ in $obj$$ ? $obj$$[$key$$] : $obj$$[$key$$] = $value$$
};
goog.object.clone = function $goog$object$clone$($obj$$) {
  var $res$$ = {}, $key$$;
  for($key$$ in $obj$$) {
    $res$$[$key$$] = $obj$$[$key$$]
  }
  return $res$$
};
goog.object.unsafeClone = function $goog$object$unsafeClone$($obj$$) {
  var $clone$$1_type$$ = goog.typeOf($obj$$);
  if("object" == $clone$$1_type$$ || "array" == $clone$$1_type$$) {
    if($obj$$.clone) {
      return $obj$$.clone()
    }
    var $clone$$1_type$$ = "array" == $clone$$1_type$$ ? [] : {}, $key$$;
    for($key$$ in $obj$$) {
      $clone$$1_type$$[$key$$] = goog.object.unsafeClone($obj$$[$key$$])
    }
    return $clone$$1_type$$
  }
  return $obj$$
};
goog.object.transpose = function $goog$object$transpose$($obj$$) {
  var $transposed$$ = {}, $key$$;
  for($key$$ in $obj$$) {
    $transposed$$[$obj$$[$key$$]] = $key$$
  }
  return $transposed$$
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function $goog$object$extend$($target$$, $var_args$$) {
  for(var $key$$, $source$$, $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    $source$$ = arguments[$i$$];
    for($key$$ in $source$$) {
      $target$$[$key$$] = $source$$[$key$$]
    }
    for(var $j$$ = 0;$j$$ < goog.object.PROTOTYPE_FIELDS_.length;$j$$++) {
      $key$$ = goog.object.PROTOTYPE_FIELDS_[$j$$], Object.prototype.hasOwnProperty.call($source$$, $key$$) && ($target$$[$key$$] = $source$$[$key$$])
    }
  }
};
goog.object.create = function $goog$object$create$($var_args$$) {
  var $argLength$$ = arguments.length;
  if(1 == $argLength$$ && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0])
  }
  if($argLength$$ % 2) {
    throw Error("Uneven number of arguments");
  }
  for(var $rv$$ = {}, $i$$ = 0;$i$$ < $argLength$$;$i$$ += 2) {
    $rv$$[arguments[$i$$]] = arguments[$i$$ + 1]
  }
  return $rv$$
};
goog.object.createSet = function $goog$object$createSet$($var_args$$) {
  var $argLength$$ = arguments.length;
  if(1 == $argLength$$ && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0])
  }
  for(var $rv$$ = {}, $i$$ = 0;$i$$ < $argLength$$;$i$$++) {
    $rv$$[arguments[$i$$]] = !0
  }
  return $rv$$
};
goog.object.createImmutableView = function $goog$object$createImmutableView$($obj$$) {
  var $result$$ = $obj$$;
  Object.isFrozen && !Object.isFrozen($obj$$) && ($result$$ = Object.create($obj$$), Object.freeze($result$$));
  return $result$$
};
goog.object.isImmutableView = function $goog$object$isImmutableView$($obj$$) {
  return!!Object.isFrozen && Object.isFrozen($obj$$)
};
goog.debug = {};
goog.debug.Error = function $goog$debug$Error$($opt_msg$$) {
  Error.captureStackTrace ? Error.captureStackTrace(this, goog.debug.Error) : this.stack = Error().stack || "";
  $opt_msg$$ && (this.message = String($opt_msg$$))
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function $goog$asserts$AssertionError$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  goog.debug.Error.call(this, goog.string.subs.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
  this.messagePattern = $messagePattern$$
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.doAssertFailure_ = function $goog$asserts$doAssertFailure_$($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
  var $message$$ = "Assertion failed";
  if($givenMessage$$) {
    var $message$$ = $message$$ + (": " + $givenMessage$$), $args$$ = $givenArgs$$
  }else {
    $defaultMessage$$ && ($message$$ += ": " + $defaultMessage$$, $args$$ = $defaultArgs$$)
  }
  throw new goog.asserts.AssertionError("" + $message$$, $args$$ || []);
};
goog.asserts.assert = function $goog$asserts$assert$($condition$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !$condition$$ && goog.asserts.doAssertFailure_("", null, $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $condition$$
};
goog.asserts.fail = function $goog$asserts$fail$($opt_message$$, $var_args$$) {
  if(goog.asserts.ENABLE_ASSERTS) {
    throw new goog.asserts.AssertionError("Failure" + ($opt_message$$ ? ": " + $opt_message$$ : ""), Array.prototype.slice.call(arguments, 1));
  }
};
goog.asserts.assertNumber = function $goog$asserts$assertNumber$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber($value$$) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$
};
goog.asserts.assertString = function $goog$asserts$assertString$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString($value$$) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$
};
goog.asserts.assertFunction = function $goog$asserts$assertFunction$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction($value$$) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$
};
goog.asserts.assertObject = function $goog$asserts$assertObject$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject($value$$) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$
};
goog.asserts.assertArray = function $goog$asserts$assertArray$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray($value$$) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$
};
goog.asserts.assertBoolean = function $goog$asserts$assertBoolean$($value$$, $opt_message$$, $var_args$$) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean($value$$) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf($value$$), $value$$], $opt_message$$, Array.prototype.slice.call(arguments, 2));
  return $value$$
};
goog.asserts.assertInstanceof = function $goog$asserts$assertInstanceof$($value$$, $type$$, $opt_message$$, $var_args$$) {
  !goog.asserts.ENABLE_ASSERTS || $value$$ instanceof $type$$ || goog.asserts.doAssertFailure_("instanceof check failed.", null, $opt_message$$, Array.prototype.slice.call(arguments, 3));
  return $value$$
};
goog.asserts.assertObjectPrototypeIsIntact = function $goog$asserts$assertObjectPrototypeIsIntact$() {
  for(var $key$$ in Object.prototype) {
    goog.asserts.fail($key$$ + " should not be enumerable in Object.prototype.")
  }
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.peek = function $goog$array$peek$($array$$) {
  return $array$$[$array$$.length - 1]
};
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.indexOf ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call($arr$$, $obj$$, $opt_fromIndex$$)
} : function($arr$$, $obj$$, $fromIndex_i$$19_opt_fromIndex$$) {
  $fromIndex_i$$19_opt_fromIndex$$ = null == $fromIndex_i$$19_opt_fromIndex$$ ? 0 : 0 > $fromIndex_i$$19_opt_fromIndex$$ ? Math.max(0, $arr$$.length + $fromIndex_i$$19_opt_fromIndex$$) : $fromIndex_i$$19_opt_fromIndex$$;
  if(goog.isString($arr$$)) {
    return goog.isString($obj$$) && 1 == $obj$$.length ? $arr$$.indexOf($obj$$, $fromIndex_i$$19_opt_fromIndex$$) : -1
  }
  for(;$fromIndex_i$$19_opt_fromIndex$$ < $arr$$.length;$fromIndex_i$$19_opt_fromIndex$$++) {
    if($fromIndex_i$$19_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex_i$$19_opt_fromIndex$$] === $obj$$) {
      return $fromIndex_i$$19_opt_fromIndex$$
    }
  }
  return-1
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.lastIndexOf ? function($arr$$, $obj$$, $opt_fromIndex$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call($arr$$, $obj$$, null == $opt_fromIndex$$ ? $arr$$.length - 1 : $opt_fromIndex$$)
} : function($arr$$, $obj$$, $fromIndex$$2_i$$20_opt_fromIndex$$) {
  $fromIndex$$2_i$$20_opt_fromIndex$$ = null == $fromIndex$$2_i$$20_opt_fromIndex$$ ? $arr$$.length - 1 : $fromIndex$$2_i$$20_opt_fromIndex$$;
  0 > $fromIndex$$2_i$$20_opt_fromIndex$$ && ($fromIndex$$2_i$$20_opt_fromIndex$$ = Math.max(0, $arr$$.length + $fromIndex$$2_i$$20_opt_fromIndex$$));
  if(goog.isString($arr$$)) {
    return goog.isString($obj$$) && 1 == $obj$$.length ? $arr$$.lastIndexOf($obj$$, $fromIndex$$2_i$$20_opt_fromIndex$$) : -1
  }
  for(;0 <= $fromIndex$$2_i$$20_opt_fromIndex$$;$fromIndex$$2_i$$20_opt_fromIndex$$--) {
    if($fromIndex$$2_i$$20_opt_fromIndex$$ in $arr$$ && $arr$$[$fromIndex$$2_i$$20_opt_fromIndex$$] === $obj$$) {
      return $fromIndex$$2_i$$20_opt_fromIndex$$
    }
  }
  return-1
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.forEach ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call($arr$$, $f$$, $opt_obj$$)
} : function($arr$$, $f$$, $opt_obj$$) {
  for(var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    $i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)
  }
};
goog.array.forEachRight = function $goog$array$forEachRight$($arr$$, $f$$, $opt_obj$$) {
  for(var $i$$22_l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$22_l$$ = $i$$22_l$$ - 1;0 <= $i$$22_l$$;--$i$$22_l$$) {
    $i$$22_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$22_l$$], $i$$22_l$$, $arr$$)
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.filter ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call($arr$$, $f$$, $opt_obj$$)
} : function($arr$$, $f$$, $opt_obj$$) {
  for(var $l$$ = $arr$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if($i$$ in $arr2$$) {
      var $val$$ = $arr2$$[$i$$];
      $f$$.call($opt_obj$$, $val$$, $i$$, $arr$$) && ($res$$[$resLength$$++] = $val$$)
    }
  }
  return $res$$
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.map ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call($arr$$, $f$$, $opt_obj$$)
} : function($arr$$, $f$$, $opt_obj$$) {
  for(var $l$$ = $arr$$.length, $res$$ = Array($l$$), $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    $i$$ in $arr2$$ && ($res$$[$i$$] = $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$))
  }
  return $res$$
};
goog.array.reduce = function $goog$array$reduce$($arr$$, $f$$, $val$$0$$, $opt_obj$$) {
  if($arr$$.reduce) {
    return $opt_obj$$ ? $arr$$.reduce(goog.bind($f$$, $opt_obj$$), $val$$0$$) : $arr$$.reduce($f$$, $val$$0$$)
  }
  var $rval$$ = $val$$0$$;
  goog.array.forEach($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$)
  });
  return $rval$$
};
goog.array.reduceRight = function $goog$array$reduceRight$($arr$$, $f$$, $val$$0$$, $opt_obj$$) {
  if($arr$$.reduceRight) {
    return $opt_obj$$ ? $arr$$.reduceRight(goog.bind($f$$, $opt_obj$$), $val$$0$$) : $arr$$.reduceRight($f$$, $val$$0$$)
  }
  var $rval$$ = $val$$0$$;
  goog.array.forEachRight($arr$$, function($val$$, $index$$) {
    $rval$$ = $f$$.call($opt_obj$$, $rval$$, $val$$, $index$$, $arr$$)
  });
  return $rval$$
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.some ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call($arr$$, $f$$, $opt_obj$$)
} : function($arr$$, $f$$, $opt_obj$$) {
  for(var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return!0
    }
  }
  return!1
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && goog.array.ARRAY_PROTOTYPE_.every ? function($arr$$, $f$$, $opt_obj$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call($arr$$, $f$$, $opt_obj$$)
} : function($arr$$, $f$$, $opt_obj$$) {
  for(var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if($i$$ in $arr2$$ && !$f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return!1
    }
  }
  return!0
};
goog.array.count = function $goog$array$count$($arr$$0$$, $f$$, $opt_obj$$) {
  var $count$$ = 0;
  goog.array.forEach($arr$$0$$, function($element$$, $index$$, $arr$$) {
    $f$$.call($opt_obj$$, $element$$, $index$$, $arr$$) && ++$count$$
  }, $opt_obj$$);
  return $count$$
};
goog.array.find = function $goog$array$find$($arr$$, $f$$21_i$$, $opt_obj$$) {
  $f$$21_i$$ = goog.array.findIndex($arr$$, $f$$21_i$$, $opt_obj$$);
  return 0 > $f$$21_i$$ ? null : goog.isString($arr$$) ? $arr$$.charAt($f$$21_i$$) : $arr$$[$f$$21_i$$]
};
goog.array.findIndex = function $goog$array$findIndex$($arr$$, $f$$, $opt_obj$$) {
  for(var $l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if($i$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$], $i$$, $arr$$)) {
      return $i$$
    }
  }
  return-1
};
goog.array.findRight = function $goog$array$findRight$($arr$$, $f$$23_i$$, $opt_obj$$) {
  $f$$23_i$$ = goog.array.findIndexRight($arr$$, $f$$23_i$$, $opt_obj$$);
  return 0 > $f$$23_i$$ ? null : goog.isString($arr$$) ? $arr$$.charAt($f$$23_i$$) : $arr$$[$f$$23_i$$]
};
goog.array.findIndexRight = function $goog$array$findIndexRight$($arr$$, $f$$, $opt_obj$$) {
  for(var $i$$30_l$$ = $arr$$.length, $arr2$$ = goog.isString($arr$$) ? $arr$$.split("") : $arr$$, $i$$30_l$$ = $i$$30_l$$ - 1;0 <= $i$$30_l$$;$i$$30_l$$--) {
    if($i$$30_l$$ in $arr2$$ && $f$$.call($opt_obj$$, $arr2$$[$i$$30_l$$], $i$$30_l$$, $arr$$)) {
      return $i$$30_l$$
    }
  }
  return-1
};
goog.array.contains = function $goog$array$contains$($arr$$, $obj$$) {
  return 0 <= goog.array.indexOf($arr$$, $obj$$)
};
goog.array.isEmpty = function $goog$array$isEmpty$($arr$$) {
  return 0 == $arr$$.length
};
goog.array.clear = function $goog$array$clear$($arr$$) {
  if(!goog.isArray($arr$$)) {
    for(var $i$$ = $arr$$.length - 1;0 <= $i$$;$i$$--) {
      delete $arr$$[$i$$]
    }
  }
  $arr$$.length = 0
};
goog.array.insert = function $goog$array$insert$($arr$$, $obj$$) {
  goog.array.contains($arr$$, $obj$$) || $arr$$.push($obj$$)
};
goog.array.insertAt = function $goog$array$insertAt$($arr$$, $obj$$, $opt_i$$) {
  goog.array.splice($arr$$, $opt_i$$, 0, $obj$$)
};
goog.array.insertArrayAt = function $goog$array$insertArrayAt$($arr$$, $elementsToAdd$$, $opt_i$$) {
  goog.partial(goog.array.splice, $arr$$, $opt_i$$, 0).apply(null, $elementsToAdd$$)
};
goog.array.insertBefore = function $goog$array$insertBefore$($arr$$, $obj$$, $opt_obj2$$) {
  var $i$$;
  2 == arguments.length || 0 > ($i$$ = goog.array.indexOf($arr$$, $opt_obj2$$)) ? $arr$$.push($obj$$) : goog.array.insertAt($arr$$, $obj$$, $i$$)
};
goog.array.remove = function $goog$array$remove$($arr$$, $obj$$) {
  var $i$$ = goog.array.indexOf($arr$$, $obj$$), $rv$$;
  ($rv$$ = 0 <= $i$$) && goog.array.removeAt($arr$$, $i$$);
  return $rv$$
};
goog.array.removeAt = function $goog$array$removeAt$($arr$$, $i$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call($arr$$, $i$$, 1).length
};
goog.array.removeIf = function $goog$array$removeIf$($arr$$, $f$$25_i$$, $opt_obj$$) {
  $f$$25_i$$ = goog.array.findIndex($arr$$, $f$$25_i$$, $opt_obj$$);
  return 0 <= $f$$25_i$$ ? (goog.array.removeAt($arr$$, $f$$25_i$$), !0) : !1
};
goog.array.concat = function $goog$array$concat$($var_args$$) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments)
};
goog.array.toArray = function $goog$array$toArray$($object$$) {
  var $length$$ = $object$$.length;
  if(0 < $length$$) {
    for(var $rv$$ = Array($length$$), $i$$ = 0;$i$$ < $length$$;$i$$++) {
      $rv$$[$i$$] = $object$$[$i$$]
    }
    return $rv$$
  }
  return[]
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function $goog$array$extend$($arr1$$, $var_args$$) {
  for(var $i$$ = 1;$i$$ < arguments.length;$i$$++) {
    var $arr2$$ = arguments[$i$$], $isArrayLike$$;
    if(goog.isArray($arr2$$) || ($isArrayLike$$ = goog.isArrayLike($arr2$$)) && Object.prototype.hasOwnProperty.call($arr2$$, "callee")) {
      $arr1$$.push.apply($arr1$$, $arr2$$)
    }else {
      if($isArrayLike$$) {
        for(var $len1$$ = $arr1$$.length, $len2$$ = $arr2$$.length, $j$$ = 0;$j$$ < $len2$$;$j$$++) {
          $arr1$$[$len1$$ + $j$$] = $arr2$$[$j$$]
        }
      }else {
        $arr1$$.push($arr2$$)
      }
    }
  }
};
goog.array.splice = function $goog$array$splice$($arr$$, $index$$, $howMany$$, $var_args$$) {
  goog.asserts.assert(null != $arr$$.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply($arr$$, goog.array.slice(arguments, 1))
};
goog.array.slice = function $goog$array$slice$($arr$$, $start$$, $opt_end$$) {
  goog.asserts.assert(null != $arr$$.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call($arr$$, $start$$) : goog.array.ARRAY_PROTOTYPE_.slice.call($arr$$, $start$$, $opt_end$$)
};
goog.array.removeDuplicates = function $goog$array$removeDuplicates$($arr$$, $opt_rv$$) {
  for(var $returnArray$$ = $opt_rv$$ || $arr$$, $seen$$ = {}, $cursorInsert$$ = 0, $cursorRead$$ = 0;$cursorRead$$ < $arr$$.length;) {
    var $current$$ = $arr$$[$cursorRead$$++], $key$$ = goog.isObject($current$$) ? "o" + goog.getUid($current$$) : (typeof $current$$).charAt(0) + $current$$;
    Object.prototype.hasOwnProperty.call($seen$$, $key$$) || ($seen$$[$key$$] = !0, $returnArray$$[$cursorInsert$$++] = $current$$)
  }
  $returnArray$$.length = $cursorInsert$$
};
goog.array.binarySearch = function $goog$array$binarySearch$($arr$$, $target$$, $opt_compareFn$$) {
  return goog.array.binarySearch_($arr$$, $opt_compareFn$$ || goog.array.defaultCompare, !1, $target$$)
};
goog.array.binarySelect = function $goog$array$binarySelect$($arr$$, $evaluator$$, $opt_obj$$) {
  return goog.array.binarySearch_($arr$$, $evaluator$$, !0, void 0, $opt_obj$$)
};
goog.array.binarySearch_ = function $goog$array$binarySearch_$($arr$$, $compareFn$$, $isEvaluator$$, $opt_target$$, $opt_selfObj$$) {
  for(var $left$$ = 0, $right$$ = $arr$$.length, $found$$;$left$$ < $right$$;) {
    var $middle$$ = $left$$ + $right$$ >> 1, $compareResult$$;
    $compareResult$$ = $isEvaluator$$ ? $compareFn$$.call($opt_selfObj$$, $arr$$[$middle$$], $middle$$, $arr$$) : $compareFn$$($opt_target$$, $arr$$[$middle$$]);
    0 < $compareResult$$ ? $left$$ = $middle$$ + 1 : ($right$$ = $middle$$, $found$$ = !$compareResult$$)
  }
  return $found$$ ? $left$$ : ~$left$$
};
goog.array.sort = function $goog$array$sort$($arr$$, $opt_compareFn$$) {
  goog.asserts.assert(null != $arr$$.length);
  goog.array.ARRAY_PROTOTYPE_.sort.call($arr$$, $opt_compareFn$$ || goog.array.defaultCompare)
};
goog.array.stableSort = function $goog$array$stableSort$($arr$$, $opt_compareFn$$) {
  for(var $i$$ = 0;$i$$ < $arr$$.length;$i$$++) {
    $arr$$[$i$$] = {index:$i$$, value:$arr$$[$i$$]}
  }
  var $valueCompareFn$$ = $opt_compareFn$$ || goog.array.defaultCompare;
  goog.array.sort($arr$$, function stableCompareFn($obj1$$, $obj2$$) {
    return $valueCompareFn$$($obj1$$.value, $obj2$$.value) || $obj1$$.index - $obj2$$.index
  });
  for($i$$ = 0;$i$$ < $arr$$.length;$i$$++) {
    $arr$$[$i$$] = $arr$$[$i$$].value
  }
};
goog.array.sortObjectsByKey = function $goog$array$sortObjectsByKey$($arr$$, $key$$, $opt_compareFn$$) {
  var $compare$$ = $opt_compareFn$$ || goog.array.defaultCompare;
  goog.array.sort($arr$$, function($a$$, $b$$) {
    return $compare$$($a$$[$key$$], $b$$[$key$$])
  })
};
goog.array.isSorted = function $goog$array$isSorted$($arr$$, $compare$$1_opt_compareFn$$, $opt_strict$$) {
  $compare$$1_opt_compareFn$$ = $compare$$1_opt_compareFn$$ || goog.array.defaultCompare;
  for(var $i$$ = 1;$i$$ < $arr$$.length;$i$$++) {
    var $compareResult$$ = $compare$$1_opt_compareFn$$($arr$$[$i$$ - 1], $arr$$[$i$$]);
    if(0 < $compareResult$$ || 0 == $compareResult$$ && $opt_strict$$) {
      return!1
    }
  }
  return!0
};
goog.array.equals = function $goog$array$equals$($arr1$$, $arr2$$, $equalsFn_opt_equalsFn$$) {
  if(!goog.isArrayLike($arr1$$) || !goog.isArrayLike($arr2$$) || $arr1$$.length != $arr2$$.length) {
    return!1
  }
  var $l$$ = $arr1$$.length;
  $equalsFn_opt_equalsFn$$ = $equalsFn_opt_equalsFn$$ || goog.array.defaultCompareEquality;
  for(var $i$$ = 0;$i$$ < $l$$;$i$$++) {
    if(!$equalsFn_opt_equalsFn$$($arr1$$[$i$$], $arr2$$[$i$$])) {
      return!1
    }
  }
  return!0
};
goog.array.compare = function $goog$array$compare$($arr1$$, $arr2$$, $opt_equalsFn$$) {
  return goog.array.equals($arr1$$, $arr2$$, $opt_equalsFn$$)
};
goog.array.compare3 = function $goog$array$compare3$($arr1$$, $arr2$$, $compare$$2_opt_compareFn$$) {
  $compare$$2_opt_compareFn$$ = $compare$$2_opt_compareFn$$ || goog.array.defaultCompare;
  for(var $l$$ = Math.min($arr1$$.length, $arr2$$.length), $i$$ = 0;$i$$ < $l$$;$i$$++) {
    var $result$$ = $compare$$2_opt_compareFn$$($arr1$$[$i$$], $arr2$$[$i$$]);
    if(0 != $result$$) {
      return $result$$
    }
  }
  return goog.array.defaultCompare($arr1$$.length, $arr2$$.length)
};
goog.array.defaultCompare = function $goog$array$defaultCompare$($a$$, $b$$) {
  return $a$$ > $b$$ ? 1 : $a$$ < $b$$ ? -1 : 0
};
goog.array.defaultCompareEquality = function $goog$array$defaultCompareEquality$($a$$, $b$$) {
  return $a$$ === $b$$
};
goog.array.binaryInsert = function $goog$array$binaryInsert$($array$$, $value$$, $index$$50_opt_compareFn$$) {
  $index$$50_opt_compareFn$$ = goog.array.binarySearch($array$$, $value$$, $index$$50_opt_compareFn$$);
  return 0 > $index$$50_opt_compareFn$$ ? (goog.array.insertAt($array$$, $value$$, -($index$$50_opt_compareFn$$ + 1)), !0) : !1
};
goog.array.binaryRemove = function $goog$array$binaryRemove$($array$$, $index$$51_value$$, $opt_compareFn$$) {
  $index$$51_value$$ = goog.array.binarySearch($array$$, $index$$51_value$$, $opt_compareFn$$);
  return 0 <= $index$$51_value$$ ? goog.array.removeAt($array$$, $index$$51_value$$) : !1
};
goog.array.bucket = function $goog$array$bucket$($array$$, $sorter$$, $opt_obj$$) {
  for(var $buckets$$ = {}, $i$$ = 0;$i$$ < $array$$.length;$i$$++) {
    var $value$$ = $array$$[$i$$], $key$$ = $sorter$$.call($opt_obj$$, $value$$, $i$$, $array$$);
    goog.isDef($key$$) && ($buckets$$[$key$$] || ($buckets$$[$key$$] = [])).push($value$$)
  }
  return $buckets$$
};
goog.array.toObject = function $goog$array$toObject$($arr$$, $keyFunc$$, $opt_obj$$) {
  var $ret$$ = {};
  goog.array.forEach($arr$$, function($element$$, $index$$) {
    $ret$$[$keyFunc$$.call($opt_obj$$, $element$$, $index$$, $arr$$)] = $element$$
  });
  return $ret$$
};
goog.array.range = function $goog$array$range$($i$$, $opt_end$$, $opt_step_step$$) {
  var $array$$ = [], $start$$ = 0, $end$$ = $i$$;
  $opt_step_step$$ = $opt_step_step$$ || 1;
  void 0 !== $opt_end$$ && ($start$$ = $i$$, $end$$ = $opt_end$$);
  if(0 > $opt_step_step$$ * ($end$$ - $start$$)) {
    return[]
  }
  if(0 < $opt_step_step$$) {
    for($i$$ = $start$$;$i$$ < $end$$;$i$$ += $opt_step_step$$) {
      $array$$.push($i$$)
    }
  }else {
    for($i$$ = $start$$;$i$$ > $end$$;$i$$ += $opt_step_step$$) {
      $array$$.push($i$$)
    }
  }
  return $array$$
};
goog.array.repeat = function $goog$array$repeat$($value$$, $n$$) {
  for(var $array$$ = [], $i$$ = 0;$i$$ < $n$$;$i$$++) {
    $array$$[$i$$] = $value$$
  }
  return $array$$
};
goog.array.flatten = function $goog$array$flatten$($var_args$$) {
  for(var $result$$ = [], $i$$ = 0;$i$$ < arguments.length;$i$$++) {
    var $element$$ = arguments[$i$$];
    goog.isArray($element$$) ? $result$$.push.apply($result$$, goog.array.flatten.apply(null, $element$$)) : $result$$.push($element$$)
  }
  return $result$$
};
goog.array.rotate = function $goog$array$rotate$($array$$, $n$$) {
  goog.asserts.assert(null != $array$$.length);
  $array$$.length && ($n$$ %= $array$$.length, 0 < $n$$ ? goog.array.ARRAY_PROTOTYPE_.unshift.apply($array$$, $array$$.splice(-$n$$, $n$$)) : 0 > $n$$ && goog.array.ARRAY_PROTOTYPE_.push.apply($array$$, $array$$.splice(0, -$n$$)));
  return $array$$
};
goog.array.moveItem = function $goog$array$moveItem$($arr$$, $fromIndex$$, $toIndex$$) {
  goog.asserts.assert(0 <= $fromIndex$$ && $fromIndex$$ < $arr$$.length);
  goog.asserts.assert(0 <= $toIndex$$ && $toIndex$$ < $arr$$.length);
  $fromIndex$$ = goog.array.ARRAY_PROTOTYPE_.splice.call($arr$$, $fromIndex$$, 1);
  goog.array.ARRAY_PROTOTYPE_.splice.call($arr$$, $toIndex$$, 0, $fromIndex$$[0])
};
goog.array.zip = function $goog$array$zip$($var_args$$) {
  if(!arguments.length) {
    return[]
  }
  for(var $result$$ = [], $i$$ = 0;;$i$$++) {
    for(var $value$$ = [], $j$$ = 0;$j$$ < arguments.length;$j$$++) {
      var $arr$$ = arguments[$j$$];
      if($i$$ >= $arr$$.length) {
        return $result$$
      }
      $value$$.push($arr$$[$i$$])
    }
    $result$$.push($value$$)
  }
};
goog.array.shuffle = function $goog$array$shuffle$($arr$$, $opt_randFn$$) {
  for(var $randFn$$ = $opt_randFn$$ || Math.random, $i$$ = $arr$$.length - 1;0 < $i$$;$i$$--) {
    var $j$$ = Math.floor($randFn$$() * ($i$$ + 1)), $tmp$$ = $arr$$[$i$$];
    $arr$$[$i$$] = $arr$$[$j$$];
    $arr$$[$j$$] = $tmp$$
  }
};
var twig = {};
twig.inherits = goog.inherits;
twig.bind = goog.bind;
goog.UID_PROPERTY_ = "twig_ui_" + Math.floor(2147483648 * Math.random()).toString(36);
twig.StringBuffer = goog.string.StringBuffer;
twig.empty = function $twig$empty$($value$$) {
  return null === $value$$ || !1 === $value$$ || void 0 === $value$$ || 0 === $value$$ ? !0 : twig.countable($value$$) ? 0 === twig.count($value$$) : !1
};
twig.extend = function $twig$extend$($target$$, $var_args$$) {
  goog.object.extend.apply(null, Array.prototype.slice.call(arguments, 0));
  return $target$$
};
twig.AttrAccess = {ANY:"any", ARRAY:"array", METHOD:"method"};
twig.attr = function $twig$attr$($obj$$, $attr_functionName$$, $opt_args$$, $accessType_opt_accessType$$, $isTest_opt_isTest$$) {
  $accessType_opt_accessType$$ = $accessType_opt_accessType$$ || twig.AttrAccess.ANY;
  $isTest_opt_isTest$$ = goog.isDef($isTest_opt_isTest$$) ? $isTest_opt_isTest$$ : !1;
  if(!goog.isObject($obj$$) && !goog.isArray($obj$$)) {
    return $isTest_opt_isTest$$ ? !1 : null
  }
  if($attr_functionName$$ in $obj$$) {
    if(twig.AttrAccess.ARRAY !== $accessType_opt_accessType$$ && goog.isFunction($obj$$[$attr_functionName$$])) {
      return $isTest_opt_isTest$$ ? !0 : $obj$$[$attr_functionName$$].apply($obj$$, $opt_args$$ || [])
    }
    if(twig.AttrAccess.METHOD !== $accessType_opt_accessType$$) {
      return $isTest_opt_isTest$$ ? !0 : $obj$$[$attr_functionName$$]
    }
  }
  if(twig.AttrAccess.ARRAY === $accessType_opt_accessType$$ || goog.isArray($obj$$)) {
    return $isTest_opt_isTest$$ ? !1 : null
  }
  $attr_functionName$$ = $attr_functionName$$.toLowerCase();
  var $getter$$ = "get" + $attr_functionName$$, $isser$$ = "is" + $attr_functionName$$;
  return($attr_functionName$$ = goog.object.findKey($obj$$, function($v$$, $k$$) {
    $k$$ = $k$$.toLowerCase();
    return $k$$ === $getter$$ || $k$$ === $isser$$
  })) && goog.isFunction($obj$$[$attr_functionName$$]) ? $isTest_opt_isTest$$ ? !0 : $obj$$[$attr_functionName$$].apply($obj$$, $opt_args$$ || []) : $isTest_opt_isTest$$ ? !1 : null
};
twig.spaceless = function $twig$spaceless$($s$$) {
  return goog.string.trim($s$$.replace(/>[\s\xa0]+</g, "\x3e\x3c"))
};
twig.range = function $twig$range$($start$$, $end$$) {
  for(var $rs$$ = [];$start$$ <= $end$$;$start$$ += 1) {
    $rs$$.push($start$$)
  }
  return $rs$$
};
twig.contains = function $twig$contains$($haystack$$, $needle$$) {
  return goog.isArray($haystack$$) ? goog.array.contains($haystack$$, $needle$$) : goog.isString($haystack$$) ? goog.string.contains($haystack$$, $needle$$) && ("" !== $needle$$ || "" === $haystack$$) : goog.object.contains($haystack$$, $needle$$)
};
twig.countable = function $twig$countable$($v$$) {
  return goog.isArray($v$$) || goog.isString($v$$) || goog.isObject($v$$)
};
twig.count = function $twig$count$($v$$) {
  return goog.isArray($v$$) ? $v$$.length : goog.isString($v$$) ? $v$$.length : goog.isObject($v$$) ? goog.object.getCount($v$$) : twig.castToString($v$$).length
};
twig.castToString = function $twig$castToString$($value$$) {
  return"number" === typeof $value$$ ? $value$$.toString() : ""
};
twig.forEach = function $twig$forEach$($v$$, $func$$, $opt_this$$) {
  goog.isArray($v$$) ? goog.array.forEach($v$$, $func$$, $opt_this$$) : goog.object.forEach($v$$, $func$$, $opt_this$$)
};
twig.createObj = function $twig$createObj$($var_args$$) {
  for(var $rs$$ = {}, $i$$ = 0;$i$$ < arguments.length;$i$$ += 2) {
    $rs$$[arguments[$i$$]] = arguments[$i$$ + 1]
  }
  return $rs$$
};
twig.pregQuote = function $twig$pregQuote$($string$$) {
  return $string$$.replace(/[\.\\+*?\[\]<>(){}^$=!|:-]/g, "\\$\x26")
};
twig.ExtensionInterface = function $twig$ExtensionInterface$() {
};
twig.ExtensionInterface.prototype.initRuntime = function $twig$ExtensionInterface$$initRuntime$($environment$$) {
};
twig.ExtensionInterface.prototype.getFilters = function $twig$ExtensionInterface$$getFilters$() {
};
twig.ExtensionInterface.prototype.getTests = function $twig$ExtensionInterface$$getTests$() {
};
twig.ExtensionInterface.prototype.getFunctions = function $twig$ExtensionInterface$$getFunctions$() {
};
twig.ExtensionInterface.prototype.getGlobals = function $twig$ExtensionInterface$$getGlobals$() {
};
twig.ExtensionInterface.prototype.getName = function $twig$ExtensionInterface$$getName$() {
};
twig.Template = function $twig$Template$($env$$) {
  this.env_ = $env$$;
  this.blocks_ = [];
  this.traits_ = {}
};
twig.Template.prototype.getBlocks = function $twig$Template$$getBlocks$() {
  return this.blocks_
};
twig.Template.prototype.setBlocks = function $twig$Template$$setBlocks$($blocks$$) {
  this.blocks_ = $blocks$$
};
twig.Template.prototype.setTraits = function $twig$Template$$setTraits$($traits$$) {
  this.traits_ = $traits$$
};
twig.Template.prototype.getParent = function $twig$Template$$getParent$($context_parent$$) {
  $context_parent$$ = this.getParent_($context_parent$$);
  return!1 === $context_parent$$ ? !1 : this.env_.createTemplate($context_parent$$)
};
twig.Template.prototype.renderParentBlock = function $twig$Template$$renderParentBlock$($name$$, $context$$, $opt_blocks$$) {
  if($name$$ in this.traits_) {
    var $parent$$3_sb$$ = new twig.StringBuffer;
    this.traits_[$name$$]($parent$$3_sb$$, $context$$, $opt_blocks$$ || {});
    return $parent$$3_sb$$.toString()
  }
  $parent$$3_sb$$ = this.getParent($context$$);
  if(!1 !== $parent$$3_sb$$) {
    return $parent$$3_sb$$.renderBlock($name$$, $context$$, $opt_blocks$$)
  }
  throw Error("The template '" + this.getTemplateName() + "' has no parent, and no trait defining the block '" + $name$$ + "'.");
};
twig.Template.prototype.renderBlock = function $twig$Template$$renderBlock$($name$$, $context$$, $opt_blocks$$) {
  if($opt_blocks$$ && $name$$ in $opt_blocks$$) {
    var $parent$$4_sb$$ = new twig.StringBuffer, $block$$ = $opt_blocks$$[$name$$];
    delete $opt_blocks$$[$name$$];
    $block$$($parent$$4_sb$$, $context$$, $opt_blocks$$);
    return $parent$$4_sb$$.toString()
  }
  if($name$$ in this.blocks_) {
    return $parent$$4_sb$$ = new twig.StringBuffer, this.blocks_[$name$$]($parent$$4_sb$$, $context$$, $opt_blocks$$ || null), $parent$$4_sb$$.toString()
  }
  $parent$$4_sb$$ = this.getParent($context$$);
  return!1 !== $parent$$4_sb$$ ? $parent$$4_sb$$.renderBlock($name$$, $context$$, $opt_blocks$$) : ""
};
twig.Template.prototype.render = function $twig$Template$$render$($opt_context$$, $opt_blocks$$) {
  var $sb$$ = new twig.StringBuffer;
  this.render_($sb$$, $opt_context$$ || {}, $opt_blocks$$ || {});
  return $sb$$.toString()
};
twig.Template.prototype.callMacro = function $twig$Template$$callMacro$($template$$, $macro$$, $args$$, $opt_namedNames$$, $opt_namedCount$$, $opt_positionalCount$$) {
  if(!$template$$["get" + $macro$$]) {
    throw Error("The macro " + $macro$$ + " is not defined in " + $template$$.getTemplateName() + ".");
  }
  if(void 0 === $opt_namedNames$$) {
    return $template$$["get" + $macro$$].apply($template$$, $args$$)
  }
  throw Error("Positional arguments, or default values in macro arguments are not supported, yet.");
};
twig.Markup = function $twig$Markup$($content$$) {
  this.content_ = $content$$
};
twig.Markup.prototype.toString = function $twig$Markup$$toString$() {
  return this.content_
};
twig.filter = {};
twig.filter.replace = function $twig$filter$replace$($str$$, $map$$) {
  for(var $key$$ in $map$$) {
    var $escapedKey$$;
    $escapedKey$$ = twig.pregQuote($key$$);
    $str$$ = $str$$.replace(RegExp($escapedKey$$, "g"), $map$$[$key$$])
  }
  return $str$$
};
twig.filter.def = function $twig$filter$def$($value$$, $opt_default$$) {
  return twig.empty($value$$) ? $opt_default$$ || "" : $value$$
};
twig.filter.capitalize = function $twig$filter$capitalize$($env$$, $str$$) {
  return $str$$.charAt(0).toUpperCase() + $str$$.substring(1)
};
twig.filter.escape = function $twig$filter$escape$($env$$, $value$$, $opt_type$$, $opt_charset$$, $opt_autoescape$$) {
  if($opt_autoescape$$ && $value$$ instanceof twig.Markup) {
    return $value$$.toString()
  }
  $value$$ = goog.string.makeSafe($value$$);
  if(twig.filter.escape.Type.JAVASCRIPT === $opt_type$$) {
    return $value$$ = goog.string.quote($value$$), $value$$.substring(1, $value$$.length - 1)
  }
  if(!$opt_type$$ || twig.filter.escape.Type.HTML === $opt_type$$) {
    return goog.string.htmlEscape($value$$)
  }
  if(twig.filter.escape.Type.URL === $opt_type$$) {
    return encodeURIComponent($value$$)
  }
  throw Error("The type '" + $opt_type$$ + "' is not supported.");
};
twig.filter.escape.Type = {HTML:"html", JAVASCRIPT:"js", URL:"url"};
twig.filter.length = function $twig$filter$length$($env$$, $value$$) {
  return twig.count($value$$)
};
twig.filter.join = function $twig$filter$join$($value$$, $opt_glue$$) {
  var $glue$$ = $opt_glue$$ || "", $buffer$$ = new twig.StringBuffer, $first$$ = !0;
  twig.forEach($value$$, function($v$$) {
    $first$$ || $buffer$$.append($glue$$);
    $first$$ = !1;
    $buffer$$.append($v$$)
  });
  return $buffer$$.toString()
};
twig.filter.keys = goog.object.getKeys;
twig.filter.upper = function $twig$filter$upper$($env$$, $value$$) {
  return $value$$.toUpperCase()
};
twig.filter.lower = function $twig$filter$lower$($env$$, $value$$) {
  return $value$$.toLowerCase()
};
twig.filter.nl2br = function $twig$filter$nl2br$($str$$) {
  return $str$$.replace(/\n/g, "\x3cbr /\x3e")
};
twig.filter.first = function $twig$filter$first$($env$$, $value$$) {
  return goog.isArray($value$$) ? $value$$[0] : goog.isObject($value$$) ? $value$$[Object.keys($value$$)[0]] : goog.isString($value$$) ? $value$$.charAt(0) : ""
};
twig.filter.last = function $twig$filter$last$($env$$, $value$$) {
  if(goog.isArray($value$$)) {
    return $value$$[$value$$.length - 1]
  }
  if(goog.isObject($value$$)) {
    var $keys$$ = Object.keys($value$$);
    return $value$$[$keys$$[$keys$$.length - 1]]
  }
  return goog.isString($value$$) ? $value$$.charAt($value$$.length - 1) : ""
};
twig.filter.abs = function $twig$filter$abs$($n$$) {
  return Math.abs($n$$)
};
twig.filter.title = function $twig$filter$title$($env$$, $value$$) {
  return $value$$.split(" ").map(function($word$$) {
    return $word$$.charAt(0).toUpperCase() + $word$$.substr(1).toLowerCase()
  }).join(" ")
};
twig.filter.trim = function $twig$filter$trim$($value$$, $opt_charactermask$$) {
  var $mask$$ = "\n ";
  $opt_charactermask$$ && ($mask$$ = twig.pregQuote($opt_charactermask$$));
  $value$$ = $value$$.replace(RegExp("^[" + $mask$$ + "]+"), "");
  return $value$$ = $value$$.replace(RegExp("[" + $mask$$ + "]+$"), "")
};
twig.filter.json_encode = function $twig$filter$json_encode$($value$$) {
  return JSON.stringify($value$$)
};
twig.filter.reverse = function $twig$filter$reverse$($env$$, $value$$) {
  if(goog.isArray($value$$)) {
    return $value$$.reverse()
  }
  if(goog.isObject($value$$)) {
    for(var $reverse$$ = {}, $reverseKeys$$ = goog.object.getKeys($value$$).reverse(), $i$$ = 0;$i$$ < $reverseKeys$$.length;$i$$++) {
      $reverse$$[$reverseKeys$$[$i$$]] = $value$$[$reverseKeys$$[$i$$]]
    }
    return $reverse$$
  }
  return goog.isString($value$$) ? $value$$.split("").reverse().join("") : $value$$
};
twig.filter.batch = function $twig$filter$batch$($array$$, $batchSize$$, $opt_filler$$) {
  for(var $batches$$ = Array(Math.ceil($array$$.length / $batchSize$$)), $iterations$$ = $batches$$.length * $batchSize$$, $i$$ = 0;$i$$ < $iterations$$;$i$$++) {
    var $batchIndex$$ = Math.floor($i$$ / $batchSize$$);
    "undefined" === typeof $batches$$[$batchIndex$$] && ($batches$$[$batchIndex$$] = []);
    "undefined" !== typeof $array$$[$i$$] ? $batches$$[$batchIndex$$].push($array$$[$i$$]) : goog.isString($opt_filler$$) && $batches$$[$batchIndex$$].push($opt_filler$$)
  }
  return $batches$$
};
twig.filter.merge = function $twig$filter$merge$($value1$$, $value2$$) {
  var $merged$$ = [];
  goog.isArray($value1$$) && goog.isArray($value2$$) ? ($merged$$ = $value1$$.concat($value2$$), goog.array.removeDuplicates($merged$$)) : goog.isObject($value1$$) && goog.isObject($value2$$) && ($merged$$ = goog.object.clone($value1$$), goog.object.forEach($value2$$, function($element$$, $index$$) {
    $merged$$[$index$$] = $element$$
  }));
  return $merged$$
};
twig.Environment = function $twig$Environment$() {
  this.extensions_ = {};
  this.filters_ = {};
  this.functions_ = {};
  this.tests_ = {};
  this.createdTemplates_ = {};
  this.globals_ = {};
  this.runtimeInitialized = !1;
  this.charset_ = "UTF-8"
};
twig.Environment.prototype.render = function $twig$Environment$$render$($ctor$$, $opt_context$$) {
  var $template$$ = this.createTemplate($ctor$$);
  return $template$$.render.call($template$$, twig.extend({}, this.globals_, $opt_context$$ || {}))
};
twig.Environment.prototype.filter = function $twig$Environment$$filter$($name$$, $arg1$$, $var_args$$) {
  if(!goog.object.containsKey(this.filters_, $name$$)) {
    throw Error("The filter '" + $name$$ + "' does not exist.");
  }
  return this.filters_[$name$$].apply(null, Array.prototype.slice.call(arguments, 1))
};
twig.Environment.prototype.invoke = function $twig$Environment$$invoke$($name$$, $arg1$$, $var_args$$) {
  if(!goog.object.containsKey(this.functions_, $name$$)) {
    throw Error("The function '" + $name$$ + "' does not exist.");
  }
  return this.functions_[$name$$].apply(null, Array.prototype.slice.call(arguments, 1))
};
twig.Environment.prototype.test = function $twig$Environment$$test$($name$$, $arg1$$, $var_args$$) {
  if(!goog.object.containsKey(this.tests_, $name$$)) {
    throw Error("The test '" + $name$$ + "' does not exist.");
  }
  return this.tests_[$name$$].apply(null, Array.prototype.slice.call(arguments, 1))
};
twig.Environment.prototype.escape = function $twig$Environment$$escape$($value$$, $opt_type$$, $opt_charset$$, $opt_autoescape$$) {
  return twig.filter.escape(this, $value$$, $opt_type$$, $opt_charset$$, $opt_autoescape$$)
};
twig.Environment.prototype.macro = function $twig$Environment$$macro$($templateCtor$$, $macroName$$, $var_args$$) {
  var $template$$ = this.createTemplate($templateCtor$$), $macro$$ = $template$$["get" + $macroName$$];
  if(!$macro$$) {
    throw Error("The macro '" + $macroName$$ + "' does not exist on template '" + $template$$.getTemplateName() + "'.");
  }
  return $macro$$.apply($template$$, Array.prototype.slice.call(arguments, 2)).toString()
};
twig.Environment.prototype.setFilter = function $twig$Environment$$setFilter$($name$$, $filter$$) {
  this.filters_[$name$$] = $filter$$
};
twig.Environment.prototype.setFunction = function $twig$Environment$$setFunction$($name$$, $func$$) {
  this.functions_[$name$$] = $func$$
};
twig.Environment.prototype.setTest = function $twig$Environment$$setTest$($name$$, $func$$) {
  this.tests_[$name$$] = $func$$
};
twig.Environment.prototype.setGlobals = function $twig$Environment$$setGlobals$($globals$$) {
  this.globals_ = $globals$$
};
twig.Environment.prototype.setGlobal = function $twig$Environment$$setGlobal$($key$$, $value$$) {
  this.globals_[$key$$] = $value$$
};
twig.Environment.prototype.getGlobals = function $twig$Environment$$getGlobals$() {
  return this.globals_
};
twig.Environment.prototype.getCharset = function $twig$Environment$$getCharset$() {
  return this.charset_
};
twig.Environment.prototype.setCharset = function $twig$Environment$$setCharset$($charset$$) {
  this.charset_ = $charset$$
};
twig.Environment.prototype.initRuntime = function $twig$Environment$$initRuntime$() {
  this.runtimeInitialized = !0;
  goog.object.forEach(this.getExtensions(), function($extension$$) {
    $extension$$.initRuntime(this)
  }, this)
};
twig.Environment.prototype.hasExtension = function $twig$Environment$$hasExtension$($name$$) {
  return goog.object.containsKey(this.extensions_, $name$$)
};
twig.Environment.prototype.getExtension = function $twig$Environment$$getExtension$($name$$) {
  if(!goog.object.containsKey(this.extensions_, $name$$)) {
    throw Error('The "' + $name$$ + '" extension is not enabled.');
  }
  return this.extensions_[$name$$]
};
twig.Environment.prototype.addExtension = function $twig$Environment$$addExtension$($extension$$) {
  this.extensions_[$extension$$.getName()] = $extension$$
};
twig.Environment.prototype.removeExtension = function $twig$Environment$$removeExtension$($name$$) {
  delete this.extensions_[$name$$]
};
twig.Environment.prototype.setExtensions = function $twig$Environment$$setExtensions$($extensions$$) {
  goog.object.forEach($extensions$$, function($extension$$) {
    this.addExtension($extension$$)
  })
};
twig.Environment.prototype.getExtensions = function $twig$Environment$$getExtensions$() {
  return this.extensions_
};
twig.Environment.prototype.createTemplate = function $twig$Environment$$createTemplate$($ctor$$3_template$$) {
  var $uid$$ = goog.getUid($ctor$$3_template$$);
  if(goog.object.containsKey(this.createdTemplates_, $uid$$)) {
    return this.createdTemplates_[$uid$$]
  }
  !1 === this.runtimeInitialized && this.initRuntime();
  $ctor$$3_template$$ = new $ctor$$3_template$$(this);
  return this.createdTemplates_[$uid$$] = $ctor$$3_template$$
};
twig.functions = {};
twig.functions.max = function $twig$functions$max$($value$$) {
  return goog.isArray($value$$) ? Math.max.apply(null, $value$$) : goog.isObject($value$$) ? Math.max.apply(null, goog.object.getValues($value$$)) : Math.max.apply(null, arguments)
};
twig.functions.min = function $twig$functions$min$($value$$) {
  return goog.isArray($value$$) ? Math.min.apply(null, $value$$) : goog.isObject($value$$) ? Math.min.apply(null, goog.object.getValues($value$$)) : Math.min.apply(null, arguments)
};
twig.functions.random = function $twig$functions$random$($env$$, $value$$) {
  if(goog.isArray($value$$) || goog.isString($value$$)) {
    var $index$$ = Math.floor(Math.random() * $value$$.length);
    return $value$$[$index$$]
  }
  return goog.isNumber($value$$) ? Math.floor(Math.random() * $value$$) : null === $value$$ || "undefined" === typeof $value$$ ? Math.floor(2147483647 * Math.random()) : ""
};
window.Twig = new twig.Environment;
goog.exportSymbol("goog.provide", goog.provide);
goog.exportSymbol("goog.require", function($namespace$$) {
});
goog.exportSymbol("twig.templates", {});
goog.exportSymbol("twig.attr", twig.attr);
goog.exportSymbol("twig.bind", twig.bind);
goog.exportSymbol("twig.inherits", twig.inherits);
goog.exportSymbol("twig.extend", twig.extend);
goog.exportSymbol("twig.spaceless", twig.spaceless);
goog.exportSymbol("twig.range", twig.range);
goog.exportSymbol("twig.contains", twig.contains);
goog.exportSymbol("twig.countable", twig.countable);
goog.exportSymbol("twig.count", twig.count);
goog.exportSymbol("twig.forEach", twig.forEach);
goog.exportSymbol("twig.empty", twig.empty);
goog.exportSymbol("twig.createObj", twig.createObj);
goog.exportSymbol("twig.pregQuote", twig.pregQuote);
goog.exportSymbol("twig.filter.capitalize", twig.filter.capitalize);
goog.exportSymbol("twig.filter.escape", twig.filter.escape);
goog.exportSymbol("twig.filter.first", twig.filter.first);
goog.exportSymbol("twig.filter.length", twig.filter.length);
goog.exportSymbol("twig.filter.def", twig.filter.def);
goog.exportSymbol("twig.filter.replace", twig.filter.replace);
goog.exportSymbol("twig.filter.join", twig.filter.join);
goog.exportSymbol("twig.filter.keys", twig.filter.keys);
goog.exportSymbol("twig.filter.upper", twig.filter.upper);
goog.exportSymbol("twig.filter.lower", twig.filter.lower);
goog.exportSymbol("twig.filter.nl2br", twig.filter.nl2br);
goog.exportSymbol("twig.filter.abs", twig.filter.abs);
goog.exportSymbol("twig.filter.title", twig.filter.title);
goog.exportSymbol("twig.filter.trim", twig.filter.trim);
goog.exportSymbol("twig.filter.json_encode", twig.filter.json_encode);
goog.exportSymbol("twig.filter.last", twig.filter.last);
goog.exportSymbol("twig.filter.reverse", twig.filter.reverse);
goog.exportSymbol("twig.filter.batch", twig.filter.batch);
goog.exportSymbol("twig.filter.merge", twig.filter.merge);
goog.exportSymbol("twig.functions.max", twig.functions.max);
goog.exportSymbol("twig.functions.min", twig.functions.min);
goog.exportSymbol("twig.functions.random", twig.functions.random);
goog.exportSymbol("twig.StringBuffer", twig.StringBuffer);
goog.exportProperty(twig.StringBuffer.prototype, "append", twig.StringBuffer.prototype.append);
goog.exportProperty(twig.StringBuffer.prototype, "toString", twig.StringBuffer.prototype.toString);
goog.exportSymbol("twig.Environment", twig.Environment);
goog.exportProperty(twig.Environment.prototype, "createTemplate", twig.Environment.prototype.createTemplate);
goog.exportProperty(twig.Environment.prototype, "filter", twig.Environment.prototype.filter);
goog.exportProperty(twig.Environment.prototype, "invoke", twig.Environment.prototype.invoke);
goog.exportProperty(twig.Environment.prototype, "test", twig.Environment.prototype.test);
goog.exportProperty(twig.Environment.prototype, "escape", twig.Environment.prototype.escape);
goog.exportProperty(twig.Environment.prototype, "macro", twig.Environment.prototype.macro);
goog.exportProperty(twig.Environment.prototype, "setFilter", twig.Environment.prototype.setFilter);
goog.exportProperty(twig.Environment.prototype, "setFunction", twig.Environment.prototype.setFunction);
goog.exportProperty(twig.Environment.prototype, "setTest", twig.Environment.prototype.setTest);
goog.exportProperty(twig.Environment.prototype, "render", twig.Environment.prototype.render);
goog.exportProperty(twig.Environment.prototype, "getGlobals", twig.Environment.prototype.getGlobals);
goog.exportProperty(twig.Environment.prototype, "setGlobals", twig.Environment.prototype.setGlobals);
goog.exportProperty(twig.Environment.prototype, "setGlobal", twig.Environment.prototype.setGlobal);
goog.exportProperty(twig.Environment.prototype, "initRuntime", twig.Environment.prototype.initRuntime);
goog.exportProperty(twig.Environment.prototype, "hasExtension", twig.Environment.prototype.hasExtension);
goog.exportProperty(twig.Environment.prototype, "getExtension", twig.Environment.prototype.getExtension);
goog.exportProperty(twig.Environment.prototype, "addExtension", twig.Environment.prototype.addExtension);
goog.exportProperty(twig.Environment.prototype, "removeExtension", twig.Environment.prototype.removeExtension);
goog.exportProperty(twig.Environment.prototype, "setExtensions", twig.Environment.prototype.setExtensions);
goog.exportProperty(twig.Environment.prototype, "getExtensions", twig.Environment.prototype.getExtensions);
goog.exportSymbol("twig.Template", twig.Template);
goog.exportProperty(twig.Template.prototype, "setTraits", twig.Template.prototype.setTraits);
goog.exportProperty(twig.Template.prototype, "setBlocks", twig.Template.prototype.setBlocks);
goog.exportProperty(twig.Template.prototype, "getBlocks", twig.Template.prototype.getBlocks);
goog.exportProperty(twig.Template.prototype, "renderParentBlock", twig.Template.prototype.renderParentBlock);
goog.exportProperty(twig.Template.prototype, "renderBlock", twig.Template.prototype.renderBlock);
goog.exportProperty(twig.Template.prototype, "callMacro", twig.Template.prototype.callMacro);
goog.exportSymbol("twig.Markup", twig.Markup);
})();
