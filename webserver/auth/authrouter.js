var router = require('express').Router();
var user = require('./authschema');
var jwt = require('jsonwebtoken');
var authByToken = require('./authbytoken');

router.post('/', function(req, res) {

    console.log("req.body.phonenumber:", req.body.mobile);

    user.find({ mobile: req.body.mobile }, function(err, docs) {
        console.log(docs);
        console.log("req.body:", req.body.password);


        if (docs.length == 0) {
            res.json({ success: false, error: 'Invalid Credentials' });

        } else if (docs[0].mobile != req.body.mobile) {

            res.json({ success: false, error: 'Authentication failed. Wrong phonenumber.' });
        } else if (docs[0].password != req.body.password) {

            res.json({ success: false, error: 'Authentication failed. Wrong password.' });
        } else {


            var token = jwt.sign({ 'name': 'saranya' }, "superSecret")
            console.log("JWT token generated is, ", token);
            res.json({ success: true, data: docs, message: 'Authentication success', token: token });

        }

    })
})



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
