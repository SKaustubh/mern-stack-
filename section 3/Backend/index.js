const express = require("express");

const userRouter = require("./routers/userRouter");
//initialize the express
const app = express();
const port = 5000;

//middleware
app.use("/user", userRouter);
app.use("/getall", userRouter);
app.use("/update", userRouter);
app.use("/getbyid", userRouter);
app.use("/getbyemail", userRouter);

app.get("/", (req, res) => {
  res.send("response from index");
});

app.get("/home", (req, res) => {
  res.send("response from home");
});
app.get("/add", (req, res) => {
  res.send("response from add");
});

app.get("/getal", (req, res) => {
  res.send("response from getall");
});
//home
// add
//getall

// starting the server
app.listen(port, () => {
  console.log("express server started");
});
