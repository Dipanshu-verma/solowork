 

const express = require("express");
const fs = require("fs");
const cors = require('cors');
const { authRouter } = require("./controler/auth");
const { connection } = require("./mongo/db");


const app = express();
app.use(cors());
app.use(express.json());


app.use("/", authRouter)
 



app.listen(8000, async() => {
  try{
   
    await connection;
    console.log("mongo is connected");
  }catch(err){
    console.log(err);
  }
  
});




 