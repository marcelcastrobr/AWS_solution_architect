# Load Balancer

Types:

- Classif Load Balancer (old generation, 2009)
  - HTTP, HTTPS, TCP, SSL
- Application Load Balancer (v2 2016)
  - HTTP, HTTPS, WebSocket
- Network Load Balancer (v2 2017)
  - TCP, TLS, UDP
- Gateway Load Balancer (2020)
  - Operates at layer 3 (IP protocol)



## Classic Load Balancer (v1)

- health check can be HTTP (L/) or TCP (L4) including SSL
- Supports only one SSL certificate
  - better to use ALB with SNI (Server Name Indication) if possible
- TCP -> TCP is way to use 2-way SSL authentication.



## Application Load Balancer (v2)

- Layer 7 (HTTP)
- load balancing to multiple HTTP applications across machines (target groups)
- load balancing to multiple applications on the same machine (e.x. containers)
- Support HTTP/2 and WebSocket, and redirects (e.g. HTTP to HTTPS)
- Routing rules for path, headers, and query string.
- Target Groups:
  - EC2 instances (managed by auto scaling group) -> HTTP
  - ECS tasks (managed by ECS) -> HTTP
  - Lambda functions (HTTP translated to JSON event)
  - IP addresses (private IPs)
- Health check at target group levels



## Network Load Balancer (v2)

- TCP and UDP traffic forward
- Millions of request per second
- 100 msec latency (400ms for ALB).
- NLB has one static IP address per AZ
- Target Groups:
  - EC2 instances
  - IP address (private IPs)
  - Application load balancer
- Zonal DNS Name:
  - Regional NLB DNS returns IP addresses of all NBL nodes in all enabled AZs. 
    - Might incur cost as depending on the answer you might be sending traffic between AZs
  - **Zonal DNS name** allow to get IP on specific AZ. It minimize latency and data transfer cost.



## Gateway Load Balancer

- Deploy and manage a fleet of 3rd party network virtual appliances
- Usecases: firewalls, intrusion detection system, deep packet inspection system
- Operates at layer 3 (IP packets)
- Combine functions for:
  - transparent network gateway
  -  load balancer
- Uses GENEVE protocol on port 6081.
- Target groups
  - EC2 instances
  - IP addresses (private IPs)



## Cross-Zone Balancing

- distrubte traffic evenly across AZs
- Enabled by default at classic load balancer and application load balancer
- Disabled by default and costs for network load balancer and gateway load balancer.



## Stick Sessions (Session Affinity)

- Works for classic and application load balancer
  - Uses cookies as solution.
- Might cause load imbalance



# Request Rourting Algorithm

- Least outstanding request
- Round robin.
- Flow hash: select based on protocol, source/destination IP, port and TCP sequence
- works with network load balancer†