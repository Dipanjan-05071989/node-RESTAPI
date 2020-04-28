var express = require("express");
var globalRouter = express.Router();

globalRouter.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Accept,Origin,X-Requested-With"
  );
  res.setHeader(
    "Access-Control-Allow-Origin",
    "GET",
    "POST",
    "PATCH",
    "DELETE",
    "OPTIONS"
  );
  next();
});
module.exports = globalRouter;
