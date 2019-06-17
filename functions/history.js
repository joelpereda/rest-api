const mongoose = require("mongoose");

const History = mongoose.model("History", {
  address: String,
  date: String,
  monto: Number,
  fee: Number
});

module.exports = History;
