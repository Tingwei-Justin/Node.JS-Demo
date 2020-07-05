const mongoose = require("mongoose");

var CarsScheme = new mongoose.Schema({
    ID : {
        type : String,
        required : "Required"
    },
    Make : {
        type : String
    },
    Model : {
        type : String
    },
    Trim : {
        type : String
    },
    BodyStyle : {
        type : String
    },
    Color : {
        type : String
    }
});
CarsScheme.index({'$**': 'text'});

mongoose.model("Cars", CarsScheme)

