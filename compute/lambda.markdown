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




## Lambda Pricing

- Number of Requests: first 1 million requests are free. 0.20 USD per 1 million requests thereafter.
- Duration: time codes begin until it is executed (rounded to 100ms). Price depends on amount of memory allocated to your function.



## Lambda Accessing VPC Resource

In order to allow lambda to connect to VPC resource you need to:

- Private subnet ID
- Security group ID with required access

Lambda will use this information to set up ENIs (Elastic Network Interface) using an available IP address from your private subnet.

An example of command is:

```bash
$ aws lambda update-function-configuration --function-name my-function --vpc-config SubnetIds=my-private-subnet, securityGroupIds=my-private-group
```

