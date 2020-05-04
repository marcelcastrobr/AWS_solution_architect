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
    - 


## VPC Peering
- Allows you to connect one VPC with another via a direct network route using private IP addresses.
- Instance behave as if they were on the same private network.
- You can peer VPC's with other AWS accounts VPC's.
- Peering is a star configuration. No transitive peering is allowed. (i.e. A - B - C, A can talk to B but A can not talk to C through B)
- It is allowed to peer between regions.