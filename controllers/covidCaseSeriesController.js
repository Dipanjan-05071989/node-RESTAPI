const covidCaseTimeSeries = require("../models/covid_caseTimeSeries");
const userAccess = require("../models/User");

const fetchaddSeries = async (req, res) => {
  await userAccess
    .find()
    .then((results) => {
      res.locals.data["useraccess"] = results;
      const timeSeries = new covidCaseTimeSeries(res.locals.data);
      covidCaseTimeSeries
        .find()
        .then((checkedData) => {
          // console.log(!checkedData.length);
          if (!checkedData.length) {
            timeSeries
              .save()
              .then((result) => {
                // console.log(result);
                res.status(200).json({
                  message: "product added sucessfully",
                  status: 4,
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  message: err.message,
                });
              });
          } else {
            res.status(200).json({
              message: "Data is already there",
              data: checkedData,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: err.message || err.errmsg });
    });
};

module.exports = {
  fetchaddSeries: fetchaddSeries,
};
