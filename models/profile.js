var mongoose = require("mongoose");
 
var profileSchema = new mongoose.Schema({
   name: String,
   avitar: String,
   summary: String,

});
 
module.exports = mongoose.model("Profile", profileSchema);