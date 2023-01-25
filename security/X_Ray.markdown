# X-Ray

X-Ray service map provides an end end view of the request as they travel through your application.

It allows you to monitor issues like latency, HTTP status codes and errors on your application.

X-Ray integrates with:

- EC2, ECS, Lambda, Beanstalk, SNS, SQS, DynamoDB, ELBs and API gateways.
- You can also use in your application written in Java, Node.js, .NET, Go, Ruby and Python.
- Monitor **API calls** make to AWS services using the AWS SDK.

## X-Ray architecture:

![image-20230116164451476](./assets/image-20230116164451476.png)

1) Install the X-Ray agent
2) Configure your application using X-Ray SDK.
3) X-Ray SDK gather information from requests and response headers, the code in your application and metadata about AWS resources.



Example below has a hands-on troubleshooting using X-Ray [here](https://github.com/ACloudGuru/hands-on-aws-troubleshooting). 

![image-20230117103349806](./assets/image-20230117103349806.png)





