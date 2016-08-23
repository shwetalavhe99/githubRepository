// Code goes here
var app = angular.module('bindExample',[ngRoute]);
  
app.config(function($routeProvider)
{
    $routeProvider
    .when("/",{
        templateUrl : "index.html",
    })
    
     .when("/london",{
        templateUrl : "london.html",
        controller : "londonCtrl"
    })
    
     .when("/paris",{
        templateUrl : "paris.html",
         controller : "parisCtrl"
    });
	

  
}


);



app.controller("londonCtrl",function($scope)
{
  $scope.msg = "I love london";
});


app.controller("parisCtrl",function($scope)
{
  $scope.msg = "I love paris";
});