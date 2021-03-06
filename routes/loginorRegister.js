const express = require("express");
const loginorRegisterRouter = express.Router();
const userController = require("../controllers/userController");
const timeseriesController = require("../controllers/covidCaseSeriesController");
/* GET users listing. */
loginorRegisterRouter.get(
  "/api/addproduct",
  timeseriesController.fetchaddSeries
);

loginorRegisterRouter.post("/userApi/register", userController.register);
loginorRegisterRouter.post("/userApi/login", userController.login);

loginorRegisterRouter.post(
  "/api/registerLogin",
  userController.registerOrLogin
);


module.exports = loginorRegisterRouter;
