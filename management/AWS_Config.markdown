# AWS Config

- Helps with auditing and recoding **compliance** of your AWS resources.
- AWS Config Rules **does not prevent actions** from happening (no deny)
- Scenarios
  - Unrestricted SSH access on security groups
  - S3 bucket with public access
  - ALB configuration changes over time.
- AWS Regional service
- View compliance of resource over time.



## AWS Config Rules:

- Custom rules powered by Lambda functions
- rules can be triggered upon config change and/or regular time intervals.
- Can trigger Amazon EventBridge if rule is non-compliant
- Remediations can be done by SSM Automations (e.g. remediate security group rules, stop instances with non-approved tags)