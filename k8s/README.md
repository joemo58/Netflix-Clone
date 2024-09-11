# MacOS Setup
## startup minikube and ensure the minikube ip is in your hostfile


install minikube as per the [website](https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Fx86-64%2Fstable%2Fbinary+download)

Install the following libraries if using an M1 silicon macbook.
this will stop minikube using the docker drive, which won't let you access host/ip assigned to the ingress resource


```bash
brew install qemu
brew install socket_vmnet
brew tap homebrew/services
HOMEBREW=$(which brew) && sudo ${HOMEBREW} services start socket_vmnet
```


Spin up the cluster
```bash
minikube start
```
**OR:** 
```bash
minikube start --driver qemu --network socket_vmnet
```

Add the ingress controller add-on to enable incoming traffic into minikube
```bash
minikube addons enable ingress
```
Verify nginx controller is up and running
```bash 
kubectl get pods -n ingress-nginx
```
The output should be similar to:
```bash
NAME                                        READY   STATUS      RESTARTS    AGE
ingress-nginx-admission-create-g9g49        0/1     Completed   0          11m
ingress-nginx-admission-patch-rqp78         0/1     Completed   1          11m
ingress-nginx-controller-59b45fb494-26npt   1/1     Running     0          11m
```

Add netflix-clone.local URL to hosts file:
```bash
ENTRY="127.0.0.1       netflix-clone.local"
sudo sh -c "echo '$ENTRY' >> /etc/hosts"
```
---
# Windows Setup

* Comming soon...
---
# Commands to deploy to MiniKube

## Setup your shell to use Minikube's Docker Daemon (rather than local Docker Desktop)

```bash
eval $(minikube -p minikube docker-env)
```

---

## Make sure all images are built

```bash
docker build -t netflix-clone/streamingservice ../backend/streamingservice
docker build -t netflix-clone/contentservice ../backend/contentservice
docker build -t netflix-clone/userservice ../backend/userservice
```

---

## Apply the Deployments and Services:

```bash
kubectl apply -f user-service-deployment.yaml
kubectl apply -f content-service-deployment.yaml
kubectl apply -f streaming-service-deployment.yaml
```
---

## Apply the Ingress:

```bash
kubectl apply -f ingress.yaml
```
---

#


# Resetting shell to use the Docker Desktop Docker Daemon
```bash
$ eval $(minikube docker-env -u)
```