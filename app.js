var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser");

var app = express();
	
// mongoose.connect("mongodb://localhost/portfolio", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true
//   })
//   .then(() => console.log('DB connected!'))
//   .catch(err => {
//     console.log(`DB Connection Error: ${err.message}`);
//   });
app.use(bodyParser.urlencoded({extended:true}));





app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req,res){
	res.render("landing");
});


app.listen(3000, function(req,res){
	console.log("server is listening.....");
});