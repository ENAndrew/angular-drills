
var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    
    $stateProvider
            .state('home', {
                templateUrl: 'index.html',
                url: '/'
            })
            .state('signUp', {
                templateUrl: 'signUp.html',
                url: '/signUp'
            })
            .state('details', {
                templateUrl: 'details.html',
                url: '/details'
            });
    
    $urlRouterProvider.otherwise('/');
    
});