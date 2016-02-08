exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    var length = arr.length;
    var itemIndex = -1;
    var isItem = false;

    for (var i = 0; i < length; ++i) {
      isItem = arr[i] === item;

      if (isItem) {
        // This is the item being searched for.
        itemIndex = i;
        break;
      }
    }

    return itemIndex;

  },

  sum : function(arr) {

    var total = arr.reduce(_add);

    return total;

    // Below function will be hoisted!

    // This is bad but just trying to display my
    // knowldge of Javascript! :0)

    function _add(prevVal, nextVal) {
      return prevVal + nextVal;
    };

  },

  remove : function(arr, item) {

    var length = arr.length;
    var newArray = [];
    var isItem = false;
    var currentItem;

    for (var i = 0; i < length; ++i) {

      currentItem = arr[i];
      isItem = currentItem === item;

      if (! isItem) {
        // This is not the value to be
        // removed fro the array.
        newArray.push(currentItem);
      }
    }

    // A new array has been created that does
    // not contain the provided value.

    return newArray;

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
