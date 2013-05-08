/**
*  VERSION 0.2 (original author => siegfried.ehret@gmail.com)
*  MODIFIED BY => jaysmith024@gmail.com
*
*  This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 United States License.
*/
var json2xml = (function (my, undefined) {
  "use strict";
  var tag = function(name, options) {
    options = options || {};
    return "<"+(options.closing ? "/" : "")+name+">";
  };
  var exports = {
    convert:function(obj, rootname) {
      var xml = "";
      if(typeof obj == "object") {
          for (var i in obj) {
            if(obj.hasOwnProperty(i)){
              var value = obj[i], type = typeof value;
              if (value instanceof Array && type == 'object') {
                xml += tag(i);
                for (var j=0; j<=value.length-1; j++) {
                  xml += tag("item")+exports.convert(value[j])+tag("item",{closing:1});
                }
                xml += tag(i,{closing:1})
              } else if (value instanceof Object && type == 'object') {
                xml += tag(i)+exports.convert(value)+tag(i,{closing:1});
              } else {
                xml += tag(i)+value+tag(i,{closing:1});
              }
            }
          }
      } else {
        xml += obj;
      }
      return rootname ? tag(rootname) + xml + tag(rootname,{closing:1}) : xml;
    }
  };
  return exports;
})(json2xml || {});
