const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose")
const config = require('config')

mongoose
  .connect(`${config.get("MONGODB_URI")}/bagsy`)
  .then(function () {
    dbgr("Mongoose connected Successfully!");
  })
  .catch(function (err) {
    dbgr(err);
  })

module.exports = mongoose.connection;