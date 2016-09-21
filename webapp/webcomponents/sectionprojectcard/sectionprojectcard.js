angular.module('sm-skillprofile')
    .component('myProjectsectioncard', {            
        templateUrl: 'webcomponents/sectionprojectcard/templates/sectionprojectcard.html',
        controller: projectsectioncardCtrl          
    });

function projectsectioncardCtrl($http, $mdDialog, datagenerate, $rootScope,localStorageService) {

    var ctrl = this;  
    ctrl.loadLangData = function(lang) {
        datagenerate.getjson("section", lang).then(function(result) {
            ctrl.items = result;
            // console.log("for skills");
            // console.log(result);

        }); //end datagenerate
    }
    ctrl.loadLangData(getItem("lang"));

    function getItem(key) {
        return localStorageService.get(key);
    }
    //$scope.loadLangData("Hindi");
    $rootScope.$on("lang_changed", function(event, data) {
       // console.log("User switch to language " + data.language);
        ctrl.loadLangData(data.language);
    });
    
    ctrl.changeFont = 'changeProjectNameFont';
    ctrl.profile = []; 
    ctrl.profile1 = [];
    ctrl.totalProjects = 0;
    ctrl.limitval = 4;
    ctrl.increaseLimit = function() {
        /*if((ctrl.limitval+3)<=ctrl.totalProjects){
          ctrl.limitval = ctrl.limitval+4;
        }
        else*/
        ctrl.limitval = ctrl.totalProjects;
    }

    ctrl.decreaseLimit = function() {
        ctrl.limitval = 4;
    }

    $http({
        method: 'GET',
        url: 'http://localhost:8081/project/102'
    }).then(function successCallback(response) {
        console.log("Length=" + response.data.length)
        for (var noOfObjects = 0; noOfObjects < response.data.length; noOfObjects++) {
            for (var record = 0; record < response.data[noOfObjects].projects.length; record++) {

                ctrl.profile.push(response.data[noOfObjects].projects[record]);
            }

        }
        ctrl.totalProjects = ctrl.profile.length;

    }, function errorCallback(response) {
        console.log('Error accord during Project Section')
    });  

    ctrl.showAdvanced = function(ev, header, object) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: '/webcomponents/sectionprojectcard/templates/sectionprojectconversation.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    header: header,
                    object: object
                }
            })
            .then(
                function(answer) {},
                function() {}
            );
    };

    function DialogController($scope, $mdDialog, $http, header, object) {
        $scope.header = header;
        $scope.projectObj=object;
        if (object != '') {
            $scope.Project = object.name;
            $scope.Duration = object.duration.duration;
            $scope.Client = object.workplace;
            $scope.Location = object.location;
            $scope.Salary = object.income;
            /*$scope.Skills = [];
            for (var skill in object.skills) {
                console.log("Inside section project ",object.skills[skill]);
                $scope.Skills.push(object.skills[skill]);
            }*/


        } else {
            $scope.Project = "";
            $scope.Duration = "";
            $scope.Client = "";
            $scope.Location = "";
            $scope.Salary = "";
            $scope.Skills = [];
        }

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };


        $scope.save = function(header) {

            console.log("Header" + header)

            var projectData = {

                "records": [{
                    "name": $scope.Project,
                    "workplace": $scope.Client,
                    "location": $scope.Location,
                    "income": $scope.Salary,
                    "duration": {
                        "from": "09/08/2016",
                        "to": "09/11/2016",
                        "duration": $scope.Duration
                    },
                    "skills": ["Javascript"],
                    "meta": []
                }]
            }
            if (header == "Add Project") {
                $http({
                    method: 'POST',
                    url: 'http://localhost:8081/project/102',
                    data: projectData,
                    crossDomain: true
                }).then(function successCallback(response) {
                    console.log("After adding project", response.data)

                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                });  
            } else {

                $http({
                    method: 'PATCH',
                    url: 'http://localhost:8081/project/102/' + object.name,
                    data: projectData,
                    crossDomain: true
                }).then(function successCallback(response) {
                    console.log("After updating project", response.data)

                }, function errorCallback(response) {
                    console.log('Error accord during updating Project Section')
                });  

            }
        }
    }

}
