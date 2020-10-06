# BitCask
(Default storage engine is Riak)

- Offers high performance reads and writes
- Stores data in key-value structure
- All it's key is stored in RAM(usage : only use it when all your key can fit in the available RAM)
- Values, as it takes more space, are stored in disk.
- On running out of disk space, files are logged as segments. On reaching a certain limit new segment files are created
- A Segment may contain duplicate keys in log. Compaction process runs in background which removes duplicates and stores
only the recent ones.

Best suited for places where the value for each key is updated frequently.
Also, for places where you need to update values very frequently. 
For example : 
- key = video url, value = view count

## Crash Recovery

Bitcask stores snapshots of each segment's hash map on disk. Which can be loaded into memory more quickly.

# Working

- Write the files in an in-memory balanced tree data structure as it comes in.(in-memory tree is called memtable)
- As the memtable size grows. Data is written in SSTable(Sorted String Table).
- As the data in memtable is sorted. Writing data in SSTable is efficient.
- In order to serve the read request, Data is tried to pick from memtable, then the SSTable.
- After proper intervals run the compaction process on the SSTables.

