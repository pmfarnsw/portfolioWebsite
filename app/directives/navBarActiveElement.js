/**
 * directive will update the nav bar active link based on the location path
 *
 */

angular.module('portfolio')
    .directive("nbrActiveElement",['$location',function($location){
       return {
           restrict: 'A',
           link: function(scope,element,attrs){
               scope.$location = $location;
               scope.$watch('$location.path()',function(pathLocation){

                    (attrs.nbrActiveElement == pathLocation) ? element.addClass("active"):element.removeClass("active");
               })

           }


       }
    }]);

