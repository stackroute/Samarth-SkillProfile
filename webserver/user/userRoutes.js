var express = require('express');
var router = express.Router();
var userProcessor = require('./userProcessor');
var authProcessor = require('../auth/authprocessor');

var authschema = require('../auth/authschema');
router.post('/', function(req, res) {



    authProcessor.postUser(req.body, function(user) {

        res.json({ success: true, message: 'You registered Successfully.Please click here to Signin', data: user });
    }, function(err) {
        res.json({ success: false, error: 'not created' });
    })
});



module.exports = router;
