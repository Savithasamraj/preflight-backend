const express = require("express");
const app = express();
const cors = require("cors");
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: "*",

    credentials: true,
  })
);
let url ="mongodb+srv://savitha:Savitha19@cluster0.ngd5ggy.mongodb.net/?retryWrites=true&w=majority"
  
app.post("/employee/:name", async function (req,res) {
  
  try {
    
    const connection = await mongoClient.connect("mongodb+srv://savitha:Savitha19@cluster0.ngd5ggy.mongodb.net/?retryWrites=true&w=majority");

    const db =  await connection.db("employee");
    
    
     const collection=await db.collection("users").find({"employeeid":req.params.name}).toArray()
    
    console.log(collection);
    await connection.close();
    console.log("close")
    res.json({
      collection,
    });
  } catch (error) {
    console.log(error);
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server running");
});
