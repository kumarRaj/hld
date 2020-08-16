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
const scan = promisify(client.sscan).bind(client);

module.exports = {
    health: function(){
        client.set("health", "OK", redis.print);
        return getAsync("health")
    },
    save: function(sessionID, pageID){
    	let value = {sessionID : Date.now()};
    	client.sadd(pageID, JSON.stringify(value));
    },
    get: async function(pageID){
    	const found = [];
		let cursor = '0';
		let pattern = '*'
		do {
			debugger;
		    const reply = await scan(pageID, cursor, 'MATCH', pattern);
		    cursor = reply[0];
		    found.push(...reply[1]);
		} while (cursor !== '0');
		return found;
    }
}