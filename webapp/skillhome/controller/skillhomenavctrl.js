angular.module("sm-skillprofile")
    .controller('sidenavCtrl', ['$scope', '$mdSidenav', '$http', 'sidenavfactory',
        function($scope, $mdSidenav, $http, sidenavfactory) {

            var promise = sidenavfactory.sidenav();
            promise.then(function(data) {
                $scope.items = data;
                console.log($scope.items);
            })

        }
    ]);
    