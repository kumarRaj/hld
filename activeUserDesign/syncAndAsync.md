What is sync and async?

My version:
sync : send a request and don't wait for the response
async: send a request and then wait for the response

sync : send a request and then wait for the response
async: send a request and then wait for the response later 


"wait for the response later"--but how?

async Task MyMethodAsync()
{
    var task1 = LongRunningOperationAsync();
    var task2 = LongRunningOperationAsync();
	awaitAll(task1, task2)
	task1.result + task2.result
    int result = await(task1, task2);
    Console.WriteLine(result);
}

LongRunningOperationAsync() 
{
    //external api 10 sec execution time
    
    return new Promise({
    	setTimeOut(10000)
    	return 2;
    })
}

promisify : takes a function whose last argument is a callback function and returns a function that returns promise

takes a function(add) that returns a value(int) and returns a function(anonymous) that returns a promise


Takes a function, and returns a version that returns promises.

add(){
	return a+b;
}

return () => new Promise({
		add(){
		return a+b;
	}
})





