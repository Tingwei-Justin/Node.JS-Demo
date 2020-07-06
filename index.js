const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path")
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");

const CarController = require("./controllers/cars")

application.use(bodyparser.urlencoded({
    extended : true
}));

application.set('views', path.join(__dirname, "/views/"))

application.engine("hbs", expressHandlerbars({
    extname : "hbs", 
    defaultLayout : "mainlayout",
    layoutsDir : __dirname + "/views/layouts"
}))

application.set("view engine", "hbs")

application.get('/', (req, res)=>{
    res.render("index", {})
})

application.use("/inventory", CarController)

application.listen("8080", "127.0.0.1", ()=>{
    console.log("Server started")
})


