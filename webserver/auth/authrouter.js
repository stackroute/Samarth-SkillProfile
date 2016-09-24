var router = require('express').Router();
var authByToken = require('./authbytoken');

router.post('/signup', function(req, res) {
    return res.status(201).json({});
});

router.post('/signin', function(req, res) {
    if (!req.body.uname || !req.body.pwd) {
        res.json({
            error: "Please try with valid credentials..!"
        });
        return;
    }

    authByToken.signin(req.body.uname, req.body.pwd, function(err, jwtToken) {
        if (err) {
            return res.status(500).json({
                error: "Internal error in processing request, please retry later..!"
            });
        }

        if (!jwtToken) {
            console.error("Empty token generated...!");
            // var err = new Error("Internal error in processing request, please retry later..!");
            // err.status=401;
            // throw err;
        }

        return res.status(200).json({
            'user': user,
            'token': jwtToken
        });
    }, function(err) {
        res.status(403).json(err);
    })
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
