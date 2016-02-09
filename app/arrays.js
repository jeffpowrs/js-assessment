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

    var safeIterationCount = arr.length; 
    var index;

    while (safeIterationCount > 1 && arr.length) {
      --safeIterationCount;
      while ((index = arr.indexOf(item)) !== -1) {
        arr.splice(index, 1);
      }
    }

    return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);

    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count : function(arr, item) {
    var itemCount = 0;

    arr.forEach(function(arrItem) {
      if (arrItem === item) {
        ++itemCount;
      }
    });

    return itemCount;
  },

  duplicates : function(arr) {

    var arrayItemCounts = countArrayValues(arr);
    var arrayOfDuplicates = extractDuplicates(arrayItemCounts);

    function valueToString(value) {
      var str;

      if (typeof value !== 'string') {
        str = value.toString();
      }
      else {
        itemStr = value;
      }

      return str;
    }

    function addToKeyObject(item, obj) {
      if (obj[item]) {
        obj[item]++;
      }
      else {
        obj[item] = 1;
      }

      return obj[item];
    }

    function countArrayValues(arr) {

      var arrKeyObject = {};

      arr.forEach(function(item) {

        var itemStr = valueToString(item);
        addToKeyObject(itemStr, arrKeyObject);

      });

      return arrKeyObject;
    };

    function extractDuplicates(object) {
      var arrayOfDuplicates = [];

      for (var key in object) {
        if (object[key] > 1) {
          arrayOfDuplicates
            .push(parseInt(key, 10));
        }
      }

      return arrayOfDuplicates;
    }

    return arrayOfDuplicates;

  },

  square : function(arr) {

    var squaredArray = arr.map(squareValue);

    function squareValue(value) {
      return value * value;
    }

    return squaredArray;

  },

  findAllOccurrences : function(arr, target) {
    var targetIndexes = [];

    arr.forEach(savePosition);

    function savePosition(arrItem, index) {
      if (arrItem === target) {
        targetIndexes.push(index);
      }
    }

    return targetIndexes;
  }
};
