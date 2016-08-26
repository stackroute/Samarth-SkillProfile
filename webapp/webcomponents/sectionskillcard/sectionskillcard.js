angular.module('sm-skillprofile')
    .component('mysectionSkillCard', {
        templateUrl: 'webcomponents/sectionskillcard/sectionskillcard.html',
        controller: sectionskillcardctrl
    });

function sectionskillcardctrl($http) {
    var ctrl = this;
    ctrl.value = 40;
    ctrl.skill = {};
    ctrl.primary={};
    ctrl.secondary={}; 
    $http({ 
        method: "get",
         url: "http://localhost:8081/profiles/01",
         
    }).then(function mySucces(response)  { 
        for (var prop in response.data)  { 
            if (prop == "Skills")  { 
                ctrl.skill[prop] = response.data[prop]; 
            }
            // ctrl.profile=response.data;
        }   
       
    }, function myError(response) { 
        alert('error'); 
    });
 console.log(ctrl.skill);
for(var prop in ctrl.skill)
{
	console.log(prop);
}


}
