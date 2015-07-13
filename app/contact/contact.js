'use strict';

angular.module('portfolio.contact', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'partials/contact',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', [function() {

    }]);