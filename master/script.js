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

          		//templateUrl: 'login.html'
          		
          });

			
			
});

app.controller('cfgController',function($scope){

      $scope.FBLogin = function(){
      	FB.login(function(response) {
    	if (response.authResponse) {
     		console.log('Welcome!  Fetching your information.... ');
     		FB.api('/me', function(response) {
       		console.log('Good to see you, ' + response.name + '.');
       		console.log(response);
       		
       		var accessToken = FB.getAuthResponse();
       		console.log(accessToken);
     	});
     	
    	} else {
     		console.log('User cancelled login or did not fully authorize.');
    	}
}, {scope: 'email'});
      };

});

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1526991634270394',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));