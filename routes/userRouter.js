const express = require("express");
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require("../controllers/authController")

router.get("/", (req, res) => {
  res.send("User");
})

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

module.exports = router;