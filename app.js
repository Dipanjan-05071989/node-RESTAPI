const express = require("express");

const app = express();
const globalRoute = require("./globalroutes");
const globalController = require("./controllers/globalControllers");
const postRoute = require("./routes/users");
const loginRegisterRoute = require("./routes/loginorRegister");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(globalRoute);
app.use(globalController);
app.use(loginRegisterRoute);
app.use(postRoute);

module.exports = app;
