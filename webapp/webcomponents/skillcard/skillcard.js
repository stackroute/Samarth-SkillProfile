angular.module('sm-skillprofile')
        .component('mySkillcard',
        {
            templateUrl:'webcomponents/skillcard/skillcard.html',
            controller:skillcardctrl,
			    bindings: {
			        results: "="
			    }       
        });
function skillcardctrl()
            {
                var ctrl=this;
                ctrl.experienceColor="black";

                this.details={
                    name:"Diamond Khanna", 
                    skill:"FULL STACK PROGRAMMER",
                    contact:"9023650041",
                    email:"diamondkhanna1994@gmail.com",
                    location:"Bangalore",
                    image:"skillhome/css/images/dp.jpg",
                    experience:"3"};

                this.exp=function(x){
                    if (x=="1") {return ctrl.experienceColor="black";}
                    if (x=="2") {return ctrl.experienceColor="red";}
                    if (x=="3") {return ctrl.experienceColor="orange";}
                    if (x=="4") {return ctrl.experienceColor="yellow";}
                    if (x=="5") {return ctrl.experienceColor="green";}
                }

                this.name;
                this.skill;
                this.contact;
                this.flag="true";
                                
                this.shareCard=function()
                    {     
                        ctrl.shareDetails={
                            name:ctrl.name,
                            skill:ctrl.skill,
                            contact:ctrl.contact,
                            flag:!(ctrl.flag)
                        }
                        
                        if(ctrl.shareDetails.flag==="false")
                        {
                            console.log('it works');
                        }
                        else
                        {
                            console.log('didnt work')
                        }
                    };
            }
        