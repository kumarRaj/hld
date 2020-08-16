const redis = require("redis");
const client = redis.createClient({host: 'redis'});
const { promisify } = require('util');

client.on("error", function(error) {
    console.error(error);
});
const getAsync = promisify(client.get).bind(client);

/*
const getAsync = return () => new Promise({
	return client.get()
})
*/

module.exports = {
    health: function(){
        client.set("health", "OK", redis.print);
        return getAsync("health")
    },
    save: function(sessionID){
    	client.set()
    	client.set("sessionID"+sessionID , sessionID , 'EX' , 20, redis.print) 

    },
    get: function(){
    	return getAsync("sessionID")
    }
}