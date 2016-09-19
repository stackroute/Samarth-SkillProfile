angular.module('sm-skillprofile')
    .controller('signinController', ['$scope', '$http', '$state', 'signinFactory', '$rootScope', 'datagenerate', 'localStorageService',

        function($scope, $http, $state, signinFactory, $rootScope, datagenerate, localStorageService) {

            $scope.loadLangData = function(lang) {
                datagenerate.getjson("section", lang).then(function(result) {
                    // console.log(JSON.stringify(result));
                    $scope.data = result;
                    // console.log("result",result.signin);


                }); //end datagenerate
            }

             $scope.loadLangData(getItem("lang"));
            function getItem(key) {
                return localStorageService.get(key);
            }

            $rootScope.$on("lang_changed", function(event, data) {
                console.log("User switch to language ", data.language);
                $scope.loadLangData(data.language);

            });




            $scope.login = function() {
                    $scope.user = {
                        "phonenumber": $scope.phonenumber,
                        "password": $scope.password

                    }
                    console.log($scope.user.phonenumber);
                    signinFactory.postsignin($scope.user)
                        .then(function(data) {
                                console.log("data in contrller", data);
                            },
                            function(data) {
                                $scope.error = data.error;
                                alert("error");
                            });

                    signinFactory.getsignin($scope.user.phonenumber)
                        .then(function(data) {
                                console.log("data in contrller", data);
                                if (data.length == 0) {
                                    alert("you are not registered");
                                } else {
                                    $state.go("skillprofile.skillhome");
                                }
                            },

                            function(data) {
                                $scope.error = data.error;
                                alert("error");
                            });
                },
                $scope.edit = function() {
                    $scope.editUser = {
                        username: $scope.username,
                        password: $scope.new_password
                    }

                    signinFactory.editsignin($scope.editUser)

                    .then(function(data) {
                            console.log("data in contrller", data);
                        },

                        function(data) {
                            $scope.error = data.error;
                            alert("error");
                        });


                }

        }
    ]);
