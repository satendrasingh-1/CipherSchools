const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, trim: true, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true,
  },
  age: { type: Number, required: true },
  password: { type: String, required: true, minlength: 8 },
});

const User = model("User", UserSchema);

module.exports = user;
