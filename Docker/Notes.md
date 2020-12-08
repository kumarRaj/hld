# Notes

To create own images have with the format
<docker user id>/<image name>

Docker doesn't wait for interaction or userinput
So to run an image in interactive mode. Run:
docker run -i <image>
To interact with the terminal of the container
docker run -it <image>

### PORT Mapping

To access a running container from outside we can map the port

docker run -p <docker host port>:<container port> <image>

docker host port = this is the port you will access from web browser
container port = The port in which your web app is running

### Volume Mapping

Each container has its own file system.
So on deleting a container all it's data also gets deleted which was stored in the container.

So we can mount the data outside the docker container so that when the container gets deleted out data is not deleted.

docker run -v <docker host file directory>:<container file directory> <image>

### Create your own image

I want to do build a customized image and do the following

- Os-CentOS
- Update apt repo
- Install dependencies using apt
- Install Python and dependencies using pip
- Copy source code to a specific folder
- Run the web server using "flask" command

Create a Dockerfile
[Note: speeling of the Dockerfile is case sensitive]

Dockerfile
FROM centos

RUN apt-get update
RUN apt-get install python

    RUN pip install flask
    RUN pip install flask-mysql

    COPY . /opt/source-code

    ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run

Build image
`docker build Dockerfile -t <docker user id>/<image name>`

-t = tag for the image

To push your image in dockerhub registry

docker push <docker user id>/<latest image you created>

Dockerfile pattern
INSTRUCTION ARGUMENT

- docker image must be based on an existing docker image
- Docker file must have the FROM instruction

ENTRYPOINT vs CMD

The ENTRYPOINT specifies a command that will always be executed when the container starts.
The CMD specifies arguments that will be fed to the ENTRYPOINT
If you want to make an image dedicated to a specific command you will use ENTRYPOINT ["/path/dedicated_command"]
If you want to make an image for general purpose, you can leave ENTRYPOINT unspecified and use CMD ["/path/dedicated_command"] as you will be able to override the setting by supplying arguments to docker run
For example, if your Dockerfile is:

```
FROM debian:ubuntu
ENTRYPOINT ["/bin/ping"]
CMD ["localhost"]
```

You can also write this:

```
FROM debian:wheezy
CMD ["/bin/ping", "localhost"]
```

## Docker Compose

links is a command line option to link varios two containers together.
docker run -d --name=vote -p 5000:80 --link redis:redis voting-app
docker run -d --name=<container name> -p <docker host port>:<container port> --link <container name or id>:alias <image>

**Version 1**

```
docker-compose.yml
    <conatainer name>:
        image: <image name or path>
        ports:
            - <Docker Host port>:<Container port>
        links:
            - <container name we want to link>
```

**Example**

```
docker-compose.yml
    redis:
        image: redis
    db:
        image: postgres:9.4
    vote:
        image: ./vote
        ports:
            - 5000:80
        links:
            - redis
```

**Version 2**
We now need ro specify version.
Containers will come under services section.
links is not longer required. All containers will be linked
We can mention a hierarchy if we want to load the containers in a hierarchy.

```
docker-compose.yml
    version: 2
    services:
        <conatainer name>:
            image: <image name or path>
            ports:
                - <Docker Host port>:<Container port>
            depends_on:
                - <container name>
```

**Example**

```
docker-compose.yml
    version: 2
    services:
        redis:
            image: redis
        db:
            image: postgres:9.4
        vote:
            image: ./vote
            ports:
                - 5000:80
            depends_on:
                - redis
```

**Version 3**

```
docker-compose.yml
    version: 3
    services:
        <conatainer name>:
            image: <image name or path>
            ports:
                - <Docker Host port>:<Container port>
            depends_on:
                - <container name>
```

**Example**

```
docker-compose.yml
    version: 3
    services:
        redis:
            image: redis
        db:
            image: postgres:9.4
        vote:
            image: ./vote
            ports:
                - 5000:80
            depends_on:
                - redis
```

**Manage Traffic**

```
docker-compose.yml
    version: 3
    services:
        redis:
            image: redis
            networks:
                - backend
        db:
            image: postgres:9.4
            networks:
                - backend
        vote:
            image: ./vote
            ports:
                - 5000:80
            depends_on:
                - redis
            networks:
                - frontend
                - backend
        result:
            image: ./result
            networks:
                - frontend
                - backend

    networks:
        frontend:
        backend:
```

## Docker Registry

Docker Registry - Central Repository of all Docker images

## Docker Engine

Docker engine is nothing but host - docker installed on it

Docker Engine consists of Docker Deamon, REST API, Docker CLI

Docker Daemon is a backgroung object that manages such as images, containers, volumes and networks.

REST API server is used so that programs can talk to the Deamon and give instructions

Docker CLI is a command line interface for executing actions, It can be on another host and still interact with REST API

//connect to remote REST API
docker -H=remote-docker-engine:port <image name>
docker -H=10.132.23.140:2375 nginx

## Containerization

Docker uses namespaces to differentiate process, containers, network, inter process communication, mount, etc.

Namespace Isolation technique

//need to read

## Docker Network

There are three types of network

- Bridge(default)
- none
- host

select network.

Bridge is the default network

**none**
docker run Ubuntu --network=none

**host**
docker run Ubuntu --network=host
