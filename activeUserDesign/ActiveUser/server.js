var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.get('/', function(req, res){
	res.status(200).send({"status" : "OK"});
})

app.get('/activeUsers', function(req, res){
	let pageID = req.query.pageID;

	var requestOptions = {
	  method: 'GET',
	};

	fetch("http://localhost:8081/visits?pageID="+pageID, requestOptions)
	  .then(response => response.json())
	  .then(data => {
	  	res.status(200).send({"count" : data['activeUsers']});
	  })
	  .catch(error => console.log('error', error));

	
})


var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("ActiveUser app listening at http://" + host + ":" + port)
})