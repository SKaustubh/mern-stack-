const express = require("express");

//initialize the express
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("response from index");
});

app.get('/home' , (req,res) => {
    res.send("response from home");
});
app.get('/add' , (req,res) => {
    res.send("response from add");
});

app.get('/getall' , (req,res) => {
    res.send("response from getall");
});
//home
// add
//getall

// starting the server
app.listen(port, () => {
  console.log("express server started");
});
