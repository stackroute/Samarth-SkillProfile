angular.module("sm-skillprofile")
    .controller('sidenavCtrl', ['$scope', '$mdSidenav', '$http', 'sidenavfactory', 'datagenerate',
        '$rootScope', 'localStorageService',
        function($scope, $mdSidenav, $http, sidenavfactory, datagenerate, $rootScope, localStorageService) {

            $scope.loadLangData = function(lang) {
                datagenerate.getjson("sidenav", lang).then(function(result) {
                    $scope.items = result;
                    console.log("for side nav");
                    console.log(result);

                }); //end datagenerate
            }
            $scope.loadLangData(getItem("lang"));

            function getItem(key) {
                return localStorageService.get(key);
            }
            //$scope.loadLangData("Hindi");
            $rootScope.$on("lang_changed", function(event, data) {
                console.log("User switch to language " + data.language);
                $scope.loadLangData(data.language);
            });
            $scope.value = 40;
        }
    ]);
