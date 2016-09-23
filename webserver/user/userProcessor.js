var mongoose = require('mongoose');

// var candidate = require("./users");


function postCandidate(candidateobj, successCallBack, errorCallBack) {


    /*    var newcandidate = new candidate({
            name: candidateobj.name,
            phonenumber: candidateobj.phonenumber,
            email: candidateobj.email

        });
        newcandidate.save(function(err, docs) {
            if (err) {
                console.error("Error in saving the user ", err);
                errorCallBack(res.status(500).json({ error: "Internal error" }));
            }
            console.log(docs);
            successCallBack(docs);
        });*/

}

module.exports = {
    postCandidate: postCandidate

}
