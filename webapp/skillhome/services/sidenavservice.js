angular.module("sm-skillprofile")

   .factory("sidenavfactory", function($http) {
       
       return {

        fact: function() {

               return $http.get('api/sidenav')
               .then(function successCallback(response) {
                  var res = response.data;

                  return res;

               });       
           }
       };
   });