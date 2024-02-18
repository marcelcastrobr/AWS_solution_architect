# AWS Firewall Manager

- manage rules in all accounts in an AWS Organization

- Allows to filter traffic at the perimeter of you VPC

- Once deployed you see a firewall endpoint in each firewall subnet

- Security policy: 

  - WAF rules: ALB, APIGW and cloudfront
  - AWS shield advanced: ALB, CLB, NLB, elastic IP, cloudfront
  - security groups for EC2, ALB or ENI resources in VPC
  - AWS Network firewall (VPC level)
  - Amazon Route 53 resolves DNS firewall
  - Policies created at the region level.

  

  **WAF/Shield Advanced / Firewall Manger Steps:**

  - deploy webACL rules in WAF
  - Managed WAF rules in Firewall manager to apply rules in all accounts
  - Shield Advanced adds additional features on top of WAF
  - Firewall manager helps to deploy shield advance in all account

  