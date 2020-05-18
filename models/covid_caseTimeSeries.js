const mongoose = require("mongoose");
const Schema = require("mongoose");

const listSchema = new mongoose.Schema({
  dailyconfirmed: { type: String, required: true },
  dailydeceased: { type: String, required: true },
  dailyrecovered: { type: String, required: true },
  date: { type: String, required: true },
  totalconfirmed: { type: String, required: true },
  totaldeceased: { type: String, required: true },
  totalrecovered: { type: String, required: true },
});

const checkDataValidity = (value) => {
  return value.length > 0;
};

const covidCaseTimeSeriesSchema = new mongoose.Schema({
  cases_time_series: {
    type: [listSchema],
    required: true,
    validate: [checkDataValidity, "The array cannot be empty"],
  },
  useraccess: [{ type: Schema.Types.ObjectId, ref: "User" }],
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
