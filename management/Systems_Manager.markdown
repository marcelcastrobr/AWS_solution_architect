# System Manager (SSM)

- Helps manage your EC2 and on-prem systems at scale
- Generate insight about our infrastructure
- Patching automation for compliance
- Works with Linux and Windows
- Free service
- SSM agent on instance deployed in EC2s.
- Actions:
  - run command across multiple instances (using resource groups). Make use of rate control/error control.
  - Integrated with IAM & cloudtrail.
  - No need SSH.
- Can send command before an ASG instance is termindated -> e.g. actions on EC2 instance before termination (extract logs).



## [Parameter Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)
- Components of AWS system manager (SSM)
- Secure serverless storage for configuration:
    - passwords
    - database connection strings
    - license codes
    - API keys
- Values can be stored encrypted (KMS) or plain text
- Store parameters in hierarchies (15 levels deep).



## [System Manager Patch](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager.html)

- Patch baseline to you.
- Pach groups can be defines based on tags.
- Define Maintenance Windows (schedule, duration, etc.)
- Add the AWS-RunPatchBaseline run command as part of registered tasks of the Maintenance Window.
- SSM inventory monitor patch compliance



## System Manager Session Manager

- Secure shell on your EC2 and on-prem servers
- Access throug AWS console, AWS CLI or session manager SDK.
- No need for SSH access/bastion host.
- Full traceability of sessions to EC2. E.g. cloudtrail can intercept Ec2 start session.



## System Manager OpsCenter

- Resolve operational issues (opsItems) related to AWS resources
- Aggregate information to resolve issues on each OpsItems such as:
  - AWS config changes, cloudtrail logs, cloudformation stack information, cloudwatch alarms
- Provides Automation runbooks.
- EventBridge or Cloudwatch can creat OpsItems.

## [System Manager Automation](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html)

