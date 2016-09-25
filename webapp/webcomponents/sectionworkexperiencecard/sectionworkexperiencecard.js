var app = angular
    .module('sm-skillprofile')
    .component('myWorkexperiencecard', {
        templateUrl: '/webcomponents/sectionworkexperiencecard/templates/sectionworkexperiencecard.html',
        controller: workexperienceCardController

    })
    /*app.filter('capitalize', function() {
        return function(input, scope) {
            if (input != null)
                input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    });
    */
function workexperienceCardController($http, $mdDialog, localStorageService) {
    var ctrl = this;
    var candidateid = localStorageService.get("candidateid");
    ctrl.workexperiences = [];
    ctrl.workexperience1 = [];
    ctrl.totalworkexperience = 0;
    ctrl.limitval = 4;
    ctrl.increaseLimit = function() {

        ctrl.limitval = ctrl.totalworkexperience;
    }

    ctrl.decreaseLimit = function() {
        ctrl.limitval = 4;
    }
    $http.get('http://localhost:8081/work/' + candidateid)
        .then(function success(response) {
            console.log("data", response.data);
            //console.log("sri",response.data[0].workexperiences.length);
            /* for (var prop in response.data[0]) {
                 if (prop == "workexperience") {
                     console.log("inside comparison", response.data[0].workexperience)
                     ctrl.workexperience = response.data[0].workexperience;

                 }

             }*/
            console.log("length", response.data.length);
            console.log("workexp", ctrl.workexperiences);
            for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                for (var record = 0; record < response.data[noofobj].workexperience.length; record++) {
                    ctrl.workexperiences.push(response.data[noofobj].workexperience[record]);
                }
                ctrl.totalworkexperience = ctrl.workexperiences.length;
                console.log("total", ctrl.totalworkexperience);

            }
            //console.log("total",totalworkexperience);
        }, function error(response) {
            console.log("error occored");
        });

    ctrl.showAdvanced = function($event, header, object) {

        $mdDialog.show({
                controller: DialogController,
                templateUrl: '/webcomponents/sectionworkexperiencecard/templates/sectionworkexperienceconversation.html',
                parent: angular.element(document.body),
                targetEvent: $event,
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


    function DialogController($scope, $mdDialog, $http, header, object, localStorageService) {
        var candidateid = localStorageService.get("candidateid");
        $scope.header = header;
        $scope.projectObj = object;
        if (object != '') {
            $scope.designation = object.designation;
            $scope.workplace = object.workplace;
            $scope.Location = object.Location;
            $scope.year = object.duration.duration;
            $scope.from = object.duration.from;
            $scope.to = object.duration.to;
            $scope.skill = object.skills;
        } else {
            $scope.designation = "";
            $scope.workplace = "";
            $scope.Location = "";
            $scope.workplace = "";
            $scope.year = "";
            $scope.from = "";
            $scope.to = "";
            $scope.skill = "";
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

            var workdata = {

                "workexperience": [{

                    "designation": $scope.designation,
                    "workplace": $scope.workplace,
                    "Location": $scope.Location,
                    "duration": {
                        "duration": $scope.year,
                        "from": $scope.from,
                        "to": $scope.to
                    },
                    "skills": [$scope.skill]

                }]




            }
            if (header == "Add Workexperience") {
                $http({
                    method: 'POST',
                    url: 'http://localhost:8081/work/' + candidateid,
                    data: workdata,
                    crossDomain: true
                }).then(function successCallback(response) {
                    console.log("After adding workexperience", response.data)

                }, function errorCallback(response) {
                    console.log('Error accord during at post Section')
                });  
            } else {

                $http({
                    method: 'PATCH',
                    url: 'http://localhost:8081/work/1234566/' + candidateid,
                    data: workdata,
                    crossDomain: true
                }).then(function successCallback(response) {
                    console.log("After updating ", response.data)

                }, function errorCallback(response) {
                    console.log('Error accord during updating experience Section')
                });  

            }
        }
    }
}
