const express = require("express")
const app = express();

const cookieParser = require("cookie-parser")
const path = require("path")
const port = 3000
const ownerRouter = require("./routes/ownerRouter")
const userRouter = require("./routes/userRouter")
const productsRouter = require("./routes/productsRouter")

const db = require("./config/mongoose-connection")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes setup
app.use('/owners', ownerRouter);
app.use('/users', userRouter);
app.use('/products', productsRouter);

app.get("/", (req, res) => {
  res.send("hey");
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})