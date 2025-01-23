const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user", // Default role is 'user'
    },
  },
  { timestamps: true } // Adds 'createdAt' and 'updatedAt' fields
);

const AuthData = mongoose.model('UserData', userSchema);

module.exports = AuthData;
