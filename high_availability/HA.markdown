# ELB - Elastic Load Balancer Definition
ELB allows the incomming traffic to be distributted automatically accross multiple heath EC2 instances.


## ELB Types

1. Application load balancer
- Operated at layer 7 (application layer in OSI).
- Allow defining routing rules based on content.
    - Support path-based routing (i.e. forward request based on the URL in the request).
    - Support sticky sessions.
- Supports security groups to control the traffic allowed to and from the load balancer.
- Dynamic port mapping with an ALB makes it easier to run multiple tasks on the same ECS (Elastic Container Service) on an ECS cluster.

2. Network  load balancer
- Operated at layer 4 (TCP level).
- Distributes traffic across targets within the same availability zone.
- If configured with multiple AZs and if all the targets in a single AZ fail, it routes traffic to healthy targets in the other AZs
- Ability to handle volatile workloads and scale to millions of requests per second, without the need of pre-warming
- Support for static IP/Elastic IP addresses for the load balancer
- 

3. Classic load balancer
- is ideal for simple load balancing of traffic across multiple EC2 instances.


## ELB Facts
- 504 error means gateway has timeout. Problem migh be in web server or database.
- If you need the IPv4 address of your end user, look for the X-Forwarded-For header.
- Instances monitoared by ELB are monitored as :  inService or OutOfService.
- Load balancers only work across AZs within a region.

### ELB Deregistration delay
It keeps the instance running for serving in-flight requests up to 15 minutes. By default ELB waits 300 seconds before completing the deregistration process.
ELB states of a deregistering target: draining -> unused.
If a deregistering target termintes the connection before the deregistration delay elapses, the client receives a 500-level error response. 

### ELB Slow start mode
It gives targets time to warm up before the load balancer sends them a full share of requests. 


### ELB Stick Sessions
Stick sessions are a mechanism to route requests to the same target in a target group. This is useful for servers that maintain state information in order to provide continuous experience to clients. To use stick sessions, the clients must support cookies. 
You enable stick sessions at the target group level. 

![ELB](../images/ELB.png)


# High Availability Bastion
Realized through:
- Network load balancer static IP address with two hosts in two AZs (production environment)
- Autoscaling group that launch an additional bastion in another subnet (test and dev environment)

# On Premises Strategies with AWS
- Database migration service (DMS)
    - Allow to move DBs to and from AWS
    - Support homogenous (oracle to oracle) and heterogeneous migration (oracle to RDS)

- Server migration service (SMS)
    - supports incremental replication of your on-premise servers in to AWS.
    - Can be used as a backup tool.

- AWS application discovery service

- VM import/export 

- Download Amazon Linux 2 as an ISO image.


# AWS Disaster Recovery Scenarios:
- Backup and Recovery: Simple and low cost.
- Pilot light: limited set of core services are kept running syncing mutable data.
- Warm standby: a scaled-down version of a fully functional environment is always running on the cloud.
- Multi-site: run DR on AWS as well as on your on-site infrastructure. 


# AWS Axioms
- Single AZ  will never be a right answer
- AWS Managed services should always be preferrred
- Fault tolerant and high availability (always be up and can fail over) are not the same
- Everything can fail


# AWS Operational Excellence
- AWS Config: Track resource such as EBS volumes and EC2.
- AWS CloudFormation: Convert json and yaml to infracture and resources
- AWS Trusted Advisor: check account for best practice on security, availability, etc.
- AWS Inspector: check EC2 instance for vulnerabilities.
- VPC Flow Logs: Log network traffic
- AWS Cloud Trail: Log API calls



# Solution Architecture - HIgh Availability Architecture Comparison



### EC2 with Elastic IP 

![image-20240131044145767](./assets/image-20240131044145767.png)

### Stateless web application - horizontal scaling

- DNS based load balancing 
- ability to use multiple instances
- Route53 TTL implies client may get outdated information
- DNS TTL do not allow switch full traffic automatically.

![image-20240131044248733](./assets/image-20240131044248733.png)

### ALB + ASG

- Route53 point to ALB
- New instances in service quickly due to ALB
- Time to scale is slow due to starup of EC2 instance 
- ALB is elastic but does not handle sudden huge peak of demand (need pre-warm).
- CloudWacth used for scaling

![image-20240131044725654](./assets/image-20240131044725654.png)



### ALB + ECS on EC2 (backed by ASG)

- ECS tasks on instances using docker
- Dynamic port featuring
- Tough to orchestrate ECS autoscaling + ASG autoscalaing



![image-20240131044844648](./assets/image-20240131044844648.png)



### ALB + ECS on Fargate

- service autoscaling is done by fargate
- No need to launch EC2
- still limited by the ALB in case of sudden peaks.



![image-20240131045032387](./assets/image-20240131045032387.png)



### ALB + Lambda

- Limited by lambda runtime of 15 minutes
- 1000 concurrent lambda executed limitation
- Simple way to expose lamnda functions as HHTP/S without alll featured from API gateway
- Able to combine with WAF



![image-20240131045154019](./assets/image-20240131045154019.png)

### API Gateway + Lambda

- Fully serverless
- Soft limits of 10000 request/sec for API GW and 1000 concurrent lambda executions
- Allow to perform authentication, rate limiting, caching using API GW
- Lambda cold start time may increase latency
- fully integrated with X-RAY

![image-20240131045450843](./assets/image-20240131045450843.png)

### API Gateway + AWS Service (as proxy)

- Limitation: API GW with payload limit of 10MBytes

![image-20240131045530035](./assets/image-20240131045530035.png)

### API Gateway with HTTP backend

![image-20240131045804984](./assets/image-20240131045804984.png)

