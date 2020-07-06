const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true },  (error)=>{
    if(!error) {
        console.log("Success connected");
    }
    else {
        console.log("Error connecting to database")
    }
})  


const Cars = require("./car.model");
