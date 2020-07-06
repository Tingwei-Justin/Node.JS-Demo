const mongoose = require("mongoose");

var CarsScheme = new mongoose.Schema({
    ID : {
        type : String,
        required : "Required",
        index: {unique: true, dropDups: true}
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

