// Basic setup for express app

// const express = require("express")
// const app = express();
// const { name } = require("ejs")

// const cookieParser = require("cookie-parser")
// const path = require("path")
// const port = 3000

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("hey");
// })

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`)
// })

// Imp: Db connection string ek bar hi use hoti hai

// Database Modeling
// userModel ->
// full name - string
// email - string
// password - string
// cart - array
// isadmin - boolean
// order - array
// contact - number
// picture - db

// productModel ->
// image
// name
// price
// discount
// bgcolor
// panelcolor
// textcolor

// ownerModel ->
// fullname: String,
// email: String,
// password: String,
// product: Array,
// picture: String,
// gstin: String,

// Router setup

// Debug
// const dbgr = require("debug")("development:mongoose")
// debug invirnment variables
// export DEBUG = development:*
// if you don't want to print this
// export DEBUG =

// environment specific routes
// console.log(process.env)
// console.log(process.env.NODE_ENV);

// User Authentication & Functionality
// / -> sinup or login
// /shop -> shop
// /users/cart -> cart
// /admin -> admin panel
// /owner/products -> show all products
// /owner/admin -> admin panel to create products

// Explore Packages
// const expressSession = require("express-session")
// const flash = require("connect-flash")