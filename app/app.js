var app = angular.module("aBook", ["ngRoute"])
.controller("AddressController", ["$scope", addressBook])
.constant("firebaseURL", "https://schafferaddressbook1.firebaseio.com/");

var abArray = [];
var abObject = {};


function addressBook($scope){


  $scope.submit = function(){
    
    abObject.name = $scope.name;
    abObject.street = $scope.street;
    abObject.city = $scope.city;
    abObject.state = $scope.state;
    abObject.zipCode = $scope.zipCode;
    abObject.pNum = $scope.pNum;
    console.log("abObject", abObject);
    abArray.push(abObject);
    console.log("abArray", abArray);
    $scope.clear();
  }

  $scope.clear = function(){
    $scope.name = "";
    $scope.street = "";
    $scope.city = "";
    $scope.state = "";
    $scope.zipCode = "";
    $scope.pNum = "";
    abObject = {};
  }
}

app.config(function($routeProvider){
  $routeProvider.
    when("/items/list",{
      templateUrl: "partials/item-list.html",
      controller: ""
    }).
    when("/items/new", {
      templateUrl: "partials/item-new.html",
      controller: ""
    }).
    when("/items/:itemId", {
        templateUrl: "partials/item-details.html",
        controller: ""
    }).
    when("/items/:itemId/edit", {
        templateUrl: "partials/item-new.html",
        controller: ""
    }).
    otherwise("/items/list");
});