angular.module('sm-skillprofile')
        .component('mySkillcard',
        {
            templateUrl:'webcomponents/skillcard/templates/skillcard.html',
            controller:skillcardctrl,
			    bindings: {
			        data: "="
			    },
			transclude:true     
        });
function skillcardctrl($window)
            {
 				var ctrl=this;
 				ctrl.data1=ctrl.data;
 				// console.log("aagya "+ctrl.data);
//  			console.log("inside skillcard js");
 				console.log("download "+ctrl.data1);
             	ctrl.downloaddata =JSON.stringify(ctrl.data1);
				// ctrl.downloaddata=this.data;
        		blob = new Blob([ctrl.downloaddata], { type: 'text/plain' }),
        		url = $window.URL || $window.webkitURL;
    			ctrl.fileUrl = url.createObjectURL(blob);
            }