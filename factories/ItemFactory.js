app.factory("itemStorage", function($q, $http, firebaseURL){
  
  var getItemList = function(){
      let items = [];
      return $q(function(resolve, reject){
        $http.get(firebaseURL + "address.json")
          .success(function(itemObject){
            var itemCollection = itemObject;
            // var itemCollection = itemObject.items;
            Object.keys(itemCollection).forEach(function(key){
              itemCollection[key].id=key;
              items.push(itemCollection[key]);
            })
            console.log(items);
            resolve(items);
          }, function(error){
            reject(error);
      })
    })}

    var deleteItem = function(itemId){
      return $q(function(resolve, reject){
        $http
          .delete(firebaseURL + "address/" + itemId + ".json")
          .success(function(objectFromFirebase){
            resolve(objectFromFirebase)
          })
      })
    }
    
    var postNewItem = function(newItem){
      return $q(function(resolve, reject) {
        $http.post(
          firebaseURL + "address.json",
          JSON.stringify({
            assignedTo: newItem.assignedTo,
            dependencies: newItem.dependencies,
            dueDate: newItem.dueDate,
            isCompleted: newItem.isCompleted,
            location: newItem.location,
            task: newItem.task,
            urgency: newItem.urgency
          })
        )
        .success(
          function(objectFromFirebase){
            resolve(objectFromFirebase);
          }
        );
      });
    }

    var getSingleItem = function(itemId){
      return $q(function(resolve, reject){
        $http.get(firebaseURL + "address/" + itemId + ".json")
          .success(function(itemObject){
            resolve(itemObject);
          })
          .error(function(error){
            reject(error);
          });
      });
    }

     var updateItem = function(itemId, newItem){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "address/" + itemId + ".json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

var updateCompletedStatus = function(newItem){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "address/" + newItem.id + ".json",
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    dependencies: newItem.dependencies,
                    dueDate: newItem.dueDate,
                    isCompleted: newItem.isCompleted,
                    location: newItem.location,
                    task: newItem.task,
                    urgency: newItem.urgency
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

    return {updateCompletedStatus:updateCompletedStatus, updateItem:updateItem, getSingleItem:getSingleItem, getItemList:getItemList, deleteItem:deleteItem, postNewItem: postNewItem}
})