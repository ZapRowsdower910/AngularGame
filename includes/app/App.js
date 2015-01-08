angular.module('Store', ['ngRoute', 'ngAnimate', 'Store.Admin'])
  .config(function($routeProvider){
    $routeProvider
      .when("/", {
        templateUrl:"Game.html",
        controller : "GameCtrl"
      })
      .when("/admin", {
        templateUrl : "Admin.html",
        controller : "AdminCtrl"
      })
      // .otherwise({
      //   redirectTo : "/"
      // });
  });