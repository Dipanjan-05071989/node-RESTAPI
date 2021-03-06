const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   lowercase: true,
    //   required: [true, "can't be blank"],
    //   match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    //   index: true,
    // },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

userSchema.plugin(uniqueValidator, { message: "Already exists" });

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

userSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this._id,
      // username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    process.env.SECRET
  );
};

userSchema.methods.toAuthJSON = function () {
  return {
    // username: this.username,
    email: this.email,
    // token: this.generateJWT(),
  };
};
const user = mongoose.model("User", userSchema);

module.exports = user;
