app.controller("ItemListCtrl", function($scope, itemStorage){
  $scope.items = [];

  itemStorage.getItemList().then(function(itemCollection){
    console.log("itemCollection from Promise", itemCollection);
    $scope.items = itemCollection;
  })


  $scope.itemDelete = function(itemId){
    itemStorage.deleteItem(itemId).then(function(response){
      itemStorage.getItemList().then(function(itemCollection){
        $scope.items = itemCollection;
      })
    })
  };

  $scope.inputChange = function(item){
    console.log("item", item);
    itemStorage.updateCompletedStatus(item)
      .then(function(response){
        console.log(response);

    })
  }

});