angular.module('sm-skillprofile')
        .component('mySkillcard',
        {
            templateUrl:'webcomponents/skillcard/skillcard.html',
            controller:skillcardctrl,
			    bindings: {
			        data: "="
			    },
			transclude:true     
        });
function skillcardctrl()
            {
                
            }
        