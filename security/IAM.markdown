# IAM - Identity Access Management

## IAM Facts:
- IAM is universal. It dows not apply to regions at this time.
- New users have NO PERMISSION when first created.
- New users are assigned Access Key ID & Secret Access Keys when first created. Access Key & secret are used to access AWS APIs and command line.
- Role -> connected to services and Policies to Users.

 ![IAM Model](/images/IAM_model.jpg)


## IAM consists of:
 ### IAM Role:
 - Roles are more secure than storing your access key and secret access key on individual EC2 instances.
 - Roles are easier to manage.
 - Roles can be assigned to an EC2 instance after it is created using both the console and command line.


 ### IAM User:

 ### IAM Groups:

 ### IAM Policies:
 - Manage level of access to established identities such as IAM Users and Groups.
 - Each policy contains statement that define users priveledges.
 - Policy summary is:
    - Version
    - Statement
    - Effect (e.g. Allow)
    - Resource

Example of Admin Policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "*",
            "Resource": "*"
        }
    ]
}
```

Example of S3ReadOnlyAccess
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:Get*",
                "s3:List*"
            ],
            "Resource": "*"
        }
    ]
}
```



### Types of IAM policies:

- AWS Managed: created and administrated by AWS (e.g. AmazonDynameDBFullAccess).
- Customer managed polices: standalone created and administrated by you.
  - Recommended when managed policies is not good enought
- Inline Policies: 1:1 relationship between the entity and the policy
  - You can not attached to multiple user, group or role.
  - Recommended when the policy should not be adverted assigned to any other user, group or role than the one you intended. 



# Advanced IAM

- AWS Managed Microsoft AD
    - AD domain controllers running Windows Server
    - Extend existing AD to on-premises using AD trust.
- Simple AD
    - Standalone managed directory
    - Basic AD features
    - small < 500 users and large < 5000 users
- AD connector
    - Diretory gatewaty (proxy) for on-premise AD
    - Avoid caching information on the cloud
    - Scale accross multiple AD connectors.

- Cloud Directory
    - Directory based store for developers
    - Use cases: org charts, course catalogues, device register
    - Fully managed service

- Amazon Cognito User Pools
    - Managed user directory for SaaS applications
    - Sign-up and sign-in for web and mobile 
    - Works with social media identities


# IAM Policies

![ARN - Amazon Resource Name](/images/arn.png)


# Resource Access Management
Share resource accross accounts. Current resources that is possible to share between accounts:
 - Aurora,
 - AppMesh
 - CodeBuild
 - EC2,
 - EC2 Image Builder
 - License Manager
 - Resource Groups
 - Route53





