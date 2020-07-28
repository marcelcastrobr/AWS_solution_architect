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

![ELB](/images/ELB.png)


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

