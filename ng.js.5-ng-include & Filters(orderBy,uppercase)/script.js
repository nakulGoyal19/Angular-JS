// Code goes here
(function(){
  var app=angular.module("firstModule",[]);
  var mainController=function($scope,$http)
  {
    var onUserComplete=function(response){
      $scope.user=response.data;
      $http.get($scope.user.repos_url).then(onRepos,onError);
    };
    var onRepos=function(response){
      $scope.repos=response.data;
    };
    $scope.repoSortOrder="+name";
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
