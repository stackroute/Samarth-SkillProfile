var request = require('request');

var registerCandidate = function(candidateObj) {
    return new Promise(function(resolve, reject) {
        reject({
            error: "Not implemented"
        });
    });
};

var getCandidateByUser = function(user) {
    return new Promise(function(resolve, reject) {
        reject({
            error: "Not implemented"
        });
    });
}

var getCandidateAuthToken = function(user) {
    return new Promise(function(resolve, reject) {
        reject({
            error: "Not implemented"
        });
    });
}

module.exports = {
    registerCandidate: registerCandidate,
    getCandidateByUser: getCandidateByUser,
    getCandidateAuthToken: getCandidateAuthToken
}
