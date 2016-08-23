

var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope',function($scope)
{
	$scope.msg = 'Shweta. Welcome to manual Bootstrapping!!!!';
}]);

angular.element(document).ready(function(){
	angular.bootstrap(document,['myApp']);
});