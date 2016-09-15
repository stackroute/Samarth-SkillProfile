angular.module('sm-skillprofile')
    .factory('sectionskillcard', function($http) 
    {
        return {
            getjson: function() {
        	var skill={};
            return    $http({ 
                    method: "get",
                     url: "http://localhost:8081/project/101",
                     
                }).then(function mySucces(response)  { 
                    for (var prop in response.data)  { 
                        if (prop == "Skills")  { 
                            skill[prop] = response.data[prop]; 
                        }
                        
                    }
                   
                     
                    return skill;

                }, function myError(response) { 
                    alert('error'); 
                });
            }

        };
    });
