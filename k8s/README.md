# Netflix Clone Local Deployment

This guide helps you set up and deploy the Netflix Clone microservices locally using Kind (Kubernetes in Docker) and NGINX Ingress.

## Prerequisites

- Install Docker on your system.
- Install [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) for creating Kubernetes clusters.

## Setup

### Install Kind

Install Kind on Mac using Brew:

```bash
brew install kind
```

### Create the Kind Cluster
You only need to do this once per session (once the cluster is up and running, you can redeploy using the shell script deploy-local.sh. See section [Deploying the backend to the cluster](#Deploying-the-backend-to-the-cluster)).

cd into the K8s/ directory

```bash
kind create cluster --config kind-cluster-config.yaml
```

### Install NGINX Ingress Controller (enables the cluster to accept incoming traffic)
Install the NGINX ingress controller:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

Wait until the NGINX controller is up and running:

```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
```

## Deploying the backend to the cluster
Ensure the deploy-local.sh script has execute permissions
```bash
chmod +x deploy-local.sh
```
Run the script to build the latest images and deploy to the kind cluster
```bash
./deploy-local.sh
```