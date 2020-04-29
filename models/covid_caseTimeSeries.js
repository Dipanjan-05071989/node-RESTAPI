const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  dailyconfirmed: { type: String, required: true },
  dailydeceased: { type: String, required: true },
  dailyrecovered: { type: String, required: true },
  date: { type: String, required: true },
  totalconfirmed: { type: String, required: true },
  totaldeceased: { type: String, required: true },
  totalrecovered: { type: String, required: true },
});

const covidCaseTimeSeriesSchema = new mongoose.Schema({
  cases_time_series: { type: [listSchema], required: true },
});

covidCaseTimeSeriesSchema.statics.checkData = function (name, cb) {
  console.log("executed");
  return this.find({ name }, cb);
};

const covidCaseTimeSeries = mongoose.model(
  "CovidCaseTimeSeries",
  covidCaseTimeSeriesSchema
);

module.exports = covidCaseTimeSeries;
