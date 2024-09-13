# Netflix Clone Local Deployment

This guide helps you set up and deploy the Netflix Clone microservices locally using Kind (Kubernetes in Docker) and NGINX Ingress.

## Prerequisites

- Install Docker on your system.
- Install [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) for creating Kubernetes clusters.

## Onboarding the services
THESE STEPS ONLY NEED TO BE RUN ONCE, DURING INITIAL SETUP/ONBOARDING

### Install Kind

Install Kind on Mac using Brew:

```bash
brew install kind
```

### Map the base URL to localhost in hosts file
This will let you access the site using the netflix-clone.local URL, rather than localhost
```bash
sudo sh -c "echo "127.0.0.1       netflix-clone.local" >> /etc/hosts"
```

## Deploying the cluster/Ingress
### Create the Kind Cluster
You only need to do this once per session (once the cluster is up and running, you can redeploy using the shell script deploy-local.sh. See section [Deploying the backend to the cluster](#Deploying-the-backend-to-the-cluster).

change directory into the K8s/ directory. Then run:

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

### The endpoints should now be accessible from your browser:
- http://netflix-clone.local/api/streaming/hit
- http://netflix-clone.local/api/content/hit
- http://netflix-clone.local/api/users/hit


---
## Debugging the logs
kubectl logs -f <pod_name>
