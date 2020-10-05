# BitCask
(Default storage engine is Riak)

- offers high performance reads and writes
- stores data in key-value structure
- all it's key is stored in RAM(usage : only use it when all your key can fit in the available RAM)
- values, as it takes more space, are stored in disk.

Best suited for places where the value for each key is updated frequently.
Also, for places where you need to update values very frequently. 
For example : 
- key = video url, value = view count

