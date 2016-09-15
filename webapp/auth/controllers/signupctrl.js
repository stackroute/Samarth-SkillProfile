angular.module('sm-skillprofile')
    .controller('signupController', ['$scope', '$http', 'signupFactory',

        function($scope, $http, signupFactory) {

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
