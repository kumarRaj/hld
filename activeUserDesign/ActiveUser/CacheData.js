class CacheData{

	constructor(count, createdAt, expireAfterTime) {
		this.count = count;
	    this.createdAt = createdAt;
	    this.expireAfterTime = expireAfterTime;
	}

	getCachedCount(){
		let currentTime = Date.now();
		if(this.count === undefined) return -1;
		if(currentTime > (this.createdAt + this.expireAfterTime)){
			return -1;
		}
		return this.count;
	}
}


module.exports = CacheData;




