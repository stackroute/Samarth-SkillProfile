 angular.module('sm-skillprofile')
     .controller('signupController', ['$scope','$http',
        function($scope,$http) {
         $scope.add = function() {
             $scope.user = {
                 "name": $scope.user.name,
                 "phonenumber": $scope.user.phonenumber,
                 "email": $scope.user.email,
                 "Location": $scope.user.Location,
                 "password": $scope.user.password,
                 "Confirmpassword": $scope.user.Confirmpassword
             }
             $http({
                     method: "POST",
                     url: 'http://localhost:8080/users1',
                     data: $scope.user,
                     dataType: "json",
                     'Content-Type': 'application/json'
                 })
                 .then(function success(data) {

                     $scope.user = data;
                     $scope.user = {};
                 })
         };
     }]);
