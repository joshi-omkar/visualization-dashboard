const express = require("express");
const mongoose = require("mongoose");
const User = require("./model");
const Data = require("./data/jsondata")
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const DB = "mongodb+srv://dbOmkar:omkar@cluster0.vnwsu.mongodb.net/data?retryWrites=true&w=majority"

try {
  // Connect to the MongoDB cluster
   mongoose.connect(
    DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}

User.insertMany(Data);


app.get("/",  (request, response) => {
      
  response.send("hello from backend")
});

app.get("/data",  (request, response) => {
  
  User.find({}).then(
    function(users){
      response.send(users)
    }
  )
  
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});