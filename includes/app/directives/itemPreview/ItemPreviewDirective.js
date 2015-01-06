angular.module("Store")
  .directive("itempreview", function(){
    return {
      templateUrl : "includes/app/directives/itemPreview/ItemPreviewTemplate.html",
      scope : {
        item : "="
      },
      restrict : "AE",
      controller : function($scope){
        // $scope.item = {
        //   name : "",
        //   description:""
        // };
      },
      link : function(scope, el, attrs){
        scope.$watch(
          function(){return scope.item;}, 
          function(newVal, oldVal){

            if(newVal){

              var item = newVal.el,
                  offset = util.findPos(item[0]),
                  w = item.prop('width'),
                  h = item.prop('height'),
                  tipW = el.children()[0].offsetWidth,
                  adjustedL = offset[0] - tipW - 5,
                  adjustedT = offset[1] - 50;

              console.log(offset)

              el.css({'top' : adjustedT + 'px', 'left' : adjustedL + 'px'});

            }
          });
          
        }
      }

    }
  );

var util = {
  findPos : function(obj){
    var curleft = curtop = 0;

    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }

    return [curleft,curtop];
  }

};