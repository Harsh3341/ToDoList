const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine','ejs');


app.get("/",function(req,res){

    var today = new Date();
    // var currentDay = today.getDay();
    // const dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // res.render("index",{TodaysDay:dayName[currentDay]})
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US",options);

    res.render("index",{TodaysDay:day})
    
});

app.listen(3000,function(){
    console.log("Server has started at port 3000");
});  