angular.module('sm-skillprofile')
    .controller('signinctrl', ['$scope',
        function($scope) {
        $scope.action = false;
        $scope.hideFun = function() {
            $scope.action = true;
        }
    }]);
