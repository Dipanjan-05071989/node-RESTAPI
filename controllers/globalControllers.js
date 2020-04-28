var express = require("express");
const axios = require("axios");
var globalController = express.Router();

globalController.use(async (req, res, next) => {
  await axios
    .get("https://api.covid19india.org/data.json")
    .then((response) => {
      res.locals.data = response.data.cases_time_series;
    })
    .catch((err) => console.log(err))
    .finally(() => console.log("finally"));
  next();
});
module.exports = globalController;
