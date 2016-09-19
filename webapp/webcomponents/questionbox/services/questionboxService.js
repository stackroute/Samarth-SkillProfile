angular.module('sm-skillprofile')
    .service('quesnboxService', function($http) {
        return {
            questionGenerator: function() {
                questionArray = ["What's your College Name?", "Where do you live?",
                    "Where do you work?", "What's your birth place", "What's your favourite book"
                ];

                $http({
                    method: 'GET',
                    url: 'http://localhost:8081/profile/101'
                }).then(function successCallback(response) {

                    for (var noOfObjects = 0; noOfObjects < response.data.length; noOfObjects++) {
                        for (var record = 0; record < response.data[noOfObjects].projects.length; record++) {
                            for (var prop in response.data[0].projects[record]) {
                                if (response.data[noOfObjects].projects[record][prop] == "" && prop != "meta") {
                                    var temp = "What's your project " + prop
                                    questionArray.push(temp);
                                    console.log("From If", prop);
                                }
                            }
                        }

                        for (var record = 0; record < response.data[noOfObjects].skills.length; record++) {
                            for (var prop in response.data[0].skills[record]) {
                                var skill;
                                if (prop=="skillname") {
                                    skill = response.data[noOfObjects].skills[record][prop];
                                }
                                if (response.data[noOfObjects].skills[record][prop] == "" && prop != "metadata") {
                                    var temp = "What's your " + prop + " of " + skill + " skill"
                                    questionArray.push(temp);
                                }
                            }
                        }
                    }
                }, function errorCallback(response) {
                    console.log('Error accord during Project Section')
                });  

                return questionArray;
            }
        };
    });
