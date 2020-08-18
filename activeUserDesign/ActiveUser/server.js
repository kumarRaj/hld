var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.status(200).send({"status" : "OK"});
})


var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("ActiveUser app listening at http://" + host + ":" + port)
})