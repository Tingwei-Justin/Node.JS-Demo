const express = require("express")
const mongoose = require("mongoose")
const sanitize = require('mongo-sanitize');

const router = express.Router()
const CarsModel = mongoose.model("Cars")


router.post('/', function (req, res) {
    // console.log(req.body)
    var searchContent = sanitize(req.body.searchContent)
    var regex = new RegExp(searchContent, 'i')
    // partial search with keywords with all fields
    CarsModel.find({$or: [
                            { ID: regex }, 
                            { Make: regex }, 
                            { Model: regex}, 
                            {Trim: regex}, 
                            {BodyStyle: regex}, 
                            {Color: regex} 
                        ]})
    .lean()
    .exec(function(error, docs){
        if (!error) {
            console.log(docs)
            res.render('carlist', { data : docs })
        }
    });
});

router.get('/', (req, res)=>{
    // var cars = new CarsModel();
    // cars.ID = "2";
    // cars.Make = "Ford";
    // cars.Model = "F-150";
    // cars.Trim = "Raptor";
    // cars.BodyStyle = "Truck";
    // cars.Color = "Blue";
    // cars.save(); 

    CarsModel.find({})
        .lean()
        .exec(function(error, docs){
            if (!error) {
                // console.log(docs)
                res.render('carlist', { data : docs })
            }
        });
});

module.exports = router;