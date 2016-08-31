angular.module('sm-skillprofile')
    .controller('skillhomectrl', ['$scope','$http' ,function($scope,$http) {

    	$scope.carddata={};
			$http({
  				method: 'GET',
  				url: 'api/user',
          type:'JSON'
				})
			.then(function successCallback(response) {
    				console.log("success");
    				$scope.carddata=response.data;
    				console.log($scope.carddata[0]);
    			}, 
    			function errorCallback(response) {
    				console.log("unsuccessful");
  				});

    }]);
