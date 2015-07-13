'use strict';

angular.module('portfolio.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'partials/about',
    controller: 'AboutCtrl'
  });
}])

.controller('AboutCtrl', [function() {

}]);