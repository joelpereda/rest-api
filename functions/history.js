const mongoose = require("mongoose");

const History = mongoose.model("History", {
  date: String,
  monto: Number,
  fee: Number
});

module.exports = History;
