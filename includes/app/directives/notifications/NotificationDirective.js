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
        if(scope.type != "none"){
          $timeout(function(){
            scope.type = 'none';
            scope.msg = '';
          }, 5000);
        }
      }
    }

  });