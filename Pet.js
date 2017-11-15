var mongoose = require('mongoose');  
var PetSchema = new mongoose.Schema({  
  username: String,
  email: String,
  password: String,
  phone: Number,
  state: String,
  city: String,
  address: String
});
mongoose.model('Pet', PetSchema);
module.exports = mongoose.model('Pet');