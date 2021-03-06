var express = require("express"),
	bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({extended:true}));





app.set("view engine","ejs");
app.use(express.static(__dirname + '/public/'));


// current timestamp in milliseconds
let ts = Date.now();

let date_ob = new Date(ts);
let day = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let date = month + "/" + day + "/" + year;



app.get("/", function(req,res){
	res.render("landing");
});


app.get("/contact", function(req,res){
	res.render("contact", {date: date} );
});

app.listen(PORT,function(){
console.log('server successfully started on port '+PORT);
});