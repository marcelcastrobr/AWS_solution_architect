# AWF WAF - Web Application Firewall

AWS WAF let you monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront, an Application Load Balancer or API gateway.

Possible configurations are:
- String match condition
- Size constraint conditions
- IP match conditions
- Country match conditions
- Values in request headers
- Presence of SQL code that is likely to be malicious (SQL injection)
- Presence of script that is likely to be malicious (known as cross-site scripting)


# AWS Shield

Provides Distributed Denial of Service (DDoS) protection.
There are two tiers of AWS Shield: 
    - Standard: AWS Shield Standard defends against most common, frequently occurring network and transport layer DDoS attacks that target your web site or applications. When you use AWS Shield Standard with Amazon CloudFront and Amazon Route 53, you receive comprehensive availability protection against all known infrastructure (Layer 3 and 4) attacks.

    - Advanced: For higher levels of protection against attacks targeting your applications running on Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator and Amazon Route 53 resources, you can subscribe to AWS Shield Advanced.

AWS Shield Advanced also gives you 24x7 access to the AWS DDoS Response Team (DRT) and protection against DDoS related spikes in your Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator and Amazon Route 53 charges.

