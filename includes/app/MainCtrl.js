// , PlayerCtrl, MerchantCtrl
angular.module('Store')
  .controller("MainCtrl", function($scope){
    $scope.notify = {
      type: "none",
      msg: ""
    };
    // $scope.items = [];
    // $scope.merchant = {
    //   inventory : []
    // };
    // $scope.player = {
    //   inventory : []
    // };

    // GameService.loadItemsConfig().then(function(d){
    //   console.log("formatted data:", d);
    //   $scope.items = d.items;
    //   $scope.merchant.inventory = d.merchant;
    //   $scope.player.inventory = d.player;
    // });



});