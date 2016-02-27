
var app = angular.module('apiApp');

app.controller('apiController', function($scope, apiService){
    
    $scope.allBirds = [];
    
    $scope.getBirds = function(){
        apiService.findSomeBirds()
                .then(function(result){
                    $scope.allBirds = result;
                    console.log($scope.allBirds);
        });
    };
    
});