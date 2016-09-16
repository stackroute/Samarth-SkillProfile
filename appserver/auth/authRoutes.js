var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27018/samarthdb');

var schema = require('./auth');
var signschema = mongoose.model("signschema", schema);
router.post('/signin', function(req, res) {

    var newuser = new signschema({
        username: req.body.phonenumber,
        password: req.body.password
    });
    newuser.save(function(err, docs) {
        if (err) {
            console.error("Error in saving the user ", err);
            return res.status(500).json({ error: "Internal error in completing operation..!" })
        }
        // console.log("User = ",user);
        res.json(docs);
    });
    //console.log("the saving data is here");

})
router.get('/signin/:username', function(req, res) {

    signschema.find({ 'username': req.params.username }, function(err, docs) {

        if (err) {
            console.error("you are not registered ", err);

            return res.send(err);

        }
        console.log(docs);
        res.json(docs);
    })
})
router.patch('/signin/:new_password', function(req, res) {
    var editUser = req.body;
    console.log(editUser);
    signschema.update({ username: editUser.username }, {
        $set: {
            "password": editUser.password
        }
    }, function(err, docs) {
           if (err) {
            console.error("you are not registered ", err);
            return res.send(err);
              }
        console.log(docs);
        res.json(docs);
    })
})


module.exports = router;
