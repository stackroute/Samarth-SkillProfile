
angular.module('sm-skillprofile')
    .component('myProjectsectioncard', {            
        templateUrl: 'webcomponents/projectsectioncard/templates/projectsection.html',
        controller: projectsectioncardCtrl          
    });

function projectsectioncardCtrl($http, $mdDialog) {
    var ctrl = this;  
    ctrl.changeFont = 'changeProjectNameFont';
    ctrl.profile = {}; 

    $http({
        method: 'GET',
        url: 'http://localhost:8081/profiles/01',
    }).then(function successCallback(response) {
        for (var prop in response.data)  {
            if (prop != "id" && prop != "UserName" && prop != "Personalinfo" && prop != "Education" && prop != "Skills" && prop != "Work Experiance" && prop != "Certification") { 
                ctrl.profile[prop] = response.data[prop]; 
                console.log(ctrl.profile[prop][0].Project)
            }
        }
    }, function errorCallback(response) {
        console.log('Error accord during Project Section')
    });  

    ctrl.status = '  ';
    ctrl.customFullscreen = false;
    ctrl.addProject = function(ev, value, title) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: '/webcomponents/projectsectioncard/templates/addProjectDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    val: value,
                    header: title
                },
                fullscreen: ctrl.customFullscreen
            })
            .then(function(answer) {
                ctrl.status = 'You said the information was "' + answer + '".';
            }, function() {
                ctrl.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog, val, header) {
        $scope.projectObject = val;
        $scope.header = header;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.save = function(project, duration, location, client, teamsize, salary) {
            console.log("after save", project, duration, location, client, teamsize, salary);
            $mdDialog.hide();
        };
    }        
}

