
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var signupSchema = new Schema({
 "username": {type:String},
  "password": {type:String},
   "createdon":{type:Date,default:Date.now},
   "lastseenon":{type:Date,default:Date.now},
    "role":{type:String},
   "status":{type:String}
}, { collection: "signin" });
module.exports = signupSchema;