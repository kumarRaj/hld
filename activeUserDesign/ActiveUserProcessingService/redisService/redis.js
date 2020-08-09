const redis = require("redis");
const client = redis.createClient({host: 'redis'});
const { promisify } = require('util');

client.on("error", function(error) {
    console.error(error);
});
const getAsync = promisify(client.get).bind(client);

module.exports = {
    health: function(){
        client.set("health", "OK", redis.print);
        return getAsync("health")
    }
}