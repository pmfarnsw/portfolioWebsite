'use strict';

angular.module('portfolio.homePage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/homePage', {
    templateUrl: 'partials/homePage',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);