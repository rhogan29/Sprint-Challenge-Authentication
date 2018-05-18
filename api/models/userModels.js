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
    unique: true,
    lowercase: true,
  },
});

UserSchema.pre("save", function(next) {
  bcrypt.hash(this.password, 11, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    return next();
  });
});

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  return bcrypt.compare(plainTextPW, this.password, function(err, match) {
    if (match) return callBack(null, match);
    return callBack(err);
  });
};

module.exports = mongoose.model("User", UserSchema);
