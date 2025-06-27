const express = require("express")
const router = express.Router();
const ownerModel = require("../models/owner-model")

// console.log(process.env)
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res
          .status(503)
          .send("You don't have permission to create a new owner")
      }
      let { fullname, email, password } = req.body;
      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      })
      res.status(201).send(createdOwner);
    } catch (error) {
      console.error("Error creating owner:", error);
      res.status(500).send("Internal server error");
    }
  })
}

router.get("/", (req, res) => {
  res.send("hey owner");
})


module.exports = router;