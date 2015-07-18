'use strict';

angular.module('portfolio.projects', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'partials/projects',
            controller: 'ProjectsCtrl'
        });
    }])

    .controller('ProjectsCtrl', ['projectService','$scope',function(projectService,$scope) {

        $scope.getProjects = function(){

            projectService.getProjects().success(function(data){
                console.log(data.projects[0].title);
                $scope.projects = data.projects;
                console.log($scope.projects.length);

            });
        };

        $scope.getProjects();










    }]);