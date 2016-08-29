angular.module('sm-skillprofile')
    .component('myProjectsectioncard', {            
        templateUrl: 'webcomponents/projectsectioncard/templates/projectsection.html',
        controller: projectsectioncardCtrl          
    });

function projectsectioncardCtrl($http) {
  var ctrl=this;  
     ctrl.changeFont='changeProjectNameFont';
     ctrl.profile = {}; 
  
    $http({
        method: 'GET',
        url: 'http://localhost:8081/profiles/01',
    }).then(function successCallback(response) {
        for (var prop in response.data)  {
            if (prop != "id" && prop != "UserName" && prop != "Personalinfo"&& prop != "Education"
                && prop != "Skills" && prop != "Work Experiance") { 
                ctrl.profile[prop] = response.data[prop]; 
            }
        }

    }, function errorCallback(response) {
         console.log('Error accord during Project Section')
    });          
}
