angular.module('sm-skillprofile')
    .service('quesnboxService', function($http) {
        return {
            questionGenerator: function() {
                questionArray = [];

                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/candidates/101/qboxquestions?sections=project&limit=2&skip=0'
                }).then(function successCallback(response) {
                    for (var key = 0; key < response.data.length; key++) {
                        var section = response.data[key].section;
                        var fieldname = response.data[key].fieldname;
                        console.log("Inside qBox service success response", section + " ", fieldname);

                    }
                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                });  

                return questionArray;
            }
        };
    });
