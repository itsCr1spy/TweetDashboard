const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// Endpoint to Get a list of tweets

app.get("/getData", function (req, res) {
  let tweetList = [];
  fs.readFile(__dirname + "/" + "tweetData.json", "utf8", function (err, data) {
    data = JSON.parse(data);
    let args = Object.keys(data);
    tweetList = args.map(function (key) {
      return data[key] ;
    });
    res.send(tweetList);
  });
});

var savedData = {
	"user5": {
			"id":5,
			"firstname":"Liudmyla",
			"lastname":"Nagorna",
			"email":"mila@gmail.com"
		},
} 

app.post('/addData', async (req, res)=>{
	//console.log("hello")
	//console.log(req.body)
	fs.readFile(__dirname + "/" + "saveData.json", 'utf8', function(err, data){
			data = JSON.parse(data);
			//console.log(res.body);
			data["user5"] = savedData["user5"];
			//console.log("bye")
			//console.log(data);
			res.send(JSON.stringify(data));
	});
})

app.delete('/block', function (req, res) {
	// First retrieve existing users
	fs.readFile( __dirname + "/" + "tweetData.json", 'utf8', function (err, data) {
		 data = JSON.parse( data );
		 delete data["user" + 3];
			
		 console.log( data );
		 res.end( JSON.stringify(data));
	});
})
// Create a server to listen at port 8080
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("REST API demo app listening at http://%s:%s", host, port);
});
