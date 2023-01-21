# Amazon Cognito

- Allows web identity federation. 

- Acts as an identity broker (i.e. manages authentication between your application and the web id provider)

- Temporary credentials are taped to an IAM role allowing access to AWS resources

  

  ## User Pools

  - User directories used to manage **sign-up and sign-in** functionality for mobile and web-applications

  ## Identity Pools

  - Enable you to provide **temporary AWS credentials,** enabling access to AWS services like S3.

  



## Workflow:

- Log in identity provider (e.g. Facebook), where cognito will broker the sign-in/sign-up with the identity provider.
- Cognito will return a  JWT (Json Web Token) to the application.
- Application use the JWT token to exchange to AWS credentials using the cognito identity pool.
- AWS credentials are mapped to IAM roles which gives use access to AWS resources.

Example: a user could access AWS resources after successfully authenticating with web-based identity providers such as Facebook, Amazon or Google. 

![image-20230120093829405](./assets/image-20230120093829405.png)



## Push Synchronization:

- Used to push updated and synchronize user data across multiple devices.
- SNS notification are used under the hood to all the devices associated with a given identity whenever data stored in the cloud changes.



# Security Token Service

### AssumeRoleWithWebIdentity:

- Part of the security toke service
- Provide temporary identity using STS API (assume-role-with-web-identity)
- Returns temporary security credentials for user authenticated by a mobile or web app, or using an external web ID provider.

![image-20230120102027034](./assets/image-20230120102027034.png)





# Cross Account Access

- Allow user from one AWS Account (A-account) to access resource in another AWS Account (B-Account).
- Steps (example: user in A-account would like to access logs on S3 located in the B-account):
  - Create a user group in the A-account
  - Shared S3 bucket in the B-account.
  - Create an IAM policy in the B-account allowing access to the s3 bucket
  - Create an IAM role in the B-account (this role will be linked to the A-account). Need to make sure the role is of type "AWS account" and not "AWS service". Attach the policy to it.
  - Create a new policy in A-account that has an action "its:AssumeRole" to the production account role you created above. This policy is attached to the A-account user group.

![image-20230120103724357](./assets/image-20230120103724357.png)