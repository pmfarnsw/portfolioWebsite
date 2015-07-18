'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolio', [
  'ngRoute',
  'portfolio.about',
  'portfolio.contact',
  'portfolio.projects',
  'portfolio.services',
  'portfolio.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/about'});
}]);
