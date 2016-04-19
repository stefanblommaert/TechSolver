var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html'
          })
          .when('/services',{
                templateUrl: 'services.html'
          })
          .when('/contact',{
                templateUrl: 'contact.html'
          })
          .when('/portfolio',{
                templateUrl: 'portfolio.html'
          })
          .when('/blog',{
                templateUrl: 'blog.html'
          })
          .when('/other',{
                templateUrl: 'other.html'
          })
          .when('/login',{
                templateUrl: 'login.html'
          })
          .when('/register',{
          		templateUrl: 'register.html'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
