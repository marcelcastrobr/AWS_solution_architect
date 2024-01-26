# Lambda
- Continuously scale (scale out).
- Functiuons are serveless and independent.
- Serveless like (Aurora, S3, DynamoDB, API gateway).
- Lambda function can triggers other functions
- AWS X-rays allow you to debug serveless application
- $latest is always the last version of code you upload
- Concurrent execution limits exists for lambda. 
  - 1000 concurrent execution per region
  - 429 HTTP error
- Invocation types
  - Synchronous: client responsible for retries
  - Asynchronous: 
    - up to 3 retries
    - process need to be idempotent (to accomodate retries)
    - Dead-letter queue (DLQ) used for failed processing (SNS, SQS)
  




## Lambda Pricing

- Number of Requests: first 1 million requests are free. 0.20 USD per 1 million requests thereafter.
- Duration: time codes begin until it is executed (rounded to 100ms). Price depends on amount of memory allocated to your function.



## Lambda Accessing VPC Resource

In order to allow lambda to connect to VPC resource you need to:

- Private subnet ID
- Security group ID with required access
- NATGateway to acess internet resources

Lambda will use this information to set up ENIs (Elastic Network Interface) using an available IP address from your private subnet.

An example of command is:

```bash
$ aws lambda update-function-configuration --function-name my-function --vpc-config SubnetIds=my-private-subnet, securityGroupIds=my-private-group
```



## Lambda Limits

- RAM: 128 MB to 10 GBytes
- CPU: linked to RAM and can not be changed manually
  - 1vCPUs - 1.8GB RAM
  - 6 vCPUs - 10 GB RAM
- Timeout up to 15 minutes
- /tmp storage of 10GBytes
- Deployment package: 50 MB zipped and 250MB unzipped including layers
- 1000 soft limit of concurrent executions
- 10GBytes of container image size
- Invocation payload of 6MB (sync) and 256K (async)



## Lambda & CodeDeploy

- Automated traffic shift. INtegrated with the SAM framework
  - Linear: every N minutes
  - Canary
  - AllAtOnce



