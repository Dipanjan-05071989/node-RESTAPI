var express = require("express");
const axios = require("axios");
var globalController = express.Router();

const checkCallStatus = (req, res, next) => {
  // console.log(req.url);
  if (req.url === "/api/addproduct") {
    res.locals.callStatus = req.headers ? +req.headers.statusid : null;
    if (res.locals.callStatus && res.locals.callStatus !== 4) {
      // console.log(req.url === "/api/addproduct");
      callApi(req, res, next);
    } else if (!res.locals.callStatus) {
      res.status(500).json({
        message: "please provide call Status",
      });
    } else {
      movetoNextTask(req, res, next);
    }
  } else {
    movetoNextTask(req, res, next);
  }
};

const callApi = async (req, res, next) => {
  console.log("inside call middleware");
  await axios
    .get("https://api.covid19india.org/data.json")
    .then((response) => {
      res.locals.data = response.data;
      console.log("inside call middleware");
      // console.log(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: err.response,
      });
    })
    .finally(() => console.log());
  next();
};

const movetoNextTask = (req, res, next) => {
  next();
};

globalController.use(checkCallStatus);
module.exports = globalController;
