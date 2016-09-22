angular.module('sm-skillprofile')
    .factory('signinFactory', ['$http', '$q', function($http, $q) {
        var signinfact = {
            postsignin: function(getuser) {
                console.log(getuser);
                return $q(function(resolve, reject) {
                    $http.post('/auth/', getuser)
                        .then(function(res) {
                                console.log("response in factory", res);
                                resolve(res.data);
                            }, function(res) {
                                return (res.data);
                            });
                });
            }
        }
        return signinfact;
    }]);
