# High Available Architecture

## ELB - Elastic Load Balancer Definition
ELB allows the incomming traffic to be distributted automatically accross multiple heath EC2 instances.


## ELB Types

1. Application load balancer
- Operated at layer 7 (application layer in OSI).
- Allow defining routing rules based on content.
    - Support path-based routing (i.e. forward request based on the URL in the request).
    - Support sticky sessions.
- Supports security groups to control the traffic allowed to and from the load balancer.

2. Network  load balancer
- Operated at layer 4 (TCP level).
- Distributes traffic across targets within the same availability zone.


3. Classic load balancer


## ELB Facts
- 504 error means gateway has timeout. Problem migh be in web server or database.
- If you need the IPv4 address of your end user, look for the X-Forwarded-For header.
- Instances monitoared by ELB are monitored as :  inService or OutOfService.
- Load balancers only work across AZs within a region.

![ELB](/images/ELB.png)
