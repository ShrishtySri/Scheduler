const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  displayName: { type: String },
  password: { type: String, required: true, minlength: 5 }
  
});
const User = mongoose.model("user", userSchema);
module.exports = User ;