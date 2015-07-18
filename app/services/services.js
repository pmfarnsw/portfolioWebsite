angular
    .module('portfolio.services', [])
    .factory('projectService', function ($http) {


        var projects ={};

        projects.getProjects = function(){

            return $http.get('/projects.json');
        };



        return projects;
    });
