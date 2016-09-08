console.log('in');
angular.module('sm-skillprofile')
    .controller('signupController', ['$scope', '$http', 'signupFactory',

        function($scope, $http, signupFactory) {
            console.log('inq');

            $scope.add = function() {
                console.log('in');
                $scope.user = {
                    "name": $scope.name,
                    "phonenumber": $scope.phonenumber,
                    "email": $scope.email,
                    "Location": $scope.Location,
                    "password": $scope.password,
                    "Confirmpassword": $scope.Confirmpassword
                }
                signupFactory.signup($scope.user)
                    .then(function(data) {
                            console.log("data in contrller", data);
                            alert("insert");
                        },
                        function(data) {
                            $scope.error = data.error;
                        }
                    )
            }
        }
    ]);
