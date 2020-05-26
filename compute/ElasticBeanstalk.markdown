# Elastic Beanstalk
Enable deployment and management of applications in the AWS cloud without worry about infrastructure. 

An elastic beanstalk application is a logical colluéction of Elastic Beanstalk componnets, including environments, versions, and environment configurations.
- Application version: point to S3 object that contains a deployable code (e.g. java war file).
- Environmemnt: collection of AWS resources running an application version.
    -   Webserver environmnet tier:  servers HTTP requests
    -   Worker environment tier: pull tasks from AWS SQS.
- Environment configuration: collection of parameters and settings that defines how an environment and its associates resources behave,



## References
1) [Elastic Beanstalk concepts](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html)