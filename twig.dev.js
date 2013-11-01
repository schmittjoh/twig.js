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
(function() {var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$55_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$55_parts$$ = $name$$55_parts$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$global$$;
  $name$$55_parts$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$55_parts$$[0]);
  for(var $part$$;$name$$55_parts$$.length && ($part$$ = $name$$55_parts$$.shift());) {
    $name$$55_parts$$.length || void 0 === $opt_object$$ ? $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {} : $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$
  }
}
function $goog$typeOf$$($value$$39$$) {
  var $s$$2$$ = typeof $value$$39$$;
  if("object" == $s$$2$$) {
    if($value$$39$$) {
      if($value$$39$$ instanceof Array) {
        return"array"
      }
      if($value$$39$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$1$$ = Object.prototype.toString.call($value$$39$$);
      if("[object Window]" == $className$$1$$) {
        return"object"
      }
      if("[object Array]" == $className$$1$$ || "number" == typeof $value$$39$$.length && "undefined" != typeof $value$$39$$.splice && "undefined" != typeof $value$$39$$.propertyIsEnumerable && !$value$$39$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$1$$ || "undefined" != typeof $value$$39$$.call && "undefined" != typeof $value$$39$$.propertyIsEnumerable && !$value$$39$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$39$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isArray$$($val$$3$$) {
  return"array" == $goog$typeOf$$($val$$3$$)
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isObject$$($val$$10$$) {
  var $type$$52$$ = typeof $val$$10$$;
  return"object" == $type$$52$$ && null != $val$$10$$ || "function" == $type$$52$$
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$26$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$27$$) {
  if(!$fn$$1$$) {
    throw Error();
  }
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$28$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments)
}
function $goog$exportSymbol$$($publicPath$$, $object$$) {
  $goog$exportPath_$$($publicPath$$, $object$$, void 0)
}
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$
}
;function $goog$string$subs$$($str$$12$$, $var_args$$31$$) {
  for(var $splitParts$$ = $str$$12$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift()
  }
  return $returnString$$ + $splitParts$$.join("%s")
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/, $goog$string$specialEscapeChars_$$ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, $goog$string$jsEscapeCache_$$ = {"'":"\\'"};
function $goog$string$StringBuffer$$($opt_a1$$, $var_args$$33$$) {
  null != $opt_a1$$ && this.append.apply(this, arguments)
}
$goog$string$StringBuffer$$.prototype.$buffer_$ = "";
$goog$string$StringBuffer$$.prototype.append = function $$goog$string$StringBuffer$$$$append$($a1$$, $opt_a2$$, $var_args$$34$$) {
  this.$buffer_$ += $a1$$;
  if(null != $opt_a2$$) {
    for(var $i$$11$$ = 1;$i$$11$$ < arguments.length;$i$$11$$++) {
      this.$buffer_$ += arguments[$i$$11$$]
    }
  }
  return this
};
$goog$string$StringBuffer$$.prototype.toString = function $$goog$string$StringBuffer$$$$toString$() {
  return this.$buffer_$
};
function $goog$object$forEach$$($obj$$24$$, $f$$, $opt_obj$$1$$) {
  for(var $key$$16$$ in $obj$$24$$) {
    $f$$.call($opt_obj$$1$$, $obj$$24$$[$key$$16$$], $key$$16$$, $obj$$24$$)
  }
}
function $goog$object$findKey$$($obj$$38$$, $f$$5$$) {
  for(var $key$$28$$ in $obj$$38$$) {
    if($f$$5$$.call(void 0, $obj$$38$$[$key$$28$$], $key$$28$$, $obj$$38$$)) {
      return $key$$28$$
    }
  }
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$40$$, $var_args$$36$$) {
  for(var $key$$39$$, $source$$2$$, $i$$16$$ = 1;$i$$16$$ < arguments.length;$i$$16$$++) {
    $source$$2$$ = arguments[$i$$16$$];
    for($key$$39$$ in $source$$2$$) {
      $target$$40$$[$key$$39$$] = $source$$2$$[$key$$39$$]
    }
    for(var $j$$1$$ = 0;$j$$1$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$1$$++) {
      $key$$39$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$1$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$39$$) && ($target$$40$$[$key$$39$$] = $source$$2$$[$key$$39$$])
    }
  }
}
;function $goog$debug$Error$$($opt_msg$$) {
  Error.captureStackTrace ? Error.captureStackTrace(this, $goog$debug$Error$$) : this.stack = Error().stack || "";
  $opt_msg$$ && (this.message = String($opt_msg$$))
}
$goog$inherits$$($goog$debug$Error$$, Error);
function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
  $messageArgs$$.unshift($messagePattern$$);
  $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
  $messageArgs$$.shift();
  this.$messagePattern$ = $messagePattern$$
}
$goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
function $goog$asserts$assert$$($condition$$1$$, $opt_message$$8$$, $var_args$$39$$) {
  if(!$condition$$1$$) {
    var $givenArgs$$inline_4$$ = Array.prototype.slice.call(arguments, 2), $message$$inline_7$$ = "Assertion failed";
    if($opt_message$$8$$) {
      var $message$$inline_7$$ = $message$$inline_7$$ + (": " + $opt_message$$8$$), $args$$inline_8$$ = $givenArgs$$inline_4$$
    }
    throw new $goog$asserts$AssertionError$$("" + $message$$inline_7$$, $args$$inline_8$$ || []);
  }
}
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$10$$, $obj$$52$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$(null != $arr$$10$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$10$$, $obj$$52$$, $opt_fromIndex$$6$$)
} : function($arr$$11$$, $obj$$53$$, $fromIndex_i$$19_opt_fromIndex$$7$$) {
  $fromIndex_i$$19_opt_fromIndex$$7$$ = null == $fromIndex_i$$19_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex_i$$19_opt_fromIndex$$7$$ ? Math.max(0, $arr$$11$$.length + $fromIndex_i$$19_opt_fromIndex$$7$$) : $fromIndex_i$$19_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$11$$)) {
    return $goog$isString$$($obj$$53$$) && 1 == $obj$$53$$.length ? $arr$$11$$.indexOf($obj$$53$$, $fromIndex_i$$19_opt_fromIndex$$7$$) : -1
  }
  for(;$fromIndex_i$$19_opt_fromIndex$$7$$ < $arr$$11$$.length;$fromIndex_i$$19_opt_fromIndex$$7$$++) {
    if($fromIndex_i$$19_opt_fromIndex$$7$$ in $arr$$11$$ && $arr$$11$$[$fromIndex_i$$19_opt_fromIndex$$7$$] === $obj$$53$$) {
      return $fromIndex_i$$19_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$14$$, $f$$7$$, $opt_obj$$6$$) {
  $goog$asserts$assert$$(null != $arr$$14$$.length);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$14$$, $f$$7$$, $opt_obj$$6$$)
} : function($arr$$15$$, $f$$8$$, $opt_obj$$7$$) {
  for(var $l$$2$$ = $arr$$15$$.length, $arr2$$ = $goog$isString$$($arr$$15$$) ? $arr$$15$$.split("") : $arr$$15$$, $i$$21$$ = 0;$i$$21$$ < $l$$2$$;$i$$21$$++) {
    $i$$21$$ in $arr2$$ && $f$$8$$.call($opt_obj$$7$$, $arr2$$[$i$$21$$], $i$$21$$, $arr$$15$$)
  }
};
var $twig$bind$$ = $goog$bind$$, $goog$UID_PROPERTY_$$ = "twig_ui_" + Math.floor(2147483648 * Math.random()).toString(36);
function $twig$empty$$($value$$57$$) {
  return null === $value$$57$$ || !1 === $value$$57$$ || void 0 === $value$$57$$ || 0 === $value$$57$$ ? !0 : $twig$countable$$($value$$57$$) ? 0 === $twig$count$$($value$$57$$) : !1
}
function $twig$extend$$($target$$42$$, $var_args$$53$$) {
  $goog$object$extend$$.apply(null, Array.prototype.slice.call(arguments, 0));
  return $target$$42$$
}
function $twig$countable$$($v$$1$$) {
  return $goog$isArray$$($v$$1$$) || $goog$isString$$($v$$1$$) || $goog$isObject$$($v$$1$$)
}
function $twig$count$$($v$$2$$) {
  if($goog$isArray$$($v$$2$$)) {
    return $v$$2$$.length
  }
  if($goog$isString$$($v$$2$$)) {
    return $v$$2$$.length
  }
  if($goog$isObject$$($v$$2$$)) {
    var $rv$$inline_11$$ = 0, $key$$inline_12$$;
    for($key$$inline_12$$ in $v$$2$$) {
      $rv$$inline_11$$++
    }
    return $rv$$inline_11$$
  }
  throw Error(typeof $v$$2$$ + " is not countable.");
}
function $twig$forEach$$($v$$3$$, $func$$3$$, $opt_this$$2$$) {
  $goog$isArray$$($v$$3$$) ? $goog$array$forEach$$($v$$3$$, $func$$3$$, $opt_this$$2$$) : $goog$object$forEach$$($v$$3$$, $func$$3$$, $opt_this$$2$$)
}
;function $twig$Template$$($env$$) {
  this.env_ = $env$$;
  this.$blocks_$ = [];
  this.$traits_$ = {}
}
$JSCompiler_prototypeAlias$$ = $twig$Template$$.prototype;
$JSCompiler_prototypeAlias$$.$getBlocks$ = function $$JSCompiler_prototypeAlias$$$$getBlocks$$() {
  return this.$blocks_$
};
$JSCompiler_prototypeAlias$$.$setBlocks$ = function $$JSCompiler_prototypeAlias$$$$setBlocks$$($blocks$$) {
  this.$blocks_$ = $blocks$$
};
$JSCompiler_prototypeAlias$$.$setTraits$ = function $$JSCompiler_prototypeAlias$$$$setTraits$$($traits$$) {
  this.$traits_$ = $traits$$
};
$JSCompiler_prototypeAlias$$.getParent = function $$JSCompiler_prototypeAlias$$$getParent$($context_parent$$2$$) {
  $context_parent$$2$$ = this.getParent_($context_parent$$2$$);
  return!1 === $context_parent$$2$$ ? !1 : this.env_.$createTemplate$($context_parent$$2$$)
};
$JSCompiler_prototypeAlias$$.$renderParentBlock$ = function $$JSCompiler_prototypeAlias$$$$renderParentBlock$$($name$$61$$, $context$$1$$, $opt_blocks$$) {
  if($name$$61$$ in this.$traits_$) {
    var $parent$$3_sb$$2$$ = new $goog$string$StringBuffer$$;
    this.$traits_$[$name$$61$$]($parent$$3_sb$$2$$, $context$$1$$, $opt_blocks$$ || {});
    return $parent$$3_sb$$2$$.toString()
  }
  $parent$$3_sb$$2$$ = this.getParent($context$$1$$);
  if(!1 !== $parent$$3_sb$$2$$) {
    return $parent$$3_sb$$2$$.$renderBlock$($name$$61$$, $context$$1$$, $opt_blocks$$)
  }
  throw Error("The template '" + this.$getTemplateName$() + "' has no parent, and no trait defining the block '" + $name$$61$$ + "'.");
};
$JSCompiler_prototypeAlias$$.$renderBlock$ = function $$JSCompiler_prototypeAlias$$$$renderBlock$$($name$$62$$, $context$$2$$, $opt_blocks$$1$$) {
  if($opt_blocks$$1$$ && $name$$62$$ in $opt_blocks$$1$$) {
    var $parent$$4_sb$$3$$ = new $goog$string$StringBuffer$$, $block$$ = $opt_blocks$$1$$[$name$$62$$];
    delete $opt_blocks$$1$$[$name$$62$$];
    $block$$($parent$$4_sb$$3$$, $context$$2$$, $opt_blocks$$1$$);
    return $parent$$4_sb$$3$$.toString()
  }
  if($name$$62$$ in this.$blocks_$) {
    return $parent$$4_sb$$3$$ = new $goog$string$StringBuffer$$, this.$blocks_$[$name$$62$$]($parent$$4_sb$$3$$, $context$$2$$, $opt_blocks$$1$$ || null), $parent$$4_sb$$3$$.toString()
  }
  $parent$$4_sb$$3$$ = this.getParent($context$$2$$);
  return!1 !== $parent$$4_sb$$3$$ ? $parent$$4_sb$$3$$.$renderBlock$($name$$62$$, $context$$2$$, $opt_blocks$$1$$) : ""
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($opt_context$$5$$, $opt_blocks$$2$$) {
  var $sb$$4$$ = new $goog$string$StringBuffer$$;
  this.render_($sb$$4$$, $opt_context$$5$$ || {}, $opt_blocks$$2$$ || {});
  return $sb$$4$$.toString()
};
$JSCompiler_prototypeAlias$$.$callMacro$ = function $$JSCompiler_prototypeAlias$$$$callMacro$$($template$$, $macro$$, $args$$3$$, $opt_namedNames$$) {
  if(!$template$$["get" + $macro$$]) {
    throw Error("The macro " + $macro$$ + " is not defined in " + $template$$.$getTemplateName$() + ".");
  }
  if(void 0 === $opt_namedNames$$) {
    return $template$$["get" + $macro$$].apply($template$$, $args$$3$$)
  }
  throw Error("Positional arguments, or default values in macro arguments are not supported, yet.");
};
function $twig$Markup$$($content$$) {
  this.$content_$ = $content$$
}
$twig$Markup$$.prototype.toString = function $$twig$Markup$$$$toString$() {
  return this.$content_$
};
function $twig$filter$escape$$($env$$2_s$$inline_14_str$$inline_137$$, $sb$$inline_15_value$$59$$, $i$$inline_16_opt_type$$6$$, $JSCompiler_temp_const$$127_opt_charset$$, $JSCompiler_temp_const$$126_opt_autoescape$$) {
  if($JSCompiler_temp_const$$126_opt_autoescape$$ && $sb$$inline_15_value$$59$$ instanceof $twig$Markup$$) {
    return $sb$$inline_15_value$$59$$.toString()
  }
  $sb$$inline_15_value$$59$$ = null == $sb$$inline_15_value$$59$$ ? "" : String($sb$$inline_15_value$$59$$);
  if($twig$filter$escape$Type$JAVASCRIPT$$ === $i$$inline_16_opt_type$$6$$) {
    $env$$2_s$$inline_14_str$$inline_137$$ = String($sb$$inline_15_value$$59$$);
    if($env$$2_s$$inline_14_str$$inline_137$$.quote) {
      $sb$$inline_15_value$$59$$ = $env$$2_s$$inline_14_str$$inline_137$$.quote()
    }else {
      $sb$$inline_15_value$$59$$ = ['"'];
      for($i$$inline_16_opt_type$$6$$ = 0;$i$$inline_16_opt_type$$6$$ < $env$$2_s$$inline_14_str$$inline_137$$.length;$i$$inline_16_opt_type$$6$$++) {
        var $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$ = $env$$2_s$$inline_14_str$$inline_137$$.charAt($i$$inline_16_opt_type$$6$$), $cc$$inline_18_rv$$inline_134$$ = $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$.charCodeAt(0);
        $JSCompiler_temp_const$$127_opt_charset$$ = $sb$$inline_15_value$$59$$;
        $JSCompiler_temp_const$$126_opt_autoescape$$ = $i$$inline_16_opt_type$$6$$ + 1;
        var $JSCompiler_temp$$128_cc$$inline_135$$;
        if(!($JSCompiler_temp$$128_cc$$inline_135$$ = $goog$string$specialEscapeChars_$$[$JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$])) {
          if(!(31 < $cc$$inline_18_rv$$inline_134$$ && 127 > $cc$$inline_18_rv$$inline_134$$)) {
            if($JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$ in $goog$string$jsEscapeCache_$$) {
              $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$ = $goog$string$jsEscapeCache_$$[$JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$]
            }else {
              if($JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$ in $goog$string$specialEscapeChars_$$) {
                $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$ = $goog$string$jsEscapeCache_$$[$JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$] = $goog$string$specialEscapeChars_$$[$JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$]
              }else {
                $cc$$inline_18_rv$$inline_134$$ = $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$;
                $JSCompiler_temp$$128_cc$$inline_135$$ = $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$.charCodeAt(0);
                if(31 < $JSCompiler_temp$$128_cc$$inline_135$$ && 127 > $JSCompiler_temp$$128_cc$$inline_135$$) {
                  $cc$$inline_18_rv$$inline_134$$ = $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$
                }else {
                  if(256 > $JSCompiler_temp$$128_cc$$inline_135$$) {
                    if($cc$$inline_18_rv$$inline_134$$ = "\\x", 16 > $JSCompiler_temp$$128_cc$$inline_135$$ || 256 < $JSCompiler_temp$$128_cc$$inline_135$$) {
                      $cc$$inline_18_rv$$inline_134$$ += "0"
                    }
                  }else {
                    $cc$$inline_18_rv$$inline_134$$ = "\\u", 4096 > $JSCompiler_temp$$128_cc$$inline_135$$ && ($cc$$inline_18_rv$$inline_134$$ += "0")
                  }
                  $cc$$inline_18_rv$$inline_134$$ += $JSCompiler_temp$$128_cc$$inline_135$$.toString(16).toUpperCase()
                }
                $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$ = $goog$string$jsEscapeCache_$$[$JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$] = $cc$$inline_18_rv$$inline_134$$
              }
            }
          }
          $JSCompiler_temp$$128_cc$$inline_135$$ = $JSCompiler_temp$$129_c$$inline_133_ch$$inline_17$$
        }
        $JSCompiler_temp_const$$127_opt_charset$$[$JSCompiler_temp_const$$126_opt_autoescape$$] = $JSCompiler_temp$$128_cc$$inline_135$$
      }
      $sb$$inline_15_value$$59$$.push('"');
      $sb$$inline_15_value$$59$$ = $sb$$inline_15_value$$59$$.join("")
    }
    return $sb$$inline_15_value$$59$$.substring(1, $sb$$inline_15_value$$59$$.length - 1)
  }
  if(!$i$$inline_16_opt_type$$6$$ || $twig$filter$escape$Type$HTML$$ === $i$$inline_16_opt_type$$6$$) {
    return $env$$2_s$$inline_14_str$$inline_137$$ = $sb$$inline_15_value$$59$$, $goog$string$allRe_$$.test($env$$2_s$$inline_14_str$$inline_137$$) && (-1 != $env$$2_s$$inline_14_str$$inline_137$$.indexOf("\x26") && ($env$$2_s$$inline_14_str$$inline_137$$ = $env$$2_s$$inline_14_str$$inline_137$$.replace($goog$string$amperRe_$$, "\x26amp;")), -1 != $env$$2_s$$inline_14_str$$inline_137$$.indexOf("\x3c") && ($env$$2_s$$inline_14_str$$inline_137$$ = $env$$2_s$$inline_14_str$$inline_137$$.replace($goog$string$ltRe_$$, 
    "\x26lt;")), -1 != $env$$2_s$$inline_14_str$$inline_137$$.indexOf("\x3e") && ($env$$2_s$$inline_14_str$$inline_137$$ = $env$$2_s$$inline_14_str$$inline_137$$.replace($goog$string$gtRe_$$, "\x26gt;")), -1 != $env$$2_s$$inline_14_str$$inline_137$$.indexOf('"') && ($env$$2_s$$inline_14_str$$inline_137$$ = $env$$2_s$$inline_14_str$$inline_137$$.replace($goog$string$quotRe_$$, "\x26quot;"))), $env$$2_s$$inline_14_str$$inline_137$$
  }
  if($twig$filter$escape$Type$URL$$ === $i$$inline_16_opt_type$$6$$) {
    return encodeURIComponent($sb$$inline_15_value$$59$$)
  }
  throw Error("The type '" + $i$$inline_16_opt_type$$6$$ + "' is not supported.");
}
var $twig$filter$escape$Type$HTML$$ = "html", $twig$filter$escape$Type$JAVASCRIPT$$ = "js", $twig$filter$escape$Type$URL$$ = "url";
function $twig$Environment$$() {
  this.$extensions_$ = {};
  this.$filters_$ = {};
  this.$functions_$ = {};
  this.$tests_$ = {};
  this.$createdTemplates_$ = {};
  this.$globals_$ = {};
  this.$runtimeInitialized$ = !1;
  this.$charset_$ = "UTF-8"
}
$JSCompiler_prototypeAlias$$ = $twig$Environment$$.prototype;
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($ctor$$2$$, $opt_context$$6$$) {
  var $template$$1$$ = this.$createTemplate$($ctor$$2$$);
  return $template$$1$$.$render$.call($template$$1$$, $twig$extend$$({}, this.$globals_$, $opt_context$$6$$ || {}))
};
$JSCompiler_prototypeAlias$$.filter = function $$JSCompiler_prototypeAlias$$$filter$($name$$63$$, $arg1$$, $var_args$$55$$) {
  if(!($name$$63$$ in this.$filters_$)) {
    throw Error("The filter '" + $name$$63$$ + "' does not exist.");
  }
  return this.$filters_$[$name$$63$$].apply(null, Array.prototype.slice.call(arguments, 1))
};
$JSCompiler_prototypeAlias$$.$invoke$ = function $$JSCompiler_prototypeAlias$$$$invoke$$($name$$64$$, $arg1$$1$$, $var_args$$56$$) {
  if(!($name$$64$$ in this.$functions_$)) {
    throw Error("The function '" + $name$$64$$ + "' does not exist.");
  }
  return this.$functions_$[$name$$64$$].apply(null, Array.prototype.slice.call(arguments, 1))
};
$JSCompiler_prototypeAlias$$.test = function $$JSCompiler_prototypeAlias$$$test$($name$$65$$, $arg1$$2$$, $var_args$$57$$) {
  if(!($name$$65$$ in this.$tests_$)) {
    throw Error("The test '" + $name$$65$$ + "' does not exist.");
  }
  return this.$tests_$[$name$$65$$].apply(null, Array.prototype.slice.call(arguments, 1))
};
$JSCompiler_prototypeAlias$$.escape = function $$JSCompiler_prototypeAlias$$$escape$($value$$64$$, $opt_type$$7$$, $opt_charset$$1$$, $opt_autoescape$$1$$) {
  return $twig$filter$escape$$(0, $value$$64$$, $opt_type$$7$$, 0, $opt_autoescape$$1$$)
};
$JSCompiler_prototypeAlias$$.$macro$ = function $$JSCompiler_prototypeAlias$$$$macro$$($templateCtor$$, $macroName$$, $var_args$$58$$) {
  var $template$$2$$ = this.$createTemplate$($templateCtor$$), $macro$$1$$ = $template$$2$$["get" + $macroName$$];
  if(!$macro$$1$$) {
    throw Error("The macro '" + $macroName$$ + "' does not exist on template '" + $template$$2$$.$getTemplateName$() + "'.");
  }
  return $macro$$1$$.apply($template$$2$$, Array.prototype.slice.call(arguments, 2)).toString()
};
$JSCompiler_prototypeAlias$$.$setFilter$ = function $$JSCompiler_prototypeAlias$$$$setFilter$$($name$$66$$, $filter$$) {
  this.$filters_$[$name$$66$$] = $filter$$
};
$JSCompiler_prototypeAlias$$.$setFunction$ = function $$JSCompiler_prototypeAlias$$$$setFunction$$($name$$67$$, $func$$4$$) {
  this.$functions_$[$name$$67$$] = $func$$4$$
};
$JSCompiler_prototypeAlias$$.$setTest$ = function $$JSCompiler_prototypeAlias$$$$setTest$$($name$$68$$, $func$$5$$) {
  this.$tests_$[$name$$68$$] = $func$$5$$
};
$JSCompiler_prototypeAlias$$.$getGlobals$ = function $$JSCompiler_prototypeAlias$$$$getGlobals$$() {
  return this.$globals_$
};
$JSCompiler_prototypeAlias$$.$initRuntime$ = function $$JSCompiler_prototypeAlias$$$$initRuntime$$() {
  this.$runtimeInitialized$ = !0;
  $goog$object$forEach$$(this.$extensions_$, function($extension$$) {
    $extension$$.$initRuntime$()
  }, this)
};
$JSCompiler_prototypeAlias$$.$hasExtension$ = function $$JSCompiler_prototypeAlias$$$$hasExtension$$($name$$69$$) {
  return $name$$69$$ in this.$extensions_$
};
$JSCompiler_prototypeAlias$$.getExtension = function $$JSCompiler_prototypeAlias$$$getExtension$($name$$70$$) {
  if(!($name$$70$$ in this.$extensions_$)) {
    throw Error('The "' + $name$$70$$ + '" extension is not enabled.');
  }
  return this.$extensions_$[$name$$70$$]
};
$JSCompiler_prototypeAlias$$.$addExtension$ = function $$JSCompiler_prototypeAlias$$$$addExtension$$($extension$$1$$) {
  this.$extensions_$[$extension$$1$$.getName()] = $extension$$1$$
};
$JSCompiler_prototypeAlias$$.$removeExtension$ = function $$JSCompiler_prototypeAlias$$$$removeExtension$$($name$$71$$) {
  delete this.$extensions_$[$name$$71$$]
};
$JSCompiler_prototypeAlias$$.$setExtensions$ = function $$JSCompiler_prototypeAlias$$$$setExtensions$$($extensions$$) {
  $goog$object$forEach$$($extensions$$, function($extension$$2$$) {
    this.$addExtension$($extension$$2$$)
  })
};
$JSCompiler_prototypeAlias$$.$getExtensions$ = function $$JSCompiler_prototypeAlias$$$$getExtensions$$() {
  return this.$extensions_$
};
$JSCompiler_prototypeAlias$$.$createTemplate$ = function $$JSCompiler_prototypeAlias$$$$createTemplate$$($ctor$$3_template$$3$$) {
  var $uid$$ = $ctor$$3_template$$3$$[$goog$UID_PROPERTY_$$] || ($ctor$$3_template$$3$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
  if($uid$$ in this.$createdTemplates_$) {
    return this.$createdTemplates_$[$uid$$]
  }
  !1 === this.$runtimeInitialized$ && this.$initRuntime$();
  $ctor$$3_template$$3$$ = new $ctor$$3_template$$3$$(this);
  return this.$createdTemplates_$[$uid$$] = $ctor$$3_template$$3$$
};
window.Twig = new $twig$Environment$$;
$goog$exportSymbol$$("goog.provide", function($name$$57$$) {
  $goog$exportPath_$$($name$$57$$)
});
$goog$exportSymbol$$("goog.require", function() {
});
$goog$exportSymbol$$("twig.attr", function($obj$$61$$, $attr_functionName$$, $opt_args$$1$$, $accessType_opt_accessType$$, $isTest_opt_isTest$$) {
  $accessType_opt_accessType$$ = $accessType_opt_accessType$$ || "any";
  $isTest_opt_isTest$$ = void 0 !== $isTest_opt_isTest$$ ? $isTest_opt_isTest$$ : !1;
  if(!$goog$isObject$$($obj$$61$$) && !$goog$isArray$$($obj$$61$$)) {
    return $isTest_opt_isTest$$ ? !1 : null
  }
  if($attr_functionName$$ in $obj$$61$$) {
    if("array" !== $accessType_opt_accessType$$ && "function" == $goog$typeOf$$($obj$$61$$[$attr_functionName$$])) {
      return $isTest_opt_isTest$$ ? !0 : $obj$$61$$[$attr_functionName$$].apply($obj$$61$$, $opt_args$$1$$ || [])
    }
    if("method" !== $accessType_opt_accessType$$) {
      return $isTest_opt_isTest$$ ? !0 : $obj$$61$$[$attr_functionName$$]
    }
  }
  if("array" === $accessType_opt_accessType$$ || $goog$isArray$$($obj$$61$$)) {
    return $isTest_opt_isTest$$ ? !1 : null
  }
  $attr_functionName$$ = $attr_functionName$$.toLowerCase();
  var $getter$$ = "get" + $attr_functionName$$, $isser$$ = "is" + $attr_functionName$$;
  return($attr_functionName$$ = $goog$object$findKey$$($obj$$61$$, function($v$$, $k$$) {
    $k$$ = $k$$.toLowerCase();
    return $k$$ === $getter$$ || $k$$ === $isser$$
  })) && "function" == $goog$typeOf$$($obj$$61$$[$attr_functionName$$]) ? $isTest_opt_isTest$$ ? !0 : $obj$$61$$[$attr_functionName$$].apply($obj$$61$$, $opt_args$$1$$ || []) : $isTest_opt_isTest$$ ? !1 : null
});
$goog$exportSymbol$$("twig.bind", $twig$bind$$);
$goog$exportSymbol$$("twig.inherits", $goog$inherits$$);
$goog$exportSymbol$$("twig.extend", $twig$extend$$);
$goog$exportSymbol$$("twig.spaceless", function($s$$15$$) {
  return $s$$15$$.replace(/>[\s\xa0]+</g, "\x3e\x3c").replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
});
$goog$exportSymbol$$("twig.range", function($start$$7$$, $end$$3$$) {
  for(var $rs$$ = [];$start$$7$$ <= $end$$3$$;$start$$7$$ += 1) {
    $rs$$.push($start$$7$$)
  }
  return $rs$$
});
$goog$exportSymbol$$("twig.contains", function($haystack$$, $needle$$) {
  var $JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$;
  if($goog$isArray$$($haystack$$)) {
    $JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$ = 0 <= $goog$array$indexOf$$($haystack$$, $needle$$)
  }else {
    if($goog$isString$$($haystack$$)) {
      $JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$ = -1 != $haystack$$.indexOf($needle$$)
    }else {
      a: {
        for($JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$ in $haystack$$) {
          if($haystack$$[$JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$] == $needle$$) {
            $JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$ = !0;
            break a
          }
        }
        $JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$ = !1
      }
    }
  }
  return $JSCompiler_temp$$131_JSCompiler_temp$$132_key$$inline_141$$
});
$goog$exportSymbol$$("twig.countable", $twig$countable$$);
$goog$exportSymbol$$("twig.count", $twig$count$$);
$goog$exportSymbol$$("twig.forEach", $twig$forEach$$);
$goog$exportSymbol$$("twig.empty", $twig$empty$$);
$goog$exportSymbol$$("twig.createObj", function($var_args$$54$$) {
  for(var $rs$$1$$ = {}, $i$$48$$ = 0;$i$$48$$ < arguments.length;$i$$48$$ += 2) {
    $rs$$1$$[arguments[$i$$48$$]] = arguments[$i$$48$$ + 1]
  }
  return $rs$$1$$
});
$goog$exportSymbol$$("twig.filter.capitalize", function($env$$1$$, $str$$49$$) {
  return $str$$49$$.charAt(0).toUpperCase() + $str$$49$$.substring(1)
});
$goog$exportSymbol$$("twig.filter.escape", $twig$filter$escape$$);
$goog$exportSymbol$$("twig.filter.length", function($env$$3$$, $value$$60$$) {
  return $twig$count$$($value$$60$$)
});
$goog$exportSymbol$$("twig.filter.def", function($value$$58$$, $opt_default$$) {
  return $twig$empty$$($value$$58$$) ? $opt_default$$ || "" : $value$$58$$
});
$goog$exportSymbol$$("twig.filter.replace", function($str$$48$$, $map$$) {
  for(var $key$$44$$ in $map$$) {
    $str$$48$$ = $str$$48$$.replace(RegExp($key$$44$$, "g"), $map$$[$key$$44$$])
  }
  return $str$$48$$
});
$goog$exportSymbol$$("twig.filter.join", function($value$$61$$, $opt_glue$$) {
  var $glue$$ = $opt_glue$$ || "", $buffer$$8$$ = new $goog$string$StringBuffer$$, $first$$1$$ = !0;
  $twig$forEach$$($value$$61$$, function($v$$4$$) {
    $first$$1$$ || $buffer$$8$$.append($glue$$);
    $first$$1$$ = !1;
    $buffer$$8$$.append($v$$4$$)
  });
  return $buffer$$8$$.toString()
});
$goog$exportSymbol$$("twig.filter.keys", function($obj$$34$$) {
  var $res$$3$$ = [], $i$$13$$ = 0, $key$$25$$;
  for($key$$25$$ in $obj$$34$$) {
    $res$$3$$[$i$$13$$++] = $key$$25$$
  }
  return $res$$3$$
});
$goog$exportSymbol$$("twig.filter.upper", function($env$$4$$, $value$$62$$) {
  return $value$$62$$.toUpperCase()
});
$goog$exportSymbol$$("twig.filter.lower", function($env$$5$$, $value$$63$$) {
  return $value$$63$$.toLowerCase()
});
$goog$exportSymbol$$("twig.filter.nl2br", function($str$$50$$) {
  return $str$$50$$.replace(/\n/g, "\x3cbr /\x3e")
});
$goog$exportSymbol$$("twig.StringBuffer", $goog$string$StringBuffer$$);
$goog$string$StringBuffer$$.prototype.append = $goog$string$StringBuffer$$.prototype.append;
$goog$string$StringBuffer$$.prototype.toString = $goog$string$StringBuffer$$.prototype.toString;
$twig$Environment$$.prototype.createTemplate = $twig$Environment$$.prototype.$createTemplate$;
$twig$Environment$$.prototype.filter = $twig$Environment$$.prototype.filter;
$twig$Environment$$.prototype.invoke = $twig$Environment$$.prototype.$invoke$;
$twig$Environment$$.prototype.test = $twig$Environment$$.prototype.test;
$twig$Environment$$.prototype.escape = $twig$Environment$$.prototype.escape;
$twig$Environment$$.prototype.macro = $twig$Environment$$.prototype.$macro$;
$twig$Environment$$.prototype.setFilter = $twig$Environment$$.prototype.$setFilter$;
$twig$Environment$$.prototype.setFunction = $twig$Environment$$.prototype.$setFunction$;
$twig$Environment$$.prototype.setTest = $twig$Environment$$.prototype.$setTest$;
$twig$Environment$$.prototype.render = $twig$Environment$$.prototype.$render$;
$twig$Environment$$.prototype.getGlobals = $twig$Environment$$.prototype.$getGlobals$;
$twig$Environment$$.prototype.initRuntime = $twig$Environment$$.prototype.$initRuntime$;
$twig$Environment$$.prototype.hasExtension = $twig$Environment$$.prototype.$hasExtension$;
$twig$Environment$$.prototype.getExtension = $twig$Environment$$.prototype.getExtension;
$twig$Environment$$.prototype.addExtension = $twig$Environment$$.prototype.$addExtension$;
$twig$Environment$$.prototype.removeExtension = $twig$Environment$$.prototype.$removeExtension$;
$twig$Environment$$.prototype.setExtensions = $twig$Environment$$.prototype.$setExtensions$;
$twig$Environment$$.prototype.getExtensions = $twig$Environment$$.prototype.$getExtensions$;
$goog$exportSymbol$$("twig.Template", $twig$Template$$);
$twig$Template$$.prototype.setTraits = $twig$Template$$.prototype.$setTraits$;
$twig$Template$$.prototype.setBlocks = $twig$Template$$.prototype.$setBlocks$;
$twig$Template$$.prototype.getBlocks = $twig$Template$$.prototype.$getBlocks$;
$twig$Template$$.prototype.renderParentBlock = $twig$Template$$.prototype.$renderParentBlock$;
$twig$Template$$.prototype.renderBlock = $twig$Template$$.prototype.$renderBlock$;
$twig$Template$$.prototype.callMacro = $twig$Template$$.prototype.$callMacro$;
$goog$exportSymbol$$("twig.Markup", $twig$Markup$$);
})();
