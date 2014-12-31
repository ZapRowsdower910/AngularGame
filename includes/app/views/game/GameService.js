angular.module("Store")
  .constant("ITEMS_CONFIG", "includes/app/ItemData.js")
  .factory("GameService", function($rootScope, $http, $q, ITEMS_CONFIG){
    var service = this;

    var methods = {
      loadItemsConfig : function(){
        var dfd = $q.defer();

        $http.get(ITEMS_CONFIG).then(function(d){
          // TODO: mite need to check for success before parsing
          var data = d.data,
              formattedData = {
                items : [],
                merchant : [], 
                player : []
              };

          if(data.Items && data.Items.length){
            formattedData.items = data.Items;
            formattedData.merchant = methods.replaceWithObjects(data.Items, data.Merchant);
            formattedData.player = methods.replaceWithObjects(data.Items, data.Inventory);

          }

          dfd.resolve(formattedData);
        });

        return dfd.promise;
      },
      replaceWithObjects : function(itemList, idArray){

        var mappedItems = [];

        idArray.each(function(ref){
          
          var possibleItem = itemList.find(function(i){
            return i.id == ref;
          });

          if(possibleItem){
            mappedItems.push(possibleItem);
          }
        })

        return mappedItems;
      }
    };

    return methods;
  });