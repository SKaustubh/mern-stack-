const express = require("express");
const Model = require("../models/userModel");
const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  res.send("response from add user Router");
});

router.get("/getall", (req, res) => {
  res.send("response from user Router getall");
});

router.get("/getbyemail", (req, res) => {
  res.send("response from user Router getbyemail");
});
router.get("/getbyid", (req, res) => {
  res.send("response from user Router getbyId");
});
router.get("/update", (req, res) => {
  res.send("response from user Router for update");
});

module.exports = router;
