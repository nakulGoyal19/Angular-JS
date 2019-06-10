// Code goes here
(function(){
  var app=angular.module("firstModule",[]);
  var mainController=function($scope,$http)
  {
    var onUserComplete=function(response){
      $scope.user=response.data
    };
    var onError=function(reason)
    {
      $scope.error="Could not fetch the error"
    };
    $scope.message="Angular-js Controllers and Module";
    $scope.search=function(username){
    $http.get("https://api.github.com/users/"+username).then(onUserComplete,onError);
    };
  };
  app.controller("mainController",mainController);
}());
