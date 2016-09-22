angular.module('sm-skillprofile')
    .controller('skillhomectrl', ['$scope', '$http', '$rootScope', 'datagenerate', '$location', '$anchorScroll',
        'localStorageService',
        function($scope, $http, $rootScope, datagenerate, $location, $anchorScroll,localStorageService) {

            // $scope.carddata = {};
            $scope.scrollTo = function(elementId) {
                $location.hash(elementId);
                $anchorScroll();
            }
            // $scope.loadLangData = function(lang) {
            //         datagenerate.getjson("user", lang).then(function(result) {
            //             $scope.carddata = result;
            //             console.log("for side nav");
            //             console.log(result);

            //         }); //end datagenerate
            //     }
            //     // $scope.loadLangData("English");
            // $scope.loadLangData(getItem("lang"));

            // function getItem(key) {
            //     return localStorageService.get(key);
            // }
            // $rootScope.$on("lang_changed", function(event, data) {
            //     console.log("User switch to language " + data.language);
            //     $scope.loadLangData(data.language);
            // });




        }
    ]);
