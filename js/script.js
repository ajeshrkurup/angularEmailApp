
var app = angular.module("emailApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    
    'use strict';
    
    $routeProvider
        .when('/inbox', {
            templateUrl: 'views/inbox.html',
            controller: 'InboxCtrl',
            controllerAs: 'inbox'
        })
        .when('inbox/email/:id', {
            templateUrl: 'views/email.html',
            controller: 'EmailCtrl',
            controllerAs: 'email'
        })
        .otherwise({
            redirectTo: '/inbox'
        });
    
}]);

