const covidCaseTimeSeries = require("../models/covid_caseTimeSeries");
const userAccess = require("../models/User");

const fetchaddSeries = (req, res, next) => {
  console.log(res.locals.data);
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
              status: 1,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              message: err.errmsg,
            });
          });
      } else {
        res.status(200).json({
          message: "Data is already there",
          data: checkedData,
          status: 4,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  fetchaddSeries: fetchaddSeries,
};
