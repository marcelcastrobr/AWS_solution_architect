# Route53 main functions
- Domain registration
- Domain name system (DNS) service
    - Translate friendly domain names into IP address.
    - Can route internet traffic to CloudFront, Elastic Beanstalk, ELB, or S3.
- Heath checking

# Route53 Facts
- By design, the AWS DNS service does not respond to requests originating from outside VPC.


# Route53 Routing types:
- Simple routing
- Weighted routing
- Latency-based routing
- Failover routing
- Geolocation routing
- Geoproximity routing
- Multivalue answer routing

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
CNAME (Canonical Name) can be  used to alias one name to another. A common example is when you have both example.com and www.example.com pointing to the same application and hosted by the same server.

```bash
$ dig A www.dnsimple.com 

[...]

;; ANSWER SECTION:
www.dnsimple.com.	2759	IN	CNAME	dnsimple.com.
dnsimple.com.		60	IN	A	104.245.210.170

[...]
```

## MX (Mail Xchange) format: 
    - Contains a decimanl number that represents the priority of the MX record, and the domain name of an email server.

## NS (name server) format
##  Alias record:
    - Alias is similar ro a CNAME records, but can create an alias record both for the root domain or apex zone, such as example.com, and for subdomains, such as www.example.com. CNAME records can only be used for subdomains.
