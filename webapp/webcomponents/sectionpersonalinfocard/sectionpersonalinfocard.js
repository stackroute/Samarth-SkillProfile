angular.module('sm-skillprofile')
    .component('myPersonalinfocard', {
        templateUrl: '/webcomponents/sectionpersonalinfocard/templates/sectionpersonalinfocard.html',
        controller: personalinfoCardController
    });

function personalinfoCardController($http) {
    var ctrl = this;

    // ctrl.name='Afrin';
    //   ctrl.age=22;
    //   ctrl.dob='22/4/99';
    //   ctrl.matstatus='unmarried';
    //   ctrl.contact=9978674543;
    //   ctrl.email='afrin@gmail.com';
    //   ctrl.address='7th block, koramangala,bangalore';
    //   ctrl.pin=571342;
    ctrl.details = {};
    $http({
        method: "GET",
        url: 'http://localhost:8081/personalinfo'
    }).success(function(response) {
        ctrl.details = response;
        console.log(response[0]);
    });

    ctrl.save = function() {

    };
}
