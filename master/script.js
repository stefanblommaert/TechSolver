var app=angular.module('single-page-app',['ngRoute']);

var accessChat = undefined;

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1526991634270394',
      xfbml      : true,
      version    : 'v2.5',
      status	 : true
    });
};

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=1526991634270394";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   

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
          .when('/chat',{
          	
          		templateUrl: 'chat.html',
          		controller: 'chatController',
          		resolve: {
      				accessChat: ['$q', function($q) {
        			return accessChat ? accessChat : $q.reject('ok');
      				}]
    			}
                
          })
          .when('/login',{
          		templateUrl: 'login.html'
          		
          	   
          })
          .when('/register',{
          		templateUrl: 'register.html'
          		
          })
		  
		  .when('/stripe',{
          		templateUrl: 'stripe.html'
		  })	
          
		  .when('/account',{
          		templateUrl: 'account.html',
              controller: 'MainController'
          })
          
          //Default
          .otherwise({
          	redirectTo: '/'
          });
  
			
});

app.controller('MainController', function($scope, $route, $routeParams, $location, $http) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;

     $scope.FBLogout = function(){
      FB.logout(function(response) {
        var accessLogout = FB.getAuthResponse();

        if ($scope.error === false) {

          $http.post('', {}).success(function() {
            //$location.path("/");

            window.location.replace("http://localhost/TechSolver.git/master/index.html#/");

          }).error(function(data){
            $location.path("/login");

          });
          
          

          console.log('User is logged out');
        // user is now logged out

        }else{
          $location.path("/login");
        }
      
        
      
    });
     };
 })

 app.controller('chatController', function($scope, $routeParams) {
     $scope.name = "chatController";
     $scope.params = $routeParams;

     var file = "test.json";

     $scope.delFile = function(){
        console.log("We're in.");

        var delRef = "https://firebasestorage.googleapis.com/v0/b/resplendent-inferno-9134.appspot.com/o/test%2Ftest.json"

        delRef.remove();
        
     }
     
 })



app.controller('cfgController',function($scope, $http, $location){
	
     $scope.FBLogin = function(){
      	FB.login(function(response) {
    	 if (response.authResponse) {
     		console.log('Welcome!  Fetching your information.... ');
     		FB.api('/me', function(response) {
     			
       		console.log('Good to see you, ' + response.name + '.');
       		console.log(response);
       		$scope.$apply(function () {
       			$scope.response = response;
       		});
       		
       		var access = FB.getAuthResponse();
       		console.log(access);
       		console.log(access.accessToken);
       		console.log(access.expiresIn);
       		
       		accessChat = 'ok';

          $scope.error = false;

          $http.post('', {}).success(function() {
            $location.path("/account");

            //window.location.replace("http://localhost/TechSolver.git/master/index.html#/");

          }).error(function(data){
            $location.path("/login");

          });
       		
     	});
     	
     	} else {
     		console.log('User cancelled login or did not fully authorize.');
     		console.log(response.authResponse);
    	}
    	
		}, {scope:'email'});
      
      FB.getLoginStatus(function(response) {
  		if (response && response.status === 'connected') {
    		// the user is logged in and has authenticated your
    		// app, and response.authResponse supplies
    		// the user's ID, a valid access token, a signed
    		// request, and the time the access token 
    		// and signed request each expire
    		console.log('User is logged in');
    		
    		var uid = response.authResponse.userID;
    		var accessToken = response.authResponse.accessToken;
    		
  		} else if (response && response.status === 'not_authorized') {
    		// the user is logged in to Facebook, 
    		// but has not authenticated your app
    		console.log('user isnt authorized')
  		} else {
    		// the user isn't logged in to Facebook.
    		console.log('user isnt logged in');

        $scope.error = true;
  		}
 	}, true);
    	
     };
     
     

});

      
   