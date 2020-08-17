Diagram - https://app.diagrams.net/#G1Fh64W8sPWd7aeksvmh-jIGmvGa9NGSma

ActiveUserProcessing Service

POST /visit
    -> Database Update

Database
 - Redis
 - JavaScript

 /visit
 TODO:
     -> ActiveUserProcessing docker [2] - DONE
        -> Dockerize [missing] - DONE
        -> Rest API for [POST /activeUser ] - DONE
            -> Redis update with TTL - DONE
        -> Rest API for [GET /visits?pageId] - DONE
            -> Query Redis - DONE
     -> ActiveUser service in docker nodejs [3]
        -> Dockerize [missing]
        -> Rest API for [GET /activeUsers] 
        -> Call ActiveUserProcessing to get active users
        -> Create local cache
     -> Create Redis username/password/hostname. [1.1] - DONE
        -> Redis docker [1.2] - DONE
     -> docker-compose with three images -> ActiveUser,ActiveUserProcessing and Redis
        -> Verify if they can interact with each other [4]
     -> Testing using mock data to see if things work 

To run ActiveUserProcessing without docker-compose

```
 docker run  -p 6379:6379 redis:alpine
 cd ActiveUserProcessingService
 npm install
 npm start
 ```