angular.module('sm-skillprofile')
    .factory('signupFactory', ['$http', '$q', function($http, $q) {
        var signupfact = {
            postsignup: function(user) {
                console.log("data in factory of signup", user);
                return $http({
                    'method': 'POST',
                    'url': 'http://localhost:8081/candidate/' + user.mobile,
                    'data': user,
                    'content-type': "application/json"
                }).then(function(res) {
                    return res;
                }, function(err) {
                    return err;

                });
            }
        }

        return signupfact;
    }]);
