var express = require("express");
const axios = require("axios");
var globalController = express.Router();

globalController.use(async (req, res, next) => {
  console.log(res.locals.data);
  if (!res.locals.data) {
    await axios
      .get("https://api.covid19india.org/data.json")
      .then((response) => {
        res.locals.data = response.data;
      })
      .catch((err) => console.log(err))
      .finally(() => console.log());
  }

  next();
});
module.exports = globalController;
