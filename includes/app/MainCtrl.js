// , PlayerCtrl, MerchantCtrl
angular.module('Store')
  .controller("MainCtrl", function($scope, MainService){
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

    $scope.otherStuffChange = function(s){
      console.log(s);
    };

    $scope.setCurrentItem = function(item){
      $scope.currentItem = item;
    };

    $scope.createItem = function(){
      console.log("Adding item..")
      $scope.items.push({
        name : 'new',
        description : 'some stuff'
      });
    };

    // TODO merge buy and sell methods
    $scope.buyItem = function(){
      var itemId = $scope.info.current.id,
          activeItem;

      $scope.merchant.inventory.remove($scope.info.current);
      $scope.player.inventory.push($scope.info.current);

    }

    $scope.sellItem = function(){
      var itemId = $scope.info.current.id,
          activeItem;
          
      $scope.player.inventory.remove($scope.info.current);
      $scope.merchant.inventory.push($scope.info.current);

    }

    MainService.loadItemsConfig().then(function(d){
      console.log("formatted data:", d);
      $scope.items = d.items;
      $scope.merchant.inventory = d.merchant;
      $scope.player.inventory = d.player;
    });

    $scope.selectItem = function(item){
      console.log("mainctrl selected!", item);
      $scope.info.current = item;
    }

});