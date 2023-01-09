# Route53 main functions
- Domain registration
- Domain name system (DNS) service
    - Translate friendly domain names into IP address.
    - Can route internet traffic to CloudFront, Elastic Beanstalk, ELB, or S3.
- Heath checking



# Supported DNS Resource Record Types:
## A (Address) Format: 
A record is an IPv4 address in dotted decimal notation, e.g. 192.168.1.12
(base) ➜  AWS_Certification dig A www.google.com

```bash
$ dig A google.com

[...]

;; ANSWER SECTION:
google.com.        62    IN    A    216.58.201.14

[...]
```


## AAAA format: IPv6 address

```bash
$ dig AAAA www.google.com

[...]

;; ANSWER SECTION:
www.google.com.		83	IN	AAAA	2a00:1450:400f:80c::2004

[...]
```

## CNAME format:
CNAME (Canonical Name) can be  used to alias one name to another. A common example is when you have both dnsimple.com and www.dnsimple.com pointing to the same application and hosted by the same server.

```bash
$ dig A www.dnsimple.com 

[...]

;; ANSWER SECTION:
www.dnsimple.com.	2759	IN	CNAME	dnsimple.com.
dnsimple.com.		60	IN	A	104.245.210.170

[...]
```

##  ALIAS record:

ALIAS is similar to a CNAME records, but can create an alias record both for the root domain or apex zone, such as example.com, and for subdomains, such as www.example.com. CNAME records can only be used for subdomains.

In AWS you have to use ALIAS records to point your root domain to other DNS records such as your ELB.

## MX (Mail Xchange) format: 
 MX contains a decimanl number that represents the priority of the MX record, and the domain name of an email server.

## NS (name server) format
NS (Name server) indicates which DNS server is authoritative for that domain.

```bash
$ dig NS google.com    

[...]

;; ANSWER SECTION:
google.com.		11252	IN	NS	ns2.google.com.
google.com.		11252	IN	NS	ns4.google.com.
google.com.		11252	IN	NS	ns1.google.com.
google.com.		11252	IN	NS	ns3.google.com.

[...]
```

## SOA Record
A SOA (Start of Authority) record is a type of resource record in the DNS containing adminstrative information about the zone.

```bash
$ dig SOA +multiline google.com   

[...]

;; ANSWER SECTION:
google.com.		53 IN SOA ns1.google.com. dns-admin.google.com. (
				309542872  ; serial
				900        ; refresh (15 minutes)
				900        ; retry (15 minutes)
				1800       ; expire (30 minutes)
				60         ; minimum (1 minute)
				)

[...]
```

# Route53 Facts
- By design, the AWS DNS service does not respond to requests originating from outside VPC.


# Route53 Routing types:
- Simple routing: one record with multiple IP addresses, where Route53 returns all values to the user in a random order.

- Weighted routing: Route53 returns value according to weight provided.

- Latency-based routing: Router53 returns values based on the lowest network latency for your end user. 

- Failover routing: Used when you want to create a active/passive set up (i.e. primary and secondary sites). 

- Geolocation routing: Route53 returns value based on the geographic location of your users (i.e. location from which the DNS queries originates). 

- Geoproximity routing: Route53 returns value based on geographic location of your users and resources, where a "bias" can be used to expand or shrink the size of the geographic region. You MUST use Route53 traffic flow in order to use geoproximity routing.

- Multivalue answer  routing: allows return of multiple values for almost any record. It is similar to simple routing however it allows you to put health checks on each record set.


# Using DNS with your VPC 
Route 53 has a security feature that prevents internal DNS from being read by external sources. The work around is to create a EC2 hosted DNS instance that does zone transfers from the internal DNS, and allows itself to be queried by external servers.

The following attributes must be set to true in order to instances with a public IP address receive corresponding public DNS hostnames, and the Amazon-provided DNS server can resolve Amazon-provided private DNS hostnames:
- enableDnsHostnames
- enableDnsSupport	

You can check this configuration in: Your VPC -> Description:
    - DNS resolution: Enabled
        - DNS hostnames: Enabled.

[Link](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html)



# [Route 53 Resolver](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html)

Amazon Route 53 Resolver responds recursively to DNS queries from AWS resources for:

- public records, 
- Amazon VPC-specific DNS names, 
- and Amazon Route 53 private hosted zones

An Amazon VPC connects to a Route 53 Resolver at a VPC+2 IP address. This VPC+2 address connects to a Route 53 Resolver within an Availability Zone.



A Route 53 Resolver automatically answers DNS queries for:

- Local VPC domain names for EC2 instances (for example, ec2-192-0-2-44.compute-1.amazonaws.com).
- Records in private hosted zones (for example, acme.example.com).
- For public domain names, Route 53 Resolver performs recursive lookups against public name servers on the internet.

Through Resolver endpoints and conditional forwarding rules, you can **resolve DNS queries between your on-premises resources and VPCs** to create a hybrid cloud setup over VPN or Direct Connect (DX).

- **Inbound Resolver** endpoints allow DNS queries to your VPC from your on-premises network or another VPC.
- **Outbound Resolver** endpoints allow DNS queries from your VPC to your on-premises network or another VPC.
- **Resolver rules** enable you to create one forwarding rule for each domain name and specify the name of the domain for which you want to forward DNS queries from your VPC to an on-premises DNS resolver and from your on-premises to your VPC. Rules are applied directly to your VPC and can be shared across multiple accounts.

The  diagram below shows hybrid DNS resolution with Resolver endpoints. Note that the diagram is simplified to show only one Availability Zone (Ref. [What is Amazon Route 53 Resolver?](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html)).

![image-20230109161118452](./assets/image-20230109161118452.png)





Ref. [AWS DirectC onnect + Hybrid DNS Workshop ](https://catalog.workshops.aws/dxhybrid/en-US)and picture below for an example of Route53 Resolver implementation.

![image-20230109155414781](./assets/image-20230109155414781.png)







# Route53 Links

- [DNS Desmystified] (https://www.youtube.com/watch?v=PVBC1gb78r8&t=1046s)

