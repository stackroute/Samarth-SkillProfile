var mongoose = require('mongoose');

var user = require("./authschema");

function postUser(userobj, successCallBack, errorCallBack) {


    var newuser = new user({
        username: userobj.phonenumber,
        password: userobj.password
    });
    newuser.save(function(err, docs) {
        if (err) {
            console.error("Error in saving the user ", err);
            errorCallBack(res.status(500).json({ error: "Internal error" }));
        }
        console.log(docs);
        successCallBack(docs);
    });
}

module.exports = {
    postUser: postUser

}
