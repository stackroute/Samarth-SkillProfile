var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27018/samarthdb');

var CandidatesSchema = new Schema({
 "name": {type:String},
  "phonenumber": {type:Number},
    "language":{type:String},
    "email":{type:String}
    
}, { collection: "candidate" });
module.exports = CandidatesSchema;
