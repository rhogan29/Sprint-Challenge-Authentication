const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String, 
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function(next) {
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  console.log(plainTextPW, this.password);
  return bcrypt.compare(plainTextPW, this.password, callBack);
};

module.exports = mongoose.model("User", UserSchema);
