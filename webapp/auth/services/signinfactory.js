angular.module('sm-skillprofile')
    .factory('signinFactory', ['$rootScope', '$http', '$q', function($rootScope, $http, $q) {
        var signinfact = {
            postsignin: function(postuser) {
                console.log(postuser);

                return $q(function(resolve, reject) {
                    $http.post('/user/', postuser)
                        .then(function(res) {
                            console.log("Inside signin factory", res)
                                //$rootScope.candidateid = res.data.data[0].username;
                                //console.log("Candidateid from signin factory=", $rootScope.candidateid);
                            resolve(res.data);
                        }, function(res) {
                            return (res.data);
                        });
                });
            },
            getsignin: function(getuser) {
                console.log(getuser);

                return $q(function(resolve, reject) {
                    $http.post('/auth/', getuser)
                        .then(function(res) {
                            console.log("Inside signin factory", res)
                                //$rootScope.candidateid = res.data.data[0].username;
                                //console.log("Candidateid from signin factory=", $rootScope.candidateid);
                            resolve(res.data);
                        }, function(res) {
                            return (res.data);
                        });
                });
            },
        }
        return signinfact;
    }]);
