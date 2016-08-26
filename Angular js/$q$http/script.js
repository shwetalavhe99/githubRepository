
var app = angular.module("app", []);

app.service("githubService", function($http, $q) {

  var deferred = $q.defer();

  this.getAccount = function() {
    return $http.get('https://api.github.com/users/CybageManthan')
      .then(function(response) {
        // promise is fulfilled
        deferred.resolve(response.data);
        return deferred.promise;
      }, function(response) {
        // the following line rejects the promise 
        deferred.reject(response);
        return deferred.promise;
      });
  };
});

app.controller("promiseController", function($scope, $q, githubService) {

  githubService.getAccount()
    .then(
      function(result) {
        // promise was fullfilled (regardless of outcome)
        // checks for information will be peformed here
        $scope.account = result;
      },
      function(error) {
        // handle errors here
        console.log(error.statusText);
      }
    );
});