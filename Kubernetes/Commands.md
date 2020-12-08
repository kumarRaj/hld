# Kubernetes Commands

## create

- kubectl create -f <deployment.yml_file>
  // If you want to record your rollout then
- kubectl create -f <deployment.yml_file> --record

## check

- kubectl get deployments
- kubectl get all

// Similar for pods, replicaSets and replicationContainer

//If you want to know about pod ip address
- kubectl get pods -o wide

## update

- kubectl apply -f <deployment.yml_file>
- kubectl set image deployment/myapp-deployment nginx=nginx:1.9.1

## rollout

- kubectl rollout undo deployment/myapp-deployment
- kubectl rollout status deployment/myapp-deployment
- kubectl rollout history deployment/myapp-deployment

## Delete

- kubectl delete deployment <specify your deployment>
- kubectl delete deployment -all
  // Similar for pods, replicaSets and replicationContainer

## Firewall

- gcloud compute firewall-rules create test-node-port --allow tcp:<NODE_PORT>
//Delete
- gcloud compute firewall-rules delete test-node-port
