# Kubernetes 101

## How to deploy an image to kubernetes

- Create image on local - `docker build --rm -t active-user-processing ActiveUserProcessingService/`
- Create repository on docker hub called `krraj/active-user`
- Tag image `docker tag active-user-processing krraj/active-user:v1`
- Push image to above repository `docker push krraj/active-user:v1`
- Create a kubernetes deployment. See example here - `activeUserDesign/kubernetes/controller/active-user-deployment.yaml`
- Apply deployment in kubernetes `kubectl apply -f activeUserDesign/kubernetes/controller/active-user-deployment.yaml`
- To verify check `kubectl get pods`
- To see logs use `kubectl logs {podname}`

### What is repository

Repository is the name of the image. You specify a name in docker hub and create the repository.  
Image repository format - `username/imagename:version`.

### What does docker tag command mean

The docker tag command is used to specify remote repository so that docker push can identify and push the image.

# Kubernetes 102

### Why kubernetes
- It helps in scaling. WHat this means is - it is very easy to setup multiple instances of my application.
- It can handle loadbalancing for me.
- It can scale up automatically.
- It can manage network and connectivity automatically between services.

### Set up gcloud and kubectl credentials
- Create an instance of kubernetes engine in google cloud.
- Create a cloud shell. A cloud shell is an external vm within the same network as my cluster which has access to my cluster.
- To be able to run commands on the cluster use the command below
`gcloud container clusters get-credentials [cluster-name] --zone [cluster-zone]`


# Kubernetes 103

### Goal
- Deploy the active-user-service and dependencies
- Access the service from local

### Task
- Create kubernetes in Google Cloud
- Configure kubernetes
- Deploy 
- Give required access(firewall)
- Test

How to give access to firewall access to a particular node in a cluster
10.4.3.93


# Kubernetes 104

### Goal

- Access Redis from active user processing service

### Task
- Create Redis POD 
- Create service for Redis POD
- Pass redis service connection info to active user processing
- Communicate between two containers, active-user and active-user-processing.
- Test.

