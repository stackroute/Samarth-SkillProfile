angular.module('sm-skillprofile')
    .controller('authCtrl', ['$rootScope', '$scope', 'UserAuthService',
        'LangService', 'datagenerate',
        function($rootScope, $scope, UserAuthService, LangService, datagenerate) {
            $scope.loadLangData = function(lang) {
                datagenerate.getjson("section", lang).then(function(result) {
                    $scope.resourceData = result;
                });
            };
            $scope.loadLangData(LangService.getLang());

            $scope.signin = function() {
                $scope.error = "";
                UserAuthService.signIn($scope.user).then(function(user) {
                    //Skill Home is the dashboard for the user
                    $state.go("skillprofile.skillhome");
                }, function(err) {
                    console.log("Error in signin: ", err.error);
                    $scope.error = err.error;
                });
            };

            $rootScope.$on("lang_changed", function(event, data) {
                $scope.loadLangData(data.language);
            });
        }
    ]);
