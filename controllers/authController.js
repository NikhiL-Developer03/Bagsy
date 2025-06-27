const userModel = require("../models/user-model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { generateToken } = require("../utils/genrateToken")

module.exports.registerUser = async function (req, res) {
  try {
    let { fullname, email, password } = req.body;

    let user = await userModel.findOne({ email: email })
    if (user) return res.status(401).send("You have an account, please login.");

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message)
        else {
          let user = await userModel.create({
            fullname,
            email,
            password: hash,
          })
          let token = generateToken(user)
          res.cookie("token", token)
          res.send("user created successfully");
        }
      })
    })
  }
  catch (err) {
    console.log(err.message)
  }
}
module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (!user) return res.send("Email or Password Incorrect")
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        let token = generateToken(user);
        res.cookie("token", token);
        // res.send("you can login");
        res.redirect("/shop");
      }
      else {
        return res.send("Email or Password Incorrect")
      }
    })
  }
  catch (err) {
    console.log(err.message)
  }
}
module.exports.logoutUser = async function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
}