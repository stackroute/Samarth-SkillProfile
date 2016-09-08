angular.module('sm-skillprofile')
.factory('signupFactory',['$http','$q',function($http,$q){
    var signupfact={
        signup:function(){
            return $q(function(resolve,reject){
                $http.post('/signup')
                .then(function(res){
                    console.log("response in factory" ,res);
                    resolve(res.data);
                },function(res){
                    reject(res.data);
                }

                );
            });
        }
    }
    return signupfact;
}]);