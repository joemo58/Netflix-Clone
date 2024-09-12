## Setup

Install Kind (Kubernetes in Docker) as per the [website](https://kind.sigs.k8s.io/docs/user/quick-start/) (I prefer to use the Brew install on Mac):

```bash
brew install kind
```

Create the cluster

```bash
kind create cluster --config kind-cluster-config.yaml
```

Install NGINX ingress controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

Wait until the nginx controller is up and running (this may take a little while)

```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
```

Once this has completed you can confirm the controller is running:

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

---

# Commands to deploy to MiniKube

## Make sure all images are built

```bash
docker build -t netflix-clone/streamingservice:latest ../backend/streamingservice
docker build -t netflix-clone/contentservice:latest ../backend/contentservice
docker build -t netflix-clone/userservice:latest ../backend/userservice
```

---

## Load the Docker images into Kind

```bash
kind load docker-image netflix-clone/streamingservice netflix-clone/contentservice netflix-clone/userservice
```

## Check the images have been loaded into the node correctly
```bash 
docker exec -it kind-control-plane crictl images
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