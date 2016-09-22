var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Candidateschema = new Schema({
    "name": { type: String },
    "phonenumber": { type: Number },
    "language": { type: String, default: '' },
    "email": { type: String }

});
var Candidate = mongoose.model("Candidate", Candidateschema, "candidates");
module.exports = Candidate;
