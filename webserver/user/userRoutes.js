var express = require('express');
var router = express.Router();
var authProcessor = require('../auth/authprocessor');
var userModel = require('../auth/authschema');

router.post('/', function(req, res) {
        console.log(req.body, "in userRoutes");

        userModel.find({ mobile: req.body.mobile }, function(err, result) {
            if (result == "") {
                authProcessor.postUser(req.body, function(user) {

                    res.json({ success: true, data: user, message: 'You registered Successfully.Please click here to Signin', data: user });
                }, function(err) {
                    res.json({ success: false, error: 'not created' });
                })


            } //end if
            else {
                res.status(500).send("Mobile number already exist");
            }
        })
    })
    // });



module.exports = router;
