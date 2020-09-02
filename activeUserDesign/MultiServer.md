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
 
    - Create a loadbalancer to manage requests between servers [1]
    - Enable autoscaling for servers based on certain criteria [2]

    Loadbalancer: Distributes network traffic among servers

    - Create a server -> list of the servers it will distribute the traffic in
    - Algorithm which will help in distribution
    - Send back response to the correct server where we got request from
    - Add/remove to the list of servers on new servers getting started or old servers which are not working
    - Create a trigger point, async and non-returning in nature, while executing the distribution algorithm
    - Monitor the incoming traffic


Task: 
    - Install kubernetes and configure
    - Create multiple containers
    - Redirect requests to specific container based on algo
    - Analyze the criteria and get the data on which we want to autoscale the containers
    - Write the above criteria in Kubernetes Config file
    - Add/Remove of Container, logic should be specified in Kubernetes Config file 


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

