var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({

    "username": { type: String },
    "password": { type: String },
    "createdon": { type: Date, default: Date.now },
    "lastseenon": { type: Date, default: Date.now },
    "role": { type: String },
    "status": { type: String }
   
});
var user= mongoose.model("userschema", users,"users");

module.exports = user
