#!/bin/bash

# Exit on any error
set -e

echo "Building Docker images locally..."
docker build -t netflix-clone/streamingservice:latest ../backend/streamingservice
docker build -t netflix-clone/contentservice:latest ../backend/contentservice
docker build -t netflix-clone/userservice:latest ../backend/userservice

echo "Loading Docker images into Kind cluster..."
kind load docker-image netflix-clone/streamingservice netflix-clone/contentservice netflix-clone/userservice

echo "Verifying images in the Kind node..."
# should add some error checking in here to error out if the images are not found in the text output (grep)
docker exec -it kind-control-plane crictl images

echo "Deploying services to the cluster..."
kubectl apply -f user-service-deployment.yaml
kubectl apply -f content-service-deployment.yaml
kubectl apply -f streaming-service-deployment.yaml

echo "Applying Ingress configuration..."
kubectl apply -f ingress.yaml

echo "Deployment completed. Check the status of your services and ingress."
