angular.module("Store")
  .directive("storyboard", function(){

    return {
      restirct : "AE",
      templateUrl: "includes/app/directives/storyboard/StoryBoardTemplate.html",
      scope: {
        "current":"="
      },
      controller : function($scope){
        $scope.current = {
          name : "default n",
          description: "default d"
        }
      },
      link : function(scope, el, attr){

      }
    };
  });