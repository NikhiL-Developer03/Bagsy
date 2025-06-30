const userModel = require("../models/user-model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { generateToken } = require("../utils/genrateToken")

module.exports.registerUser = async function (req, res) {
  try {
    let { fullname, email, password } = req.body;

    let user = await userModel.findOne({ email: email })
    if (user) {
      req.flash("error", "You have an account, please login.");
      return res.redirect("/");
    }

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
          res.redirect("/shop");
        }
      })
    })
  }
  catch (err) {
    console.log(err.message)
    res.status(500).send("Something went wrong");
  }
}

module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email: email });
    if (!user) {
      req.flash("error", "Email or Password Incorrect")
      return res.redirect("/")
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        let token = generateToken(user);
        res.cookie("token", token);
        res.redirect("/shop");
      }
      else {
        req.flash("error", "Email or Password Incorrect")
        return res.redirect("/")
      }
    })
  }
  catch (err) {
    console.log(err.message)
    req.flash("error", "Something went wrong")
    res.redirect("/")
  }
}

module.exports.logoutUser = async function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
}