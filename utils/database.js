const mongoose = require("mongoose");
let _establishDbConnect;

const mongoConnect = (connectionSuccess) => {
  mongoose
    .connect(
      "mongodb+srv://Dipanjan:Abc@1234@cluster0-xainw.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    )
    .then((client) => {
      console.log("connected");

      // _establishDbConnect = client.db();
      connectionSuccess();
    })
    .catch((err) => {
      throw err;
    });
};

const getDB = () => {
  if (_establishDbConnect) {
    return _establishDbConnect;
  } else {
    throw "no connection established";
  }
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
