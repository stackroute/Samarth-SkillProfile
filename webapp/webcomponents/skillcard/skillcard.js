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
function skillcardctrl($window)
            {
 				var ctrl=this;
 				// console.log("aagya "+ctrl.data);
//  			console.log("inside skillcard js");
//  			console.log(data);
             	ctrl.downloaddata =JSON.stringify(this.data);
				// ctrl.downloaddata=this.data;
        		blob = new Blob([ctrl.downloaddata], { type: 'text/plain' }),
        		url = $window.URL || $window.webkitURL;
    			ctrl.fileUrl = url.createObjectURL(blob);
            }
        