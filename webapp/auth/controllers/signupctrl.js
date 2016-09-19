angular.module('sm-skillprofile')
    .controller('signupController', ['$scope', '$http', 'signupFactory', '$rootScope', 'datagenerate', 'localStorageService',

        function($scope, $http, signupFactory, $rootScope, datagenerate, localStorageService) {

             $scope.loadLangData = function(lang) {
                datagenerate.getjson("section", lang).then(function(result) {
                    // console.log(JSON.stringify(result));
                    $scope.data = result;
                    console.log("result",result);


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

            $scope.add = function() {
                 $scope.user = {
                    "name": $scope.name,
                    "phonenumber": $scope.phonenumber,
                    "email": $scope.email
                    // "Location": $scope.Location,
                    // "password": $scope.password,
                    // "Confirmpassword": $scope.Confirmpassword
                }
                console.log($scope.user);
                signupFactory.postsignup($scope.user)

                    .then(function(data) {
                            console.log("data in contrller", data);
                             // console.log($scope.user,"below favt func");
                            alert($scope.name + "successfully created account");
                        },
                        function(data) {
                            $scope.error = data.error;
                        })

                    signupFactory.getsignup($scope.user.phonenumber)
                    .then(function(data) {
                            console.log("data in contrller", data);
                           
                        },
                        function(data) {
                            $scope.error = data.error;
                        })
                    
            }
        }
    ]);
