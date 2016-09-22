angular.module('sm-skillprofile')

.controller('signinController', ['$scope', '$http', '$state', 'signinFactory', 'signupFactory', '$rootScope', 'datagenerate', 'localStorageService', '$window',

    function($scope, $http, $state, signinFactory, signupFactory, $rootScope, datagenerate, localStorageService, $window) {

        $scope.loadLangData = function(lang) {
            datagenerate.getjson("section", lang).then(function(result) {

                $scope.data = result;

            });
        }

        $scope.loadLangData(getItem("lang"));

        function getItem(key) {
            return localStorageService.get(key);
        }

        $rootScope.$on("lang_changed", function(event, data) {
            console.log("User switch to language ", data.language);
            $scope.loadLangData(data.language);

        });
        $scope.createUser = function() {
                $scope.user = {

                    "name": $scope.name,
                    "phonenumber": $scope.phonenumber,
                    "email": $scope.email,
                    "password": $scope.password

                }

                signupFactory.postsignup($scope.user)
                    .then(function(data) {
                            console.log("data in contrller of signup", data);

                            $scope.message = data.data.message;
                        },
                        function(data) {
                            $scope.error = data.error;
                        })
            },



            $scope.login = function() {

                $scope.user = {
                    "phonenumber": $scope.phonenumber,
                    "password": $scope.password

                }
                signinFactory.postsignin($scope.user)
                    .then(function(data) {
                            console.log("data in contrller", data);
                            $scope.error = data.error;

                            $scope.success = data.success;

                            localStorageService.set('JWT', data.token);
                            var token = localStorageService.get('JWT');
                            $http.defaults.headers.common.Authorization = data.token;

                            if (token == data.token && $scope.success == true) {
                                console.log("token", token + "data.token", data.token)
                                $state.go("skillprofile.skillhome");
                            } else {
                                $state.go("skillprofile.signin");
                            }
                        },
                        function(data) {
                            $scope.error = data.error;

                        })
            }



    }

]);
