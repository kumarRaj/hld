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
     -> ActiveUser service in docker nodejs [3] -DONE
        -> Dockerize [missing] -DONE
        -> Rest API for [GET /activeUsers]  - DONE
        -> Call ActiveUserProcessing to get active users - DONE
        -> Create local cache - DONE
     -> Create Redis username/password/hostname. [1.1] - DONE
        -> Redis docker [1.2] - DONE
     -> docker-compose with three images -> ActiveUser,ActiveUserProcessing and Redis - DONE
        -> Verify if they can interact with each other [4] - DONE
     -> Testing using mock data to see if things work - DONE
     
     
     /visit 
##     TODO: 
- ActiveUserProcessing docker [2] - DONE 
    - Dockerize [missing] - DONE 
- Rest API for [POST /activeUser ] - DONE 
- Redis update with TTL - DONE 
- Rest API for [GET /visits?pageId] - DONE 
- Query Redis - DONE 
- ActiveUser service in docker nodejs [3] -DONE 
- Dockerize [missing] -DONE 
- Rest API for [GET /activeUsers] - DONE 
- Call ActiveUserProcessing to get active users - DONE 
- Create local cache - DONE 
- Create Redis username/password/hostname. [1.1] - DONE 
- Redis docker [1.2] - DONE 
- docker-compose with three images 
- ActiveUser,ActiveUserProcessing and Redis - DONE 
- Verify if they can interact with each other [4] - DONE 
- Testing using mock data to see if things work - DONE


     
     


     
     
     

To run ActiveUserProcessing without docker-compose

```
 docker run  -p 6379:6379 redis:alpine
 cd ActiveUserProcessingService
 npm install
 npm start
 ```




 


