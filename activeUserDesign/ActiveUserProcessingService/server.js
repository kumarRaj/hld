var express = require('express');
var app = express();
var RedisClient = require('./redisService/redis')

app.get('/', function (req, res) {
    res.status(200).send({ "status": "OK" });
});

app.get('/redisHealth', async function (req, res) {
    let redisHealth = await RedisClient.health()
    res.status(200).send(redisHealth);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://" + host + ":" + port)
})