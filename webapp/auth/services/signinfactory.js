angular.module('sm-skillprofile')
   .factory('signinFactory', ['$http', '$q', function($http, $q) {
       var signinfact = {
           postsignin: function(user) {
               return $q(function(resolve, reject) {
                   console.log(user, "in factory post method");
                   $http.post('/auth/signin' ,user)

                   .then(function(res) {
                           console.log("response in factory", res);
                           resolve(res.data);
                       }, function(res) {
                           reject(res.data);
                       }

                   );
               });
           },
           getsignin: function(edituser) {
               return $q(function(resolve, reject) {
                   console.log(edituser, "in factory getmethod");
                   $http.get('/auth/signin/' + edituser)

                   .then(function(res) {
                           console.log("response in factory", res);
                           resolve(res.data);
                       }, function(res) {
                           reject(res.data);
                       }

                   );
               });
           },
            editsignin: function(edituser) {
               return $q(function(resolve, reject) {
                   console.log(edituser, "in factory patch method");
                   $http.patch('/auth/signin/'+edituser.password,edituser)

                   .then(function(res) {
                           console.log("response in factory", res);
                           resolve(res.data);
                       }, function(res) {
                           reject(res.data);
                       }

                   );
               });
           },
       }
       return signinfact;
   }]);