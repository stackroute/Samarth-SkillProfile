
angular.module('sm-skillprofile')
    .component('myProjectsectioncard', {            
        templateUrl: 'webcomponents/sectionprojectcard/templates/sectionprojectcard.html',
        controller: projectsectioncardCtrl          
    });

function projectsectioncardCtrl($http, $mdDialog) {
    var ctrl = this;  
    ctrl.changeFont = 'changeProjectNameFont';
    ctrl.profile = {}; 
    ctrl.totalProjects=0;
    ctrl.limitval=4;
    ctrl.increaseLimit=function(){
        ctrl.limitval=ctrl.totalProjects.length;
    }

    ctrl.decreaseLimit=function(){
        ctrl.limitval=4;
    }

    $http({
        method: 'GET',
        url: 'api/profiles/01',
    }).then(function successCallback(response) {
        for (var prop in response.data)  {
            if (prop != "id" && prop != "UserName" && prop != "Personalinfo" && prop != "Education" && prop != "Skills" && prop != "Work Experiance" && prop != "Certification") { 
                ctrl.profile[prop] = response.data[prop]; 
                ctrl.totalProjects=ctrl.profile[prop].length;
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
                templateUrl: '/webcomponents/sectionprojectcard/templates/sectionprojectconversation.html',
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

