# Amazon Inspector

- Automate Security Assessments
  - For EC2 instances
  - For Container Images push to Amazon ECR
  - For Lambda Functions:
- Report finding in AWS Security Hub and also Amazon Event Bridge
- Evaluation type:
  - Package vulnerability: database of CVE
  - Network reachability
- Inspector does not have the capability to **detect** EC2 instances that are using **unapproved AMIs**, unlike AWS Config.