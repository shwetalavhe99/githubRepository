var app = angular.module('myApp',[]);

/*app.config(function($routeProvider)
{
	$routeProvider
	.when("/",
	{
		templateUrl : "index.html"
		controller : "custCtrl"
	})
	
	.when("/add",
	{
		templateUrl : "add.html",
		controller : "addCtrl"
	});
	
});*/


app.controller('custCtrl',['$rootScope',function($rootScope)
{
	$rootScope.customers = [ 'Akshay',
						 'Darshan',
						'Pankaj',
						 'Tejas'];
}]);

app.controller('addCtrl',['$rootScope',function($rootScope)
{					
	$rootScope.addCust = function()
					{
						$rootScope.customers.push($rootScope.cust);
					}
}]);
						
						
						
