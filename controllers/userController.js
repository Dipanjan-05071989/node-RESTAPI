const User = require("../models/User");


exports.register = (req, res) => {

exports.registerOrLogin = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    email: email,
  });
  user.setPassword(password);
  User.findOne({ email: email })
    .then(function (userR) {

      if (!userR || !userR.validPassword(password)) {
        res.status(400).json({
          message: "email or password is invalid",
        });
      } else {

      if (!userR) {
        console.log("inside if");

        user
          .save()
          .then((result) => {
            // console.log(result);
            res.status(200).json({

              message: "user registered succesfully",

              message: "User registered successfully",

            });
          })
          .catch((err) => {
            res.status(500).json({
              message: err.errmsg,
            });
          });

      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err.errmsg,
      });
    });
};

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    email: email,
  });
  user.setPassword(password);
  User.findOne({ email: email })
    .then(function (userR) {
      if (!userR || !userR.validPassword(password)) {
        res.status(400).json({
          message: "email or password is invalid",
        });
      } else {
        res.status(200).json({
          message: "Log in successful",

      } else if (!userR || !userR.validPassword(password)) {
        res.status(400).json({
          message: "username or password is invalid",
        });
      } else {
        res.header("Authorization", userR.generateJWT());
        res.status(200).json({
          message: "Login successfull",
          data: userR.toAuthJSON(),

        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err.errmsg,
      });
    });
};
