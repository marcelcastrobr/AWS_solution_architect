# Elastic Beanstalk
Enable deployment and management of applications in the AWS cloud without worry about infrastructure. 

An elastic beanstalk application is a logical collection of Elastic Beanstalk components, including environments, versions, and environment configurations.
- Application version: point to S3 object that contains a deployable code (e.g. java war file).
- Environmemnt: collection of AWS resources running an application version.
    -   Webserver environmnet tier:  servers HTTP requests
    -   Worker environment tier: pull tasks from AWS SQS.
- Environment configuration: collection of parameters and settings that defines how an environment and its associates resources behave.

# Elactic Beanstalk and Docker

Elastic Beanstalk supports the deployment of web applications from Docker containers. With Docker containers, you can define your own runtime environment. You can choose your own platform, programming language, and any application dependencies (such as package managers or tools), that aren't supported by other platforms. Docker containers are self-contained and include all the configuration information and software your web application requires to run. All environment variables defined in the Elastic Beanstalk console are passed to the containers.

## References
1) [Elastic Beanstalk concepts](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html)