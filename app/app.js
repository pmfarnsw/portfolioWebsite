'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ngRoute',
  'portfolio.homePage',
  'portfolio.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/homePage'});
}]);
