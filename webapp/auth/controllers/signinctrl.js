angular.module('sm-skillprofile')
    .controller('signinController', ['$scope', '$http','$state','signinFactory',

        function($scope, $http,$state, signinFactory) {
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
                            if(data.length==0){
                            alert("you are not registered");
                        }else{
                            $state.go("skillprofile.skillhome");
                        }
                            },
                           
                        function(data) {
                            $scope.error = data.error;
                            alert("error");
                        });
                },
                     $scope.edit = function() {
                        $scope.editUser={
                            username:$scope.username,
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
        
   } ]);
