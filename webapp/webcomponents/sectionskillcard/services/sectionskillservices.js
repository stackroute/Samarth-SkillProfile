angular.module('sm-skillprofile')
    .factory('sectionskillcard', function($http) 
    {
        return {
            getjson: function() {
        	var skill={};
            return    $http({ 
                    method: "get",
                    url: "http://localhost:8081/skill/7749995677",
                    
                }).then(function mySucces(response)  { 
                   // console.log("res",response.data[0])
                    for (var prop in response.data[0])  { 
                        if (prop == "skills")  { 

                            skill[prop] = response.data[0][prop]; 
                        }
                        
                    }
                   //console.log("skill",skill);
                     
                    return skill;

                }, function myError(response) { 
                    alert('error'); 
                });
            }

        };
    });
