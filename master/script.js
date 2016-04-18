var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          })
          .when('/login',{
          		templateUrl: 'login.html'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
