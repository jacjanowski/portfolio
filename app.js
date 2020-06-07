var express = require("express"),
	bodyParser = require("body-parser");

var app = express();
	

app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
	res.render("landing");
});


app.listen(3000, function(req,res){
	console.log("server is listening.....");
});