angular.module("sm-skillprofile")
    .controller('sidenavCtrl', ['$scope', '$mdSidenav', '$http', 'sidenavfactory', 'datagenerate',
        '$rootScope',
        function($scope, $mdSidenav, $http, sidenavfactory, datagenerate, $rootScope) {

            // var promise = sidenavfactory.sidenav();
            // promise.then(function(data) {
            //     $scope.items = data;
            //     console.log($scope.items);
            // })

            // $scope.selectlang = "English";

            $scope.loadLangData = function(lang) {
                datagenerate.getjson("sidenav", lang).then(function(result) {
                    $scope.items = result;
                    console.log("for side nav");
                    console.log(result);

                }); //end datagenerate
            }
            $scope.loadLangData("English");

            $rootScope.$on("lang_changed", function(event, data) {
                console.log("User switch to language " + data.language);
                $scope.loadLangData(data.language);
            });
        }
    ]);
