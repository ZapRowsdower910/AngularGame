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
          name : "",
          description: ""
        }
      },
      link : function(scope, el, attr){

      }
    };
  });