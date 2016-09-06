angular.module('sm-skillprofile')
    .controller('skillhomectrl', ['$scope','$http','$rootScope','datagenerate' 
      ,function($scope,$http,$rootScope,datagenerate) {

    	$scope.carddata={};
			// $http({
  	// 			method: 'GET',
  	// 			url: 'api/user',
   //        type:'JSON'
			// 	})
			// .then(function successCallback(response) {
   //  				console.log("success");
   //  				$scope.carddata=response.data;
   //  				console.log($scope.carddata[0]);
   //  			}, 
   //  			function errorCallback(response) {
   //  				console.log("unsuccessful");
  	// 			});
            $scope.loadLangData = function(lang) {
                datagenerate.getjson("user", lang).then(function(result) {
                    $scope.carddata = result;
                    console.log("for side nav");
                    console.log(result);

                }); //end datagenerate
            }
            $scope.loadLangData("English");

            $rootScope.$on("lang_changed", function(event, data) {
                console.log("User switch to language " + data.language);
                $scope.loadLangData(data.language);
            });




    }]);
