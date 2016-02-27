

var app = angular.module('apiApp');

app.service('apiService', function($http){
    
    this.findSomeBirds = function(){
        return $http({
            method: 'GET',
            url: 'http://bird-api.com/api/birds'
        })
                .then(function(response){
                    return(response.data);
        });

    };
    
    
    
});