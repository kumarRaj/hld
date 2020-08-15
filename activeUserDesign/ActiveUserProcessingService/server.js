var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var RedisClient = require('./redisService/redis')

app.use(express.json())

var urlencodedParser = bodyParser.urlencoded({extended: false});
app.get('/', function (req, res) {
    res.status(200).send({ "status": "OK" });
});

app.get('/redisHealth', async function (req, res) {
    let redisHealth = await RedisClient.health()
    res.status(200).send(redisHealth);
});

app.post('/activeUser', function (req, res) {
	let requestBody = req.body;
	let sessionID = requestBody.sessionID;
	RedisClient.save(sessionID)
	res.status(200).send();
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://" + host + ":" + port)
})