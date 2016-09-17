angular.module('sm-skillprofile')
    .factory('signupFactory', ['$http', '$q', function($http, $q) {
        var signupfact = {
            postsignup: function(user) {
                return $q(function(resolve, reject) {
                    console.log(user, "in factory post method");
                    $http.post('http://localhost:8081/user/signup/'+user.phonenumber ,user)
                        .then(function(res) {
                                console.log("response in factory", res);
                                resolve(res.data);
                            }, function(res) {
                                reject(res.data);
                            }

                        );
                });
            },
            getsignup: function(getuser) {
                return $q(function(resolve, reject) {
                    $http.get('http://localhost:8081/user/signup/' + getuser)
                        .then(function(res) {
                                console.log("response in factory", res);
                                resolve(res.data);
                            }, function(res) {
                                reject(res.data);
                            }

                        );
                });
            }

           
        }
        return signupfact;
    }]);
