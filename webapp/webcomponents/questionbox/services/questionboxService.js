angular.module('sm-skillprofile')
    .service('quesnboxService', function($http, $rootScope) {
        return {
            questionGenerator: function() {
                questionArray = [];

                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/candidates/' + $rootScope.candidateid + '/qboxquestions?sections=project&limit=2&skip=0&lang=Hindi'
                }).then(function successCallback(response) {
                    for (var key = 0; key < response.data.length; key++) {

                        questionArray.push(response.data[key].query);
                    }
                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                });  

                return questionArray;
            }
        };
    });
