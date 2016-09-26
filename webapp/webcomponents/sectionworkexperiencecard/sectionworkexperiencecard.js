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
<<<<<<< HEAD
    .directive('formattedDate', function(dateFilter) {
 return {
   require: 'ngModel',
   scope: {
     format: "="
   },
   link: function(scope, element, attrs, ngModelController) {
     ngModelController.$parsers.push(function(data) {
       //convert data from view format to model format
       return dateFilter(data, scope.format); //converted
     });

     ngModelController.$formatters.push(function(data) {
       //convert data from model format to view format
       return dateFilter(data, scope.format); //converted
     });
   }
 }
})
=======
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
function workexperienceCardController($http, $mdDialog) {
    var ctrl = this;
    ctrl.workexperiences = [];
    ctrl.workexperience1 = [];
    ctrl.totalworkexperience = 0;
<<<<<<< HEAD
    ctrl.limitval = 2;
=======
    ctrl.limitval = 4;
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
    ctrl.increaseLimit = function() {

        ctrl.limitval = ctrl.totalworkexperience;
    }

    ctrl.decreaseLimit = function() {
<<<<<<< HEAD
        ctrl.limitval = 2;
    }
    $http.get('http://localhost:8081/work/1234566')
        .then(function success(response) {
           // console.log("data", response.data);
=======
        ctrl.limitval = 4;
    }
    $http.get('http://localhost:8081/work/1234566')
        .then(function success(response) {
            console.log("data", response.data);
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
            //console.log("sri",response.data[0].workexperiences.length);
            /* for (var prop in response.data[0]) {
                 if (prop == "workexperience") {
                     console.log("inside comparison", response.data[0].workexperience)
                     ctrl.workexperience = response.data[0].workexperience;

                 }

             }*/
<<<<<<< HEAD
            //console.log("length", response.data.length);
            //console.log("workexp", ctrl.workexperiences);
=======
            console.log("length", response.data.length);
            console.log("workexp", ctrl.workexperiences);
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
            for (var noofobj = 0; noofobj < response.data.length; noofobj++) {
                for (var record = 0; record < response.data[noofobj].workexperience.length; record++) {
                    ctrl.workexperiences.push(response.data[noofobj].workexperience[record]);
                }
                ctrl.totalworkexperience = ctrl.workexperiences.length;
<<<<<<< HEAD
               // console.log("total", ctrl.totalworkexperience);
=======
                console.log("total", ctrl.totalworkexperience);
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83

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


    function DialogController($scope, $mdDialog, $http, header, object) {
        $scope.header = header;
        $scope.projectObj = object;
        if (object != '') {
            $scope.designation = object.designation;
            $scope.workplace = object.workplace;
            $scope.Location = object.Location;
            $scope.year = object.duration.duration;
            $scope.from = object.duration.from;
            $scope.to = object.duration.to;
<<<<<<< HEAD

            /*var str=object.skills;

            console.log(str);
            $scope.skill = object.skills[0].split(",");
            console.log($scope.skill);*/
            $scope.skills=object.skills;
=======
            $scope.skill = object.skills;
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
        } else {
            $scope.designation = "";
            $scope.workplace = "";
            $scope.Location = "";
            $scope.workplace = "";
            $scope.year = "";
            $scope.from = "";
            $scope.to = "";
            $scope.skill = "";
<<<<<<< HEAD


=======
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
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
<<<<<<< HEAD
            var res = $scope.skills.split(",");
            console.log("splits",res);
            console.log("length",res.length);
             ctrl.limitskillval = 2;
            var workdata = {
                    
=======

            var workdata = {
>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83

                "workexperience": [{

                    "designation": $scope.designation,
                    "workplace": $scope.workplace,
                    "Location": $scope.Location,
                    "duration": {
                        "duration": $scope.year,
                        "from": $scope.from,
                        "to": $scope.to
                    },
<<<<<<< HEAD

                    "skills": res
                       // var str=$scope.skill
=======
                    "skills": [$scope.skill]

>>>>>>> 3a889ca40e03443740378886cdfdf20970a83f83
                }]




            }
            if (header == "Add Workexperience") {
                $http({
                    method: 'POST',
                    url: 'http://localhost:8081/work/1234566',
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
                    url: 'http://localhost:8081/work/1234566/' + object.workplace,
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
