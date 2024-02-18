# AWS Direct Connect



AWS Direct Connect links your internal network to an AWS Direct Connect location over standard Ethernet fiber-optic cable. One end of the cable is connected to your router and the other to an AWS Direct Connect router. This connection allows you to create a virtual interface(s) directly to public AWS services bypassing internet service providers in your network path.

Below are two examples of connectivity through AWS Direct Connect.

![image-20230109162134954](./assets/image-20230109162134954.png)

Picture: [What is AWS Direct Connect?](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)



### **Scenario 1: A transit gateway when you have multiple VPCs in the same Region** 

![image-20230109162237022](./assets/image-20230109162237022.png)

Picture: [Provision Direct Connect Connectivity](https://catalog.workshops.aws/dxhybrid/en-US/2-establishing-connectivity)



### Scenario 2: A virtual private gateway

![image-20240209084959497](./assets/image-20240209084959497.png)



### Scenario 3: Direct Connect Gateway with two virtual private gateways

![image-20240218083808922](./assets/image-20240218083808922.png)

Picture by TutorialDoJo



## AWS Direct Connect Components

- **Connections**: establish a network connection from your premises to an AWS Region

- **Virtual Interfaces**: enable access to AWS services. It can be:
  - **public virtual interface** (enables access to public services, such as Amazon S3) 
  - **private virtual interface** (enables access to your VPC using private IP address).
  - **transit** (is a VLAN that transport traffic)



## Provision Direct Connect Connectivity Steps

1) Setup a transit gateway (TGW)
2) Crete a direct connect gateway (DXGW)
3) Associate the TGW to DXGW
4) Order Direct Connect (HC)
5) Create Transit Virtual Interface
6) Establish BGP routing between on premises and cloud.



## Network Requirements:

- Your network colocated with an existing AWS Direct Connect location. (e.g. Equinix SK1 in Stockholm)

- Or working with a AWS Direct Connect partner

- Or an independent service provider that connects you to AWS Direct Connect.

- Network with single mode fiber with a 1000BASE-LX (1Gbps), 10GBASE-LR (10GBps) or 100GBASE-LR4 (100Gbps)

- Disabled auto-negotiation for port

- 802.1Q VLAN encapsulation

- Support for BGP (Border Gateway Protocol) and BGP MD5 authentication

  