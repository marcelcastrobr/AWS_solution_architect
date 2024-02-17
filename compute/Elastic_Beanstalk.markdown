# Elastic Beanstalk
Enable deployment and management of applications in the AWS cloud without worry about infrastructure. 

An elastic beanstalk application is a logical collection of Elastic Beanstalk components, including environments, versions, and environment configurations.
- Application version: point to S3 object that contains a deployable code (e.g. java war file).
- Environmemnt: collection of AWS resources running an application version.
    -   Webserver environmnet tier:  servers HTTP requests
    -   Worker environment tier: pull tasks from AWS SQS.
- Environment configuration: collection of parameters and settings that defines how an environment and its associates resources behave.

- Support for many platform:

  - Go, Java SE, Java with Tomcat
  - .Net on Windows Server with IIS
  - Node.js
  - PHP, python, ruby, packer builder, single container docker, multicontainer and preconfigure docker.

- Great to "**Replatform**" appication from on-prem to cloud.

  

## Elactic Beanstalk and Docker

Elastic Beanstalk supports the deployment of web applications from Docker containers. With Docker containers, you can define your own runtime environment. You can choose your own platform, programming language, and any application dependencies (such as package managers or tools), that aren't supported by other platforms. Docker containers are self-contained and include all the configuration information and software your web application requires to run. All environment variables defined in the Elastic Beanstalk console are passed to the containers.



## Elactic Beanstalk Deployment Policies

Deployment policies:

- **All-at-once** (default): 
- **rolling**: splits the environment’s EC2 instances into batches and deploys the new version of the application to one batch at a time
- **rolling with additional batch**: allow to **maintain full capacity** during deployment as it launches new batch of instances before taking any instances out of service.
- **immutable**: launch a full set of new instances running the new version of the  application in a separate Auto Scaling group alongside the instances  running the old version.



## Architecture models

- **Single instance deployment** -> good for dev
- **Load balancing + ASG** -> good for production and pre-prod web applications
- **ASG only** -> great for non-web applications (e.g. workers)



## Blue Green Deployment

- not a direct feature of Elastic Beanstalk
- Zero downtime and release facility
- New env (green) can be validated independently and roll back if issues happen.
- **Router 53** can be setup using weighted policies for gradual traffic switching or use **Beanstalk "swap URLs" (DNS swap)** to change all traffic.

## References

1) [Elastic Beanstalk concepts](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.html)