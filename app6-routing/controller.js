var app = angular.module('myApp');

app.controller('birdController', function($scope, birdService){
    
    $scope.birdList = [];
    
    $scope.getBirds = function(){
        birdService.getBirds()
                .then(function(result){
                    $scope.birdList = result;
        });
    };
    
    $scope.getBirds();
    
    
});