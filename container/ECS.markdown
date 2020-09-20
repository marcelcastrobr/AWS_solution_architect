# Elastic Container Service

## Background
Containers are:
- Package that contains an application, libraries, runtime and tools required to run it.
- Docker is a container engine
- Provides isolation benefits compared to virtualization, such as less overhead and faster starts than VMs.
- Containerized applications are portable.


![Elastic Cloud Container](/images/ecs.png)



## Facts
- ECS is a container management service that makes it easy to run, stop and manage Docker containers on a cluster. 
- IAM role needs to be associated with the ECS task definition.

![Elastic Cloud Container](/images/ecs-2.png)

## ECS Components:
- Cluster: fargate or ECS EC2 instances
- Task Definition: Similar to a Dockerfile
- Container Definition: Defines the individual containers a task uses.
- Task: one working copy of an application
- Service: Allow task to be scaled (e.g. 1 to 10 tasks) 
- Registry: repository for container images.


## AWS Fargate
It is a serverless compute engine for containers that works with  ECS (Elastic Container Service) and EKS (Elactis Kubernetes Service). Fargate is a managed serverless  solution.
Fargate runs each task or pod in its own kernel providing the tasks and pods their own isolated compute environment.

## ECR - Elastic Container Service
- AWS managed docker container registry (similar fo dockerhub)
- store, manage and deploy images
- integrated with ECS and EKS
- pay for storage and data exchange.





# EKS - Elastic Kubernetes Service
- K8s is open-source software
- same toolset on-premises and in cloud
- containers grouped in pods (i.e. tasks in ECS)
- supports EC2 and Fargate
- Why use EKS?
    - already using K8s and want to migrate to AWS
    
