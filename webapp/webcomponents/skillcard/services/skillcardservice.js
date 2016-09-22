angular.module('sm-skillprofile')
    .factory('skillcardservice', function($http,$filter) 
    {
        return {
            getskillcarddata: function() {
        	var skillcarddata={};
            return    $http({ 
                    method: "get",
                    url: "http://localhost:8081/skillcard/8895275566",
                    
                }).then(function mySucces(response)  { 

                    var object=response.data.result;

                    skillcarddata['name']=object.personalinfo[0].name;
                    skillcarddata['age']=(new Date()).getFullYear()-$filter('date')(object.personalinfo[0].dob,"yyyy");
                    skillcarddata['gender']=object.personalinfo[0].gender;
                    skillcarddata['dob']=$filter('date')(object.personalinfo[0].dob,"dd/MMM/yyyy");
                    skillcarddata['maritalstatus']=object.personalinfo[0].maritialstatus;
                    skillcarddata['contact']=object.personalinfo[0].contact;
                    skillcarddata['email']=object.personalinfo[0].email;
                    skillcarddata['location']=object.workexp[0].workexperience[0].Location;
                    skillcarddata['designation']=object.workexp[0].workexperience[0].role;
                    skillcarddata['skills']=[(object.skill[0].skills[0].skillname)];
                    // skillcarddata['name']=object.personalinfo[0].name;

                     console.log('SKILL CARD SERVICE',skillcarddata);
                     return skillcarddata;
                }, function myError(response) { 
                    alert('error'); 
                });
            }

        };
    });
