angular.module('Store', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl:"Game.html",
        controller : "MainCtrl"
      })
      .when("/admin", {
        templateUrl : "Admin.html",
        controller : "AdminCtrl"
      })
      // .otherwise({
      //   redirectTo : "/"
      // });
  });