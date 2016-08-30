angular.module("sm-skillprofile")

   .factory("sidenavfactory", function($http) {
       
       return {

        fact: function() {

               return $http.get('http://localhost:8082/sidenav')
               .then(function successCallback(response) {
                  var res = response.data;

                  return res;

               });       
           }
       };
   });