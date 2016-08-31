angular.module('sm-skillprofile')
    .component('mysectionSkillCard', {
        templateUrl: 'webcomponents/sectionskillcard/templates/sectionskillcard.html',
        controller: sectionskillcardctrl
    });

function sectionskillcardctrl($http, sectionskillcard, $mdDialog) {
    var ctrl = this;
    ctrl.value = 40;
    ctrl.skill = {};
    ctrl.primary = {};
    ctrl.prim = [];
    ctrl.secd = [];
    ctrl.secondary = {}; 

    sectionskillcard.getjson().then(function(res) {
        ctrl.skill = res;
        console.log("skill object", ctrl.skill);

        for (var prop in ctrl.skill) {
            for (var key in ctrl.skill[prop]) {
                // console.log(ctrl.skill[prop][key])
                for (var k in ctrl.skill[prop][key]) {

                    if (ctrl.skill[prop][key][k] == "Primary") //extracting all skill object containing primary type
                    {

                        ctrl.prim.push(ctrl.skill[prop][key]); //making array of object containing skill of  type primary   
                    }
                    if (ctrl.skill[prop][key][k] == "Secondary") //extracting all skill object containing primary type
                    {
                        ctrl.secd.push(ctrl.skill[prop][key]); //making array of object containing skill type secondary
                    }
                }
            }
        }
        console.log(ctrl.prim);

    });

    ctrl.status = '  ';
    ctrl.customFullscreen = false;
    ctrl.showAdvanced = function(ev, value, title) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: '/webcomponents/sectionskillcard/templates/sectionskillconversation.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    val: value,
                    header: title
                },
                fullscreen: ctrl.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                ctrl.status = 'You said the information was "' + answer + '".';
            }, function() {
                ctrl.status = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog, val, header) {
        $scope.skillObject = val;
        $scope.header = header;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.save = function(name, experience, expertise) {
            console.log("after save", name, experience, expertise);
            $mdDialog.hide();
        };
    }

}
