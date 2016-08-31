angular.module('sm-skillprofile')
        .component('personalinfocard',
        {
            templateUrl:'webcomponents/sectionpersonalinfocard/sectionpersonalinfocard.html',
            controller:personalinfocardctrl,
			    bindings: {
			        data: "="
			    },
			transclude:true     
        });
function personalinfoscardctrl()
            {
 	
 			}