angular.module("Store")
  .directive("notifications", function($timeout){

    return {
      restrict : "AE",
      scope : {
        "type" : "=",
        "msg" : "="
      },
      templateUrl : "includes/app/directives/notifications/NotificationTemplate.html",
      controller : function($scope){
        $scope.type="success";
        $scope.msg="game loaded";
      },
      link : function(scope, el, attrs){
        scope.$watch(
          function(){return scope.msg;}, 
          function(newVal, oldVal){

            if(newVal){
              $timeout(function(){
                scope.type = 'none';
                scope.msg = '';
              }, 5000);
            }

        });

      }
    }

  });