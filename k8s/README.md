## Setup your shell to use Minikube's Docker Daemon (rather than local Docker Desktop)

```bash
$ eval $(minikube -p minikube docker-env)
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
$ kubectl apply -f ingress.yaml
```

---

# Resetting shell to use the Docker Desktop Docker Daemon
```bash
$ eval $(minikube docker-env -u)
```