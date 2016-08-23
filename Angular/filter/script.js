// Code goes here
angular.module('bindExample',[])
  .controller('myController',['$scope',function($scope)
  {
    $scope.friends = [{name : 'shweta',phone : '11111',price : '50'},
                      {name : 'pooja',phone : '22222',price : '70'},
                      {name : 'richa',phone : '333333', price : '80'}];
    
    
  }]);
