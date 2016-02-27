
/* global angular */

var app = angular.module('arrayApp');

app.controller('arrayController', function($scope, arrayService){
   
   $scope.friendList = arrayService.myData;  //this is getting data correctly
   
  
    
    
});