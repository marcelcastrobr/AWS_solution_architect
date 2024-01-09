# [AWS Resource Access Manager (AWS RAM)](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html)



- Share AWS resources that you own with other AWS accounts

- Share with any account or within your organization -> avoid resource duplication

- Alow you to share:

  - VPC subnet

    - Allow all resource in the same subnets. Caveat: must be from the same AWS Organization.
    - Cannot share security groups and default VPC

  - AWS Transic Gateway

  - Route53 Outbound Resolver: allow centrally managed resolver rule for your DNS.

  - License Manager Configurations

  - Other services are: Aurora DB clusters, ACM private cert authority, code build project, EC2, AWS Glue, AWS Network Firewall policies, System Manager Incident Manager, AWS Outpost, etc.

  - Managed Prefix list (set of one or mode CIDR blocks)  -> giving central management of CIDR blocks.

    