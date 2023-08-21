const express = require("express");

const router = express.Router();

router.get("/add", (req, res) => {
  res.send("response from user Router");
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
