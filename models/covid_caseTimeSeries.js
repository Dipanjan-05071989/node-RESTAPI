const mongoose = require("mongoose");
const Schema = require("mongoose");


const user = require("./User");


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

const checkData = (value) => {

  return value.length > 0;
};

const covidCaseTimeSeriesSchema = new mongoose.Schema({
  cases_time_series: {

    type: [listSchema],
    required: true,
    validate: [checkDataValidity, "The array cannot be empty"],
  },
  useraccess: [{ type: Schema.Types.ObjectId, ref: "User" }],

    type: {
      listSchema: {
        type: Array,
        validate: [checkData, "Data array connot be empty"],
      },
    },
    required: true,
  },
  useraccess: { type: Schema.Types.ObjectId, ref: user },
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
