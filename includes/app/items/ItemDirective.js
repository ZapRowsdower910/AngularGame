angular.module("Store")
  .directive("item", function(){
    var controller = function($scope){

      $scope.active = undefined;

      $scope.selectItem = function(item){
        console.log("directive selected!", item);
        $scope.active = item;
      }

    };

    var linker = function(scope, el, attrs){
      console.log(el)
      el.on('click', function(e){
        e.preventDefault();

        console.log(this)
        if(el.hasClass('active')){
          console.log("removing active")
          el.css({
              border:"1px solid black"
            })
            .removeClass("active");
        } else {
          console.log("adding active")
          el.css({
              border:"1px solid yellow"
            })
            .addClass("active");  
          
        }
        
      });
    }

    return {
      restrict : "AE",
      scope : {
        "inventory" : "="
      },
      link : linker,
      controller : controller,
      templateUrl : "includes/app/items/ItemTemplate.html"
    }
  });