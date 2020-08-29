Goal : Overwhelm the server with alot of requests.

 Find a solution to fix it.

 Solution 1:
 Create replica servers to handle incoming requests.

 Solution 2:
 Increasing processing capability of server.

 Solution 3:
 Store incoming request in a Queue.

 Solution 4:x
 process response asynchronously.



 Solution 1:
 Task:
    create a loadbalancer to manage requests between servers[1]
    check incoming request limit in loadbalancer[2]
    loadbalancer will trigger a shell script[3]
    Shell Script will run docker commands to create a new server[4]
    On successful creation of server shell script will inform load balancer[5]



    Loadbalancer: Distributes network traffic among servers

    Create a server -> list of the servers it will distribute the traffic in
    Algorithm which will help in distribution
    Send back response to the correct server where we got request from
    Add/remove to the list of servers on new servers getting started or old servers which are not working
    Create a trigger point, async and non-returning in nature, while executing the distribution algorithm
    Monitor the incoming traffic




## Questions:
- How much traffic can a server handle?
- What is a loadbalancing?
    Load balancing refers to efficiently distributing incoming network traffic across a group of servers.


- How does a loadbalancer work?

- Can we get incoming request count from loadbalancer?
- Can loadbalancer trigger request?
- Who will handle the trigger from loadbalancer?
- What is the best way to do it?
- How can a docker create a second instance of the same server in different port?

Solution 3:
Task: 
    RabbitMQ will manage queue of incoming requests.
    Server will start processing requests from the above queue.
What is rabbitMQ?
How does it work?
How will nodeJS server process requests from rabbitMQ?

