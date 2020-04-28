const covidCaseTimeSeries = require("../models/covid_caseTimeSeries");

const fetchaddSeries = (req, res) => {
  const timeSeries = new covidCaseTimeSeries(res.locals.data);
  timeSeries
    .save()
    .then((result) => {
      console.log(result);
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
};
module.exports = {
  fetchaddSeries: fetchaddSeries,
};
