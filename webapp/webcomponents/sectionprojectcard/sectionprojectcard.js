angular.module('sm-skillprofile')
    .component('myProjectsectioncard', {            
        templateUrl: 'webcomponents/sectionprojectcard/templates/sectionprojectcard.html',
        controller: projectsectioncardCtrl          
    });

function projectsectioncardCtrl($http, $mdDialog) {
    var ctrl = this;  
    ctrl.changeFont = 'changeProjectNameFont';
    ctrl.profile = []; 
    ctrl.profile1 = [];
    ctrl.totalProjects = 0;
    ctrl.limitval = 4;
    ctrl.increaseLimit = function() {
        ctrl.limitval = ctrl.limitval + 3;
    }

    ctrl.decreaseLimit = function() {
        ctrl.limitval = 4;
    }

    $http({
        method: 'GET',
        url: 'http://localhost:8081/project/101'
    }).then(function successCallback(response) {
        for (var noOfObjects = 0; noOfObjects< response.data.length; noOfObjects++) {
            for (var record = 0; record < response.data[noOfObjects].projects.length; record++) {

                ctrl.profile.push(response.data[noOfObjects].projects[record]);
            }
            
        }

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

        if (object != '') {
            $scope.Project = object.name;
            $scope.Duration = object.duration.duration;
            $scope.Client = object.workplace;
            $scope.Location = object.location;
            $scope.Salary = object.income;
        } else {
            $scope.Project = "project";
            $scope.Duration = "some months";
            $scope.Client = "client";
            $scope.Location = "at some location";
            $scope.Salary = "some salary";
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


        $scope.save = function() {
            console.log($scope.Duration);
            
        }
    }

}
