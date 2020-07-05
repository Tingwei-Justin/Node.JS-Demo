const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Justin", { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true },  (error)=>{
    if(!error) {
        console.log("Success connected");
    }
    else {
        console.log("Error connecting to database")
    }
})  


const Cars = require("./car.model");
