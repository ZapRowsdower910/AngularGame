angular.module("Store")
  .directive("items", function(){
    var controller = function($scope){

      $scope.activeIndex

    };

    var linker = function(scope, el, attrs){
      scope.selectItem = function(e,itemObj, index){
        e.preventDefault();

        console.log(scope)

        // Display currently active itemObj
        scope.current = itemObj;
        // Set index to activate the active class to show the click
        // was successful
        scope.activeIndex = index;
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
      templateUrl : "includes/app/items/ItemTemplate.html"
    }
  });