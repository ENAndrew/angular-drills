
var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    
    $stateProvider
            .state('home', {
                templateUrl: 'homeTmpl.html',
                url: '/'
            })
            .state('signUp', {
                templateUrl: 'signUp.html',
                url: '/signUp'
            })
            .state('details', {
                templateUrl: 'details.html',
                url: '/details',
                controller: 'birdController',
                resolve: {
                    bird: function(birdService){
                        return birdService.getBirds();
                    }
                }
            });
    
    $urlRouterProvider.otherwise('/');
    
});