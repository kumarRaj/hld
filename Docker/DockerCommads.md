# Docker Commands

**Docker run command is used to run an container from an image**

- docker run nginx

**Name a container**

- docker run -d --name=<container name> <image>

**Docker ps cpmmand lists all running containers and some basic info**

- docker ps

// to view all containers whether preciously exited or deleted.

- docker ps -a

**Stop a running container**

- docker stop <container>

**Remove stop or exited container**

- docker rm <container>

**View images**

- docker images

**Remove images**

- docker rmi <image name>
  [Note: make sure no container is using the image]

**Download docker image and not run**

- docker pull <image name>

**Execute command on a running container**

- docker exec <container name> <command>

**Attach and Detach**
//Attached mode

- docker run nginx
  //Detach mode
- docker run -d nginx

**Execute commands inside container**

- docker run -it centos bash

**Make container after running**

- docker run centos sleep <time in sec>

**Interactive mode**

- docker run -i <image>

- docker run -it <image>
  //refer notes for explanation

**Get Container detailed description**

- docker inspect <container>

**Container Logs**

- docker logs <container>

**Override sleep command**

- docker run --entrypoint <command> <image> <command value>

**Docker link**

- docker run -d --name=<container name> -p <docker host port>:<container port> --link <container name or id>:alias <image>
