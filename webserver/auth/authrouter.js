var router = require('express').Router();
var authByToken = require('./authbytoken');

router.post('/signup', function(req, res) {
    //Validate for mandatory data
    if (!req.body.name ||
        !req.body.mobile ||
        !req.body.email ||
        !req.body.pwd ||
        !req.body.location) {
        return res.json({
            error: "Please try with valid signup details..!"
        });
    }

    authByToken.signup(req.body,
        function(err, user, jwtToken) {
            if (err) {
                return res.status(500).json({
                    error: "Internal error in processing request, please retry later..!"
                });
            }

            if (!jwtToken) {
                console.error("Empty token generated...!");
                return res.status(403).json({
                    error: "Internal error in processing request, please retry later..!"
                });
            }

            return res.status(200).json({
                'user': user,
                'token': jwtToken
            });
        },
        function(err) {
            return res.status(403).json(err);
        });
});

router.post('/signin', function(req, res) {
    if (!req.body.uname || !req.body.pwd) {
        res.json({
            error: "Please try with valid credentials..!"
        });
        return;
    }

    authByToken.signin(req.body.uname, req.body.pwd,
        function(err, user, jwtToken) {
            if (err) {
                return res.status(500).json({
                    error: "Internal error in processing request, please retry later..!"
                });
            }

            if (!jwtToken) {
                console.error("Empty token generated...!");
                res.status(403).json({
                    error: "Internal error in processing request, please retry later..!"
                });
            }

            return res.status(200).json({
                'user': user,
                'token': jwtToken
            });
        },
        function(err) {
            return res.status(403).json(err);
        });
});

router.get("/signout", function(req, res) {
    console.log("Signing out user...!");
    authByToken.signout(function(err, data) {
        if (err) {
            return res.status(500).json({
                error: "Internal error in processing request, please retry later..!"
            });
        }
        return res.status(200).json(data);
    });
});

module.exports = router;
