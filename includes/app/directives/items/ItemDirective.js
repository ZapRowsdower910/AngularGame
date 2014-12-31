angular.module("Store")
  .directive("items", function(){
    var controller = function($scope){


    };

    var linker = function(scope, el, attrs){
      scope.selectItem = function(e,itemObj, index){
        e.preventDefault();

        // select clicked item
        scope.current = itemObj;
     } 
    }

    return {
      restrict : "AE",
      scope : {
        "inventory" : "=",
        "current" : "="
      },
      link : linker,
      controller : controller,
      templateUrl : "includes/app/directives/items/ItemTemplate.html"
    }
  });