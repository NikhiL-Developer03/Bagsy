const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  console.log(process.env.JWT_KEYS);
  return jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEYS)
}

module.exports.generateToken = generateToken;