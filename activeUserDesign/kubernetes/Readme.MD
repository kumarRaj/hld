# Kubernetes 101

## How to deploy an image to kubernetes

- Create image on local - `docker build --rm -t active-user-processing ActiveUserProcessingService/.`
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