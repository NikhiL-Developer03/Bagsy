const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/bagsy")
  .then(function () {
    console.log("Mongoose connected Successfully!");
  })
  .catch(function (err) {
    console.log(err);
  })

module.exports = mongoose.connection;