var jwt = require('jsonwebtoken');
var UserModel = require("./users");
var authCandidate = require("./authcandidate");

var signup = function(newUser, callback, unauthCB) {
    var newUserObj = new UserModel({
        "uname": newUser.mobile,
        "pwd": newUser.pwd,
        "status": "active",
        "createdon": new Date(),
        "lastseenon": new Date()
    });

    newUserObj.save(function(err, user) {
        if (err) {
            console.error("Error in signup user ", err);
            callback(err, null);
            return;
        }

        if (!user) {
            console.error("Empty user signed up..!");
            callback("Unable to signup the user", null);
        }

        //Register the candidate by sending the form data
        authCandidate.registerCandidate(newUser).then(
            function(candidate) {
                console.log("Registered successfully ", candidate);

                authCandidate.getCandidateAuthToken(user).then(
                    function(authData) {
                        candidateProfile = authData.candidate;
                        platformToken = authData.token;

                        var candidateUser = {
                            "uname": user.uname,
                            "cid": candidateProfile.candidateid,
                            "lang": candidateProfile.mothertongue,
                            "name": candidateProfile.name,
                            "email": candidateProfile.email,
                            "gender": candidateProfile.gender,
                            "ptkn": platformToken
                        };

                        generateJWTToken(candidateUser, callback); //generate JWTToken
                    },
                    function(err) {
                        console.log(
                            "Error in getting candidate auth token from platform ",
                            err);
                        unauthCB(err);
                    }
                );
            },
            function(err) {
                callback(err);
            }
        ); //end of register candidate
    });
};

var signin = function(uname, pwd, callback, unauthCB) {
    UserModel.findOne({
            uname: uname
        }, {
            _id: 0,
            __v: 0
        },
        function(err, user) {
            if (err) {
                console.error("Database error in finding user, error: ", err);
                callback({
                    error: "Failed to process request, please try later..!"
                }, null)
                return;
            }

            if (!user) {
                console.error('User ', uname, ' not found..!');
                unauthCB({
                    error: "Invalid credentials...!"
                }, null);
                return;
            }

            if (!user.validPassword(pwd)) {
                unauthCB({
                    error: "Invalid credentials...!"
                });
                return;
            }

            //Now that user is authenticated locally, fetch the corresponding candidate token
            authCandidate.getCandidateAuthToken(user).then(
                function(authData) {
                    candidateProfile = authData.candidate;
                    platformToken = authData.token;

                    var candidateUser = {
                        "uname": user.uname,
                        "cid": candidateProfile.candidateid,
                        "lang": candidateProfile.mothertongue,
                        "name": candidateProfile.name,
                        "email": candidateProfile.email,
                        "gender": candidateProfile.gender,
                        "ptkn": platformToken
                    };

                    generateJWTToken(candidateUser, callback); //generate JWTToken
                },
                function(err) {
                    console.log(
                        "Error in getting candidate auth token from platform ",
                        err);
                    unauthCB(err);
                }
            ); //end of Auth Token of candidate            
        }); //end of user find query
};

var signout = function(cb) {
    //@TODO Expire the token
    cb();
};

var generateJWTToken = function(user, cb) {
    var payload = user;
    var secretOrPrivateKey = getUserTokenSecret();
    var options = {
        algorithm: "HS256",
        expiresIn: 36000,
        issuer: user.uname
    };

    jwt.sign(payload, secretOrPrivateKey, options, function(err, jwtToken) {
        console.log("Sending token ", user, jwtToken);
        cb(err, user, jwtToken);
    });
}

var verifyAuthToken = function(token, callback, unauthCB) {
    var secretOrPrivateKey = getUserTokenSecret();

    jwt.verify(token, secretOrPrivateKey,
        function(err, payload) {
            if (err) {
                console.error("Error in decoding user token: ", err);
                unauthCB(err);
                return;
            }

            callback(payload);
        }
    ); //end of verify
}

var getUserTokenSecret = function() {
    return 'SAMARTH-SKILL-PROFILE-WEBAPP-SECRET';
}

module.exports = {
    signup: signup,
    signin: signin,
    signout: signout,
    isUserAuthenticated: verifyAuthToken
}
