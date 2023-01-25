

# Test 1

Questions:



Your main application currently stores its credentials as a text file on an  EC2 server.  Your manager has informed you that this is an insecure  practice and has told you to store these credentials in an AWS-managed  service instead.  AWS Systems Manager Parameter Store and AWS Secrets  Manager can be used for the secure storage of credentials.  Of the below features, which apply to both Secrets Manager and Parameter Store?

(Choose 3)

**Supports encryption at rest using customer-owned KMS keys**

**Can store credentials in hierarchical form**

**Integrated with Identity and Access Management**

Manages rotation and lifecycle of credentials

Available at no additional charge, providing you store less than 10,000 credentials





#### Question 11



You are working as a developer for an online retailer. Your security  architect has requested that any files stored in S3 must be encrypted.  However, some teams are continuing to upload their files without  encrypting them. Which of the following will ensure that only encrypted  data is uploaded?

Select the **Encrypted Files Only** checkbox in the **S3 Permissions** tab in the AWS console

X **Use a bucket policy that only allows PUT operations, which include the `x-amz-server-side-encryption` parameter in the request header**

Tell all team members to include the `x-amz-encryption` parameter in request header

Create a bucket ACL that only allows PUT operations, which include the `x-amz-encryption` parameter in request header





#### Question 27



Kinesis allows consumer applications to consume records in which order?

Last In First Out

According to the timestamp assigned when the record is written to the stream

Records are processed in no particular order

According to a sequence number assigned when the record is written to the stream



#### Question 33



Which of the following statements is correct in relation to EBS volumes?

If you want to use auto scaling, you must use an EBS-backed instance.

Instance Store-backed instances can be stopped and restarted without losing the data on the volume.

An EBS-backed instance can be stopped and restarted without losing the data on the volume.

An Amazon VPC requires that instances be backed with EBS.



#### Question 39

As you retrieve information from DynamoDB, you receive a `ProvisionedThroughputExceededException` error. Further investigation shows that you're not exceeding your table's read capacity throughput. What is causing this error?

You are exceeding an individual partition's throughput capacity, even if  you're not exceeding the overall table throughput capacity.

You have too many sort keys on your table.

AWS metrics do not run in real time. This error will disappear.

The table is warming up and this process consumes throughput.



#### Question 44

You created a CloudFormation template that launched a web application  running on EC2 instances in us-west-1. However, you are experiencing a  problem creating a development stack in us-east-1 to serve clients in  another geographical location. What should you do to solve the problem?

Copy the AMI in the template from us-east-1 to us-west-1.

Recreate the AWS resources used for the application in us-west-1.

Copy your IAM role to the us-east-1 region so that you have permissions to deploy CloudFormation stacks in that region.

Copy the AMI in the template from us-west-1 to us-east-1.



#### Question 45



You are developing a online banking website which will be accessed by a  global customer base. You are planning to use CloudFront to ensure users experience good performance regardless of their location. The security  architect working on the project asks you to ensure that all requests to CloudFront are encrypted using HTTPS. How can you configure this?

Set the viewer protocol policy to redirect HTTP to HTTPS

Set the request protocol policy to redirect HTTP to HTTPS

Set the user protocol policy to redirect HTTP to HTTPS

Set the session protocol policy to redirect HTTP to HTTPS



#### Question 52



Which of the following Elastic Beanstalk deployment approaches allow you to maintain full capacity while performing an update?

(Choose 2)

Rolling

Rolling with additional batch

All at once

Immutable



#### Question 61

You are working on a Lambda function which needs to access data in RDS.  Which of the below is the current best AWS service to use to securely  provide rotated database credentials to Lambda functions? 

Use DynamoDB to store the encrypted connection string and secrets

**AWS Secrets Manager**

Use Systems Manager Parameter Store

Store the encrypted connection string and other secrets in S3

Use Lambda environment variables



#### Question 63

Which of the following specifies the correct run order for lifecycle hooks for an in-place deployment using CodeDeploy?

```
X ApplicationStop`, `BeforeInstall`, `AfterInstall`, `ApplicationStart
BeforeInstall`, `AfterInstall`, `ApplicationStop`, `ApplicationStart
BeforeInstall`, `ApplicationStop`, `AfterInstall`, `ApplicationStart
ApplicationStop`, `BeforeInstall`, `ApplicationStart`, `AfterInstall
```





# Test 2



#### Question 2

Which section of the AWS Serverless Application Model template is required  and identifies an AWS CloudFormation template file as an AWS SAM  template file?



Templates



**Transform**

The declaration `Transform: AWS::Serverless-2016-10-31` is required for AWS SAM template files. Transform identifies the template as an AWS SAM template file.

For more information about transforms, see [Transform](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/transform-section-structure.html) in the AWS CloudFormation User Guide. Reference: [AWS SAM template anatomy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html).



Functions

Functions is not used to identify an AWS CloudFormation template file as an AWS SAM template file.

Reference: [AWS SAM template anatomy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html).

Selected





## [Test AWS](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwig56Gl09j8AhUXQ_EDHVI6BEQQFnoECAwQAQ&url=https%3A%2F%2Fd1.awsstatic.com%2Ftraining-and-certification%2Fdocs-dev-associate%2FAWS-Certified-Developer-Associate_Sample-Questions.pdf&usg=AOvVaw0nvngOWmxKQ5nWoz0Brrgm)



**4) A company is using Amazon API Gateway for its REST APIs in an AWS account. The security team wants to allow only IAM users from another AWS account to access the APIs.**

**Which combination of actions should the security team take to satisfy these requirements? (Select TWO.)**

1. **A)  Create an IAM permission policy and attach it to each IAM user. Set the APIs method authorization type to AWS_IAM. Use Signature Version 4 to sign the API requests.**

2. B)  Create an Amazon Cognito user pool and add each IAM user to the pool. Set the method authorization type for the APIs to COGNITO_USER_POOLS. Authenticate using the IAM credentials in Amazon Cognito and add the ID token to the request headers.

3. C)  Create an Amazon Cognito identity pool and add each IAM user to the pool. Set the method authorization type for the APIs to COGNITO_USER_POOLS. Authenticate using the IAM credentials in Amazon Cognito and add the access token to the request headers.

4. **D)  Create a resource policy for the APIs that allows access for each IAM user only.**

5. E)  Create an Amazon Cognito authorizer for the APIs that allows access for each IAM user only. Set the

   method authorization type for the APIs to COGNITO_USER_POOLS.



**7) A developer is adding Amazon ElastiCache for Memcached to a company's existing record storage application to reduce the load on the database and increase performance. The developer has decided to use lazy loading based on an analysis of common record handling patterns.**

**Which pseudocode example would correctly implement lazy loading?**

1. A)  record_value = db.query("UPDATE Records SET Details = {1} WHERE ID == {0}", record_key, record_value)
    cache.set (record_key, record_value)

2. **B)**  record_value = cache.get(record_key) if (record_value == NULL)

   record_value = db.query("SELECT Details FROM Records WHERE ID == {0}", record_key)

   cache.set (record_key, record_value)

3. C)  record_value = cache.get (record_key)

   db.query("UPDATE Records SET Details = {1} WHERE ID == {0}", record_key,

   ```
         record_value)
   ```

4. D)  record_value = db.query("SELECT Details FROM Records WHERE ID == {0}",

   ```
         record_key)
         if (record_value != NULL)
   ```

   cache.set (record_key, record_value)

\7) B - Lazy loading is a concept where the loading of a record is delayed until it is needed. Lazy loading first checks the cache. If a record is not present, lazy loading retrieves the record from the database, and then stores the record in the cache.