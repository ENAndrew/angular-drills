
var app = angular.module('myApp');

app.service('birdService', function($http){
    
   this.getBirds = function(){
       return $http({
           method: 'GET',
           url: 'http://bird-api.com/api/birds'
       })
               .then(function(result){
                   return result.data;
       });
   };
    
    
});