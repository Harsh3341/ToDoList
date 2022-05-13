const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = [];
var workItems = [];


app.get("/", function (req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("index", { TodaysDay: day, UpdatedItems: items });

});

app.post("/", function (req, res) {
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render('index',{TodaysDay: "Work List",UpdatedItems: workItems});
});

app.post("/work",function(req,res){
    var item = req.body.newItem;

    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function () {
    console.log("Server has started at port 3000");
});  