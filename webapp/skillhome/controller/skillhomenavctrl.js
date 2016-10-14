angular.module("sm-skillprofile")
    .controller('sidenavCtrl', ['$scope', '$mdSidenav', '$http', 'sidenavfactory', 'datagenerate',
        '$rootScope', 'localStorageService', 'UserAuthService',
        function($scope, $mdSidenav, $http, sidenavfactory, datagenerate, $rootScope, localStorageService, UserAuthService) {

            //variable to keep track of the last selected item
            var active_list_item = 1 ;

            //Function to set the clicked itemas the selected item
            $scope.select = function(index){
                console.log('index ---->'+index);
                active_list_item = index;
            };

            //Function of return the class based on the active index of the list
            $scope.isActive = function(index){

                var active_class = "not_active" ;
                
                if(index == active_list_item){
                    active_class =  "link_active";
                }else{
                    active_class = "not_active" ;
                }
                
                return active_class;
            }

            $scope.loadLangData = function(lang) {
                datagenerate.getjson("sidenav", lang).then(function(result) {
                    $scope.items = result;
                    console.log("for side nav");
                    console.log(result);

                }); //end datagenerate
            };
            $scope.loadLangData(getItem("lang"));

            var candidateid = UserAuthService.getUser().uname;

            $http({
                method: 'GET',
                url: 'http://localhost:8081/skillcard/' + candidateid

            }).then(function successCallback(response) {

                $scope.skillLen = response.data.result.skill[0].skills.length;

                $scope.projectLen = response.data.result.project[0].projects.length;
                $scope.workexpLen = response.data.result.workexp[0].workexperience.length;
                $scope.personalinfolLen = response.data.result.personalinfo.length;

                $scope.total = $scope.skillLen + $scope.projectLen + $scope.personalinfolLen + $scope.workexpLen;

                if (($scope.total * 5) <= 100) {
                    $scope.completion = $scope.total * 5;
                } else {
                    $scope.completion = 100;
                }


            }, function errorCallback(response) {

                console.log('Error accord during Project Section')
            });

            // $scope.completion = 70;
            $scope.username = localStorageService.get('User');
            console.log("username", $scope.username);

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
