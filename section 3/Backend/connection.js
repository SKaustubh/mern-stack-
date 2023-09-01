const mongoose = require("mongoose");

const url =
  "mongodb+srv://kaustubhsingh37:kaustubh@clusterk.nbci0qw.mongodb.net/node-js?retryWrites=true&w=majority";

// asynchronous - return Promise
mongoose
  .connect(url)
  .then((result) => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
