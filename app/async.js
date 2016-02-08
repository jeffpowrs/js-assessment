exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

    return new Promise(
      function(resolve, reject) {
        var error;

        if (value) {
          resolve(value);
        }
        else {
          error = new Error('The provided value was false.');
          reject(error);
        }
      }
    );

  },

  manipulateRemoteData : function(url) {

    function createReqError(_this, req) {
      var error = new Error({
        status: _this.status,
        statusText: xhr.statusText
      });

      return error;
    }

    function makeRequest(method, url) {
      return new Promise(
        function (resolve, reject) {
          var xhr = new XMLHttpRequest();

          xhr.open(method, url);

          xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
            } else {
              reject(createReqError(this, xhr));
            }
          };

          xhr.onerror = function () {
            reject(createReqError(this, xhr));
          };

          xhr.send();
        }
      );
    }

    function jsonStringToObject(jsonString) {
      return new Promise(
        function (resolve, reject) {
          var error;
          var jsonObject;

          if (typeof jsonString !== 'string') {
            error = new Error('The argument supplied should be a string, but it was ${typeof jsonString}.')

            reject(error);
          }
          else {
            jsonObject = JSON.parse(jsonString);

            resolve(jsonObject);
          }
        }
      );
    }

    function sortPeopleByName(json) {
      return new Promise(
        function (resolve, reject) {
          var error;
          var people = json.people;
          var nameArray;
          var sortedNameArray;

          if (typeof json !== 'object') {
            error = new Error('The argument supplied should be an object, but it was ${typeof json}.')

            reject(error);
          }
          else {
            nameArray = people.map(function(person) {
              return person.name;
            });

            sortedNameArray = nameArray.sort();

            resolve(sortedNameArray);
          }
        }
      );
    }

    return new Promise(
      function (resolve, reject) {
        makeRequest('GET', url)
          .then(jsonStringToObject)
          .then(sortPeopleByName)
          .then(resolve)
          .catch(reject);
      }
    );

  }
};
