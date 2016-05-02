var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){

      $routeProvider
          .when('/',{
                templateUrl: 'home.html'
          })
          .when('/about',{
                templateUrl: 'about.html',
                needAuth: true               
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
                templateUrl: 'chat/chat1.html'
          })
          .when('/login',{
                templateUrl: 'login.html',
                public: true
          })
          .when('/register',{
          		templateUrl: 'register.html',
          		public: true

          		//templateUrl: 'login.html'
          		
          })
          .when('/account',{
          		templateUrl: 'account.html',
          })
          .otherwise({
          	redirectTo: '/'
          });

			
			
});


window.fbAsyncInit = function() {
    FB.init({
      appId      : '1526991634270394',
      xfbml      : true,
      version    : 'v2.5',
      status	 : true
    });
  };
  

app.controller('cfgController',function($scope){
	

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
       		
       		var accessToken = FB.getAuthResponse();
       		console.log(accessToken);
       		
       		/*$scope.$storage = $localStorage.$default({
       			x : accessToken
       		});*/
     	});
     	
    	} else {
     		console.log('User cancelled login or did not fully authorize.');
    	}
    	
		}, {scope: 'email'});
      
      FB.getLoginStatus(function(response) {
  		if (response.status === 'connected') {
    		// the user is logged in and has authenticated your
    		// app, and response.authResponse supplies
    		// the user's ID, a valid access token, a signed
    		// request, and the time the access token 
    		// and signed request each expire
    		console.log('User is logged in');
    		
    		var uid = response.authResponse.userID;
    		var accessToken = response.authResponse.accessToken;
    		
  		} else if (response.status === 'not_authorized') {
    		// the user is logged in to Facebook, 
    		// but has not authenticated your app
  		} else {
    		// the user isn't logged in to Facebook.
  		}
 	}, true);
    
    	FB.logout(function(response) {
    		var accessToken = FB.getAuthResponse();
			console.log('User is logged out');
  			// user is now logged out
		});
    	
     };
     
     

});


  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=1526991634270394";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   