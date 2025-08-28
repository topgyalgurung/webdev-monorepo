#!/bin/bash

echo "just basic minikube command lines"

minikube start 
kubectl get nodes 
minikube update-check
minikube stop
minikube delete  # delete cluster 
kubectl cluster-info
kubectl get namespaces
kubectl get pods -A