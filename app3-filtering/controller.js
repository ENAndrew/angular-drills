var app = angular.module('myApp');

app.controller('myController', function($scope, myService){
    
    $scope.slaveList = myService.data;
    
});