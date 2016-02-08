exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // The function `fn` is called within the 
    // context of the object `obj'.

    return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {

    // New updated constructor... 

    /*
      constructor = function(name) {
        this.greeting = greeting;
        // The greeting is set.

        constructor.apply(this, arguments);
        // The previous constructor is called in
        // the context of `this`.

        return this;
      };
    */


    constructor.prototype.greeting = greeting;


  },

  iterate : function(obj) {

    var propArray = [];
    var isOwnProp = false;

    for (var prop in obj) {
      isOwnProp = obj.hasOwnProperty(prop);

      if (isOwnProp) {
        // The property belongs to `this` object.
        propArray.push(`${prop}: ${obj[prop]}`);
        // The key value pair wsa added to the array.
      }
    }

    return propArray;
  }
};
