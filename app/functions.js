exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(strInner) {
      return `${str}, ${strInner}`;
    };
  },

  makeClosures : function(arr, fn) {
    var arr = [];


  },

  partial : function(fn, str1, str2) {

    var str = fn(str1, str2);

    return function(str3) {
      return `${str}${str3}`;
    }

  },

  useArguments : function() {

    var args = Array.prototype.slice.call(arguments);
    var total = args.reduce(_add);

    function _add(prevVal, nextVal) {
      return prevVal + nextVal;
    };

    return total;

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
