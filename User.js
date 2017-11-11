var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  phone: Number,
  state: String,
  city: String,
  address: String
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');