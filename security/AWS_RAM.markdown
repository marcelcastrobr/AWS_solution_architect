# [AWS Resource Access Manager (AWS RAM)](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html)



- Share AWS resources that you own with other AWS accounts (e.g., AWS Transit Gateways, Subnets, AWS License Manager configurations)

- Share with any account or within your organization -> avoid resource duplication

- Alow you to share:

  - VPC subnet

    - Allow all resource in the same subnets. Caveat: must be from the same AWS Organization.
    - **Cannot share security groups and default VPC**

  - AWS Transic Gateway

  - Route53 Outbound Resolver: allow centrally managed resolver rule for your DNS.

  - License Manager Configurations

  - Other services are: Aurora DB clusters, ACM private cert authority, code build project, EC2, AWS Glue, AWS Network Firewall policies, System Manager Incident Manager, AWS Outpost, etc.

    - AWS RAM **does not** support direct sharing of Lambda functions between accounts.

  - Managed Prefix list (set of one or mode CIDR blocks)  -> giving central management of CIDR blocks.
  
    

To enable trusted access with AWS Organizations:

- From the AWS RAM CLI, use the `enable-sharing-with-aws-organizations` command.
- Name of the IAM service-linked role that can be created in accounts when trusted access is enabled: *AWSResourceAccessManagerServiceRolePolicy*.



![image-20240209083817676](./assets/image-20240209083817676.png)

From: TutorialDoJo.



## References

- Blog: [Introducing an Easier Way to Delegate Permissions to AWS Services: Service-Linked Roles](https://aws.amazon.com/blogs/security/introducing-an-easier-way-to-delegate-permissions-to-aws-services-service-linked-roles/)