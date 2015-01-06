angular.module("Store")
  .directive("items", function(){
    var controller = function($scope){


    };

    var linker = function(scope, el, attrs){

      scope.selectItem = function(e,itemObj, index){
        e.preventDefault();

        // select clicked item
        scope.current = itemObj;
      };

      scope.itemPreviewShow = function($e, itemObj){
        // console.log($event, itemObj);
        itemObj.el = angular.element($e.target);
        scope.preview = itemObj;
      };

      scope.itemPreviewHide = function($e, itemObj){
        // console.log($event, itemObj);
        scope.preview = undefined;
      };

    }

    return {
      restrict : "AE",
      scope : {
        "inventory" : "=",
        "current" : "=",
        "preview" : "="
      },
      link : linker,
      controller : controller,
      templateUrl : "includes/app/directives/items/ItemTemplate.html"
    }
  });