# Route53 main functions
- Domain registration
- Domain name system (DNS) service
    - Translate friendly domain names into IP address.
    - Can route internet traffic to CloudFront, Elastic Beanstalk, ELB, or S3.
- Heath checking

# Route53 Routing types:
- Simple routing
- Weighted routing
- Latency-based routing
- Failover routing
- Geolocation routing
- Geoproximity routing
- Multivalue answer routing

# Supported DNS Resource Record Types:
- A (Address) Format: is an IPv4 address in dotted decimal notation, e.g. 192.168.1.12
- AAAA format: IPv6 address
- CNAME format:
    - same format as domain name
- MX (Mail Xchange) format: contains a decimanl number that represents the priority of the MX record, and the domain name of an email server.
- NS (name server) format
-  Alias record is similar ro a CNAME records, but can create an alias record both for the root domain or apex zone, such as example.com, and for subdomains, such as www.example.com. CNAME records can only be used for subdomains.
