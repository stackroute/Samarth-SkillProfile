angular.module('sm-skillprofile')
    .service('skillcardservice', function($http, $filter, $rootScope, localStorageService) {
        return {
            getskillcarddata: function() {
                var skillcarddata = {};
                var candidateid = localStorageService.get("candidateid");
                return $http({ 
                    method: "get",
                    url: "http://localhost:8081/skillcard/" + candidateid,

                }).then(function mySucces(response)  { 
                    console.log("haan v jaaan de rea");
                    var object = response.data.result;

                    if (object.personalinfo[0].name != undefined) {
                        skillcarddata['name'] = object.personalinfo[0].name;
                    }
                    if (object.personalinfo[0].dob != undefined) {
                        skillcarddata['dob'] = $filter('date')(object.personalinfo[0].dob, "dd/MMM/yyyy");
                        skillcarddata['age'] = (new Date()).getFullYear() - $filter('date')(object.personalinfo[0].dob, "yyyy");
                    }
                    if (object.personalinfo[0].gender != undefined) {
                        skillcarddata['gender'] = object.personalinfo[0].gender;
                    }
                    if (object.personalinfo[0].maritialstatus != undefined) {
                        skillcarddata['maritalstatus'] = object.personalinfo[0].maritialstatus;
                    }
                    if (object.personalinfo[0].contact != undefined) {
                        skillcarddata['contact'] = object.personalinfo[0].contact;
                    }
                    if (object.personalinfo[0].email != undefined) {
                        skillcarddata['email'] = object.personalinfo[0].email;
                    }
                    if (object.workexp[0].workexperience.length > 0)
                    //if(object.workexp[0].workexperience[0].Location != undefined)
                    {
                        skillcarddata['location'] = object.workexp[0].workexperience[0].Location;
                    }
                    if (object.workexp[0].workexperience.length > 0) {
                        skillcarddata['designation'] = object.workexp[0].workexperience[0].role;
                    }
                    if (object.skill[0].skills.length > 0) {
                        skillcarddata['skills'] = [(object.skill[0].skills[0].skillname)];
                    }
                    // skillcarddata['name']=object.personalinfo[0].name;

                    console.log('SKILL CARD SERVICE', skillcarddata);
                    return skillcarddata;
                }, function myError(response) { 
                    console.log("error in getting skillcard details"); 
                });
            }

        };
    });
