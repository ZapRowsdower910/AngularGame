// , PlayerCtrl, MerchantCtrl
angular.module('Store')
  .controller("GameCtrl", function($scope, GameService){
    $scope.items = [];
    $scope.merchant = {
      inventory : []
    };
    $scope.player = {
      inventory : []
    };

    $scope.info = {
      state : true,
      current : undefined
    };

    $scope.activePreview = {
      name : "",
      description: ""
    };


    // TODO merge buy and sell methods
    $scope.exchangeItem = function(from, to){
      if($scope.info.current && $scope.info.current.id){
        // Move item
        from.remove($scope.info.current);
        to.push($scope.info.current);
        // Clear active item
        $scope.info.current = undefined;
        // Display success msg
        $scope.$parent.notify = {
          type : 'success',
          msg : "totally worked!"
        }

      } else {
        // Display err msg
        $scope.$parent.notify = {
          type : 'error',
          msg : "Select an item first!"
        }        
      }
    }

    GameService.loadItemsConfig().then(function(d){
      console.log("formatted data:", d);
      $scope.items = d.items;
      $scope.merchant.inventory = d.merchant;
      $scope.player.inventory = d.player;
    });

});