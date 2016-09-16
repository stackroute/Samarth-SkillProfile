angular.module('sm-skillprofile')
    .component('mysectionSkillCard', {
        templateUrl: 'webcomponents/sectionskillcard/templates/sectionskillcard.html',
        controller: sectionskillcardctrl
    })
    .filter('capitalize', function() {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        }
    });


function sectionskillcardctrl($http, sectionskillcard, $mdDialog) {
    var ctrl = this;
    ctrl.limitval = 3;
    ctrl.limitval2 = 3;
    ctrl.value = 40;
    ctrl.skill = {};
    ctrl.primary = [];
    ctrl.secondary = []; 
    ctrl.increaseLimit = function() {
        ctrl.limitval = ctrl.limitval + 3;
    }

    ctrl.decreaseLimit = function() {
        ctrl.limitval = ctrl.limitval - 3;
    }
    ctrl.increaseLimit2 = function() {
        ctrl.limitval2 = ctrl.limitval2 + 3;
    }

    ctrl.decreaseLimit2 = function() {
        ctrl.limitval2 = ctrl.limitval2 - 3;
    }

    sectionskillcard.getjson().then(function(result) {
        ctrl.skill = result;
        //console.log("skill object", ctrl.skill);

        for (var prop in ctrl.skill) {
            for (var key in ctrl.skill[prop]) {
                console.log(ctrl.skill[prop][key])
                for (var k in ctrl.skill[prop][key]) {

                    if (ctrl.skill[prop][key][k] == "primary") //extracting all skill object containing primary type
                    {

                        ctrl.primary.push(ctrl.skill[prop][key]); //making array of object containing skill of  type primary   
                    }
                    if (ctrl.skill[prop][key][k] == "secondary") //extracting all skill object containing primary type
                    {
                        ctrl.secondary.push(ctrl.skill[prop][key]); //making array of object containing skill type secondary
                    }
                }
            }
        }
        console.log(ctrl.primary);

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
        var skill=val.skillname;
        console.log("coming", skill);
        $scope.header = header;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.save = function(skillobj, header) {
            // console.log("after save", $scope.skillObj);
            var skillObj = {
                "skills": [{
                    "skillname": skillobj.skillname,
                    "category": skillobj.category,
                    "expertise": skillobj.expertise,
                    "experience": skillobj.experience,
                    "metadata": {}
                }]
            };
            console.log()
            if (header === "Add Skill") {
                $http({ 
                    method: "post",
                    url: "http://localhost:8081/skill/102",
                    data: skillObj
                }).then(function mySucces(response)  { 
                    console.log("res",response.data[0])
                    // alert(response);
                }, function myError(response) { 
                    alert('error'); 
                });
            }
            if (header === "Edit Skill") {
                $http({ 
                    method: "patch",
                    url: "http://localhost:8081/skill/102/"+skill,
                    data: skillObj
                }).then(function mySucces(response)  { 
                    console.log("res",response)
                    // alert(response);
                }, function myError(response) { 
                    alert('error'); 
                });
            }
            $mdDialog.hide();
        };
    }


}
