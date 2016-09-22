var express = require('express');
var router = express.Router();
var userProcessor = require('./userProcessor');
var authProcessor = require('../auth/authprocessor');
var userschema = require('./users');
var authschema = require('../auth/authschema');
router.post('/', function(req, res) {
   

    userProcessor.postCandidate(req.body, function(candidate) {
        //console.log("req.body.token",req.body.token);

        authProcessor.postUser(req.body, function(user) {

           res.json({success: true, message: 'You registered Successfully.Please click here to Signin',data:candidate }); 
        }, function(err) {
           res.json({ success: false, error: 'not created' });
        })
        // console.log(candidate);
        // res.status(201).json(candidate);
    }, function(err) {
        res.status(501).json({ error: "error in entering" })

    })


});



module.exports = router;
