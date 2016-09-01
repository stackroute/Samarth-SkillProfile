console.log('in');
angular.module('sm-skillprofile')
    .controller('signupController', ['$scope', '$http',
        function($scope, $http) {
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
                $http({
                        method: "POST",
                        url: 'http://localhost:8081/user',
                        data: $scope.user,
                        dataType: "json",
                        'Content-Type': 'application/json'
                    })
                    .then(function success(data) {
                        $scope.user = data;
                        $scope.user = {};
                    })
            };
        }
    ]);
