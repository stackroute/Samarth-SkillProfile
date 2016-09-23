angular.module('sm-skillprofile')
    .service('quesnboxService', function($http) {
        return {
            questionGenerator: function() {
                questionArray = [];

                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/candidates/7204487502/qboxquestions?sections=project&limit=2&skip=0'
                }).then(function successCallback(response) {
                    for (var key = 0; key < response.data.length; key++) {
                        var section = response.data[key].section;
                        var fieldname = response.data[key].fieldname;
                        console.log("Inside qBox service success response", response.data[key].query);
                        questionArray.push(response.data[key].query);
                    }
                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                });  

                return questionArray;
            }
        };
    });
