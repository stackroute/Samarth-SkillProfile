angular.module('sm-skillprofile')
    .controller('questionboxCtrl', ['$scope', function($scope) {
        $scope.questionArray = ["What's your College Name?", "Where do you live?",
            "Where do you work?"
        ];
        $scope.display=false;
        $scope.currentQuestionIndex = 0;
        $scope.nextQuestionIndex = 0;
        $scope.val=0;
        $scope.increaseIndex=function () {
        	$scope.currentQuestionIndex =$scope.currentQuestionIndex+1;
        	$scope.val=Math.floor(($scope.currentQuestionIndex/$scope.questionArray.length)*100);
        	if($scope.currentQuestionIndex == $scope.questionArray.length )
        	{
        		$scope.display=true;
        	}    	
        }
    }]);
