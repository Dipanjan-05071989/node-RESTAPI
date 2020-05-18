const User = require("../models/User");

exports.register = (req, res) => {
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
        user
          .save()
          .then((result) => {
            // console.log(result);
            res.status(200).json({
              message: "user registered succesfully",
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
