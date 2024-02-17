# VPC - Virtual Private Cloud

A virtual private cloud (VPC) is a virtual network dedicated to your AWS account. 
A VPC spans all of the availability zones in the region. You can add one or more subnets in each availability zone.
Each subnet must reside entirely within one availability zone and cannot span zones.
A VPC contist normally of:
- IGW (Internet Gateway) or Virtual Private Gateway.
- Route tables
- Network Access Control List (NACL)
- Security groups

AWS always reserve 5 IP addresses within your subnet.
Security groups cannot span VPCs.

![VPC Basics ](../images/vpc.png)


## VPC types

- Default VPC
    - Allow imediatelly deploy of instances
    - All subnets in default have a route out to the internet.
    - Each instance has a public and private IP address.

- Custom VPC
    
    


## VPC Peering
- Allows you to connect one VPC with another via a direct network route using private IP addresses.
- Instance behave as if they were on the same private network.
- You can peer VPC's with other AWS accounts VPC's.
- Peering is a star configuration. No transitive peering is allowed. (i.e. A - B - C, A can talk to B but A can not talk to C through B)
- It is allowed to peer between regions.
- **There is a default limit of 50 VPC peering for each VPC**


## VPC PrivateLink
- Allow to open your service in a VPC to another VPC using Private Link.
- Does not require VPC peering: no route table NAT, IGWs, etc.
- Requires network load balancer on the service VPC and an ENI on the customer VPC.


## VPC Endpoints

A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.

### Types of VPC endpoints:
- **Interface endpoints (powered by AWS PrivateLink)**
It is a elastic network interface with a private IP address that serves as an entry point for traffic destinated to a supported service. 

- **Gateway endpoints**
  A gateway endpoint is a gateway that you specify as a target for a route in your route table for traffic destined to a supported AWS service.
  Currently gateway enpoints support:
    - Amazon S3
    - DynamoDB



### [VPC endpoint policy](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html)

- IAM resource policy that you attach to an endpoint when you create or modify the endpoint. 
- If you do not attach a policy when you create an endpoint, we attach a  default policy for you that allows full access to the service.
- An endpoint policy **does not** override or replace IAM user policies or service-specific policies (such as S3 bucket policies).
- You **cannot** attach **more than one policy** to an endpoint



### Accessing VPC Endpoints from Remote Networks

- VPC endpoints are only accessible from AWS EC2 instances inside a VPC. This in order for remote networks to access VPC endpoints (e.g. for S3 access from a remote network), a local instance must proxy all remote request before they can utilize a VPC endpoint connection.

![VPC Endpoints from Remote Networks](../images/remote_vpc_endpoint.png)



# Direct Connect Link
Solution to establish a dedicated connection from your premises to AWS.

## Steps needed:
- Create a virtual interface: Public Virtual Interface -> Name -> Owner -> VLAN not used in your network -> Router Peer IP (customer and AWS IPs) -> BGP Peer enabled
- Create a new customer GW
- Create new Virtual Private Gateway (VGW)
- Attached VGW to VPC
- Create new VPN connection using customer and AWS gateway

![AWS Direct Connect](../images/direct_connect.png)


# NAT - Network Address Translation
Types:
- NAT instance: 
    - When creating a NAT instance, disable source/destination check on the instance.
    - NAT instance must be in the public subnet, and private subnet need to have a route out of the NAT instance.
    - NAT instances are behind a security group.
- NAT gateway
    - Redundant inside the availability zone.
    - Scales from 5Gbps to 45Gbps
    - No need to patch
    - Not associated with security groups
    - Automatically assigned a public ip address
    - You need to remember to update your route table
    - No need to disable source/destination checks.



# Transit Gateway
- Simplify your network topology.
- Operates in a hub-and-spoke model.
- Can use accross multiple AWS accounts using RAM (Resource Access Manager)
- Use route tables to limit how VPC talk to one another. 
- enables customers to connect 1000s of VPCs.
- Transit Gateways within an AWS Region **cannot** be peered
- You can connect to **a maximum of three** Transit Gateways over a single Direct Connect Connection for hybrid connectivity.

Picture below show how to reduce cost for egress traffic. Instead of NAT gateway per spoke VPC (NAT gateway are charged hourly), you create an eggress VPC in the network services account and route all egress traffic from the spoke VPC via a NAT gateway sitting in this VPC with Transit gateway.

![image-20240215091529731](./assets/image-20240215091529731.png)

Picture from TutorialsDoJo 

# VPN CloudHub
- Allow users to connected to a single private gateway. 
- Hub-and-spoke model. 
- Operates over the public internet, but traffic is encrypted. 

# VPC cost optimization
Free:
- Traffic in to VPC is free.
- Traffic within same AZ using private IP addresses is free. 

Cost:
- Traffic accross AZ has costs (1 cent per GB)
- Traffic outside AZ (traversing internet) twice more expensive. ( 2 cents per GB)
- Traffic between AZ withing different VPCs also costs.
