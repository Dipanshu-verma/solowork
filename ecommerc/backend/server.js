 

const express = require("express");
const fs = require("fs");
const cors = require('cors');
const { authRouter } = require("./controler/auth");


const app = express();
app.use(cors());
app.use(express.json());


app.use("/", authRouter)
// app.post("/register", );



app.listen(8000,() => {
  console.log("Server is running.");
});




 