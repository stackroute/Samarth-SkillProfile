angular.module('sm-skillprofile')
        .component('personalinfocard',
        {
            templateUrl:'webcomponents/personalinfocard/personalinfo.html',
            controller:personalinfocardctrl,
			    bindings: {
			        data: "="
			    },
			transclude:true     
        });
function personalinfoscardctrl()
            {
 	
 			}