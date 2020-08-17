const redis = require("redis");
const client = redis.createClient({host: 'localhost'});
const { promisify } = require('util');

client.on("error", function(error) {
    console.error(error);
});
const getAsync = promisify(client.get).bind(client);
const scan = promisify(client.sscan).bind(client);

module.exports = {
    health: function(){
        client.set("health", "OK", redis.print);
        return getAsync("health")
    },
    save: function(sessionID, pageID){
    	let value = { [sessionID]: Date.now() };
    	client.sadd(pageID, JSON.stringify(value));
    },
    getUsers: async function(pageID){
    	const found = [];
		let cursor = '0';
		let pattern = '*'
		do {
		    const reply = await scan(pageID, cursor, 'MATCH', pattern);
		    cursor = reply[0];
		    found.push(...reply[1]);
		} while (cursor !== '0');
		return found;
	},
	deleteRecordsOlderThan15Minutes: async function(pageID) {
		var expiredTime = new Date ();
		expiredTime.setMinutes(expiredTime.getMinutes() - 5);
		var options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
		console.log(expiredTime.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016
		let cursor = '0';
		let pattern = '*'
		do {
			const reply = await scan(pageID, cursor, 'MATCH', pattern);
			var sessions = reply[1];
			sessions.forEach(stringSession => {
				const session = JSON.parse(stringSession);
				const key = Object.keys(session);
				if (session[key] < expiredTime) {
					client.srem(pageID, reply[1]);
				}
			});
			cursor = reply[0];
		} while (cursor !== '0');
	}
}