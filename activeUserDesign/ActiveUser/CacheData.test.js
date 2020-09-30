const CacheData = require('./CacheData')

test('test to see if count is getting stored', () => {
	let cacheData = new CacheData(4,Date.now(),60)
	expect(cacheData.getCachedCount()).toBe(4);
})

test('test to see if cacheData is erasing data after 2 secs', async () => {
	let cacheData = new CacheData(4,Date.now(),2000)
	await sleep(2000);
	expect(cacheData.getCachedCount()).toBe(-1)
})

test('test to see if cacheData is not erasing data after 1 secs', async () => {
	let cacheData = new CacheData(4,Date.now(),2000)
	await sleep(1000);
	expect(cacheData.getCachedCount()).toBe(4)
})

function sleep(ms) {   return new Promise(resolve => setTimeout(resolve, ms)); }