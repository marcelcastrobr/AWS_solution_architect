# Trusted Advisor Definition
It is an online tool that provides real time guidance to help you provision resources following AWS best practices, in terms of cost optimization, performance, security, fault tolerance and service limits.

- Provide recomandations for:

  - Cost Optimization

  - Performance

  - Security

  - Fault Tolerance

  - Service Limits

  - Operational Excellence

- Core checks and recommendations

- Can enable weekly email notification from the console

- Full Trusted Advisor - Available for Business & Enterprise support plans.



## Security Checks
- S3 bucket permissions
- Check S3 bucket is public
  - But cannot check for S3 objects that are public inside your bucket. Need to use Event Bridge /S3 events or AWS config rules.
- Security groups - specific ports unrestricted
- IAM use
- MFA on root account
- EBS public snapshot
- RDS public snapshot
