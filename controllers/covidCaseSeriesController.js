const covidCaseTimeSeries = require("../models/covid_caseTimeSeries");

const fetchaddSeries = (req, res, next) => {
  const timeSeries = new covidCaseTimeSeries(res.locals.data);
  covidCaseTimeSeries
    .find()
    .then((checkedData) => {
      console.log(checkedData);
      if (checkedData.length === 0) {
        timeSeries
          .save()
          .then((result) => {
            // console.log(result);
            res.status(200).json({
              message: "product added sucessfully",
              data: {},
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({
              message: err.errmsg,
            });
          });
      }
      res.status(200).json({
        message: "Data is already there",
        data: checkedData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  fetchaddSeries: fetchaddSeries,
};
