const mongoose = require("mongoose");

const covidCaseTimeSeriesSchema = mongoose.Schema({
  dailyconfirmed: { type: String, required: true },
  dailydeceased: { type: String, required: true },
  dailyrecovered: { type: String, required: true },
  date: { type: String, required: true },
  totalconfirmed: { type: String, required: true },
  totaldeceased: { type: String, required: true },
  totalrecovered: { type: String, required: true },
});

const covidCaseTimeSeries = mongoose.model(
  "CovidCaseTimeSeries",
  covidCaseTimeSeriesSchema
);

module.exports = covidCaseTimeSeries;
