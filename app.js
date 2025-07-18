const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path")
const expressSession = require("express-session")
const flash = require("connect-flash")
const port = 3000

require("dotenv").config();

const indexRouter = require("./routes/index")
const ownerRouter = require("./routes/ownerRouter")
const userRouter = require("./routes/userRouter")
const productsRouter = require("./routes/productsRouter")

const db = require("./config/mongoose-connection")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: process.env.EXPRESS_SESSION_SECRET,
}))
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes setup
app.use('/', indexRouter);
app.use('/owners', ownerRouter);
app.use('/users', userRouter);
app.use('/products', productsRouter);


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})