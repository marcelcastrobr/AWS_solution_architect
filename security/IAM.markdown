# IAM - Identity Access Management

IAM provides the infrastructure necessary to control authentication and authorization for your AWS account. See IAM infrastructure illustration [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/intro-structure.html).

![image-20240110162141705](./assets/image-20240110162141705.png)

## IAM Facts:

- IAM is universal. It dows not apply to regions at this time.
- New users have NO PERMISSION when first created.
- New users are assigned Access Key ID & Secret Access Keys when first created. Access Key & secret are used to access AWS APIs and command line.
- Role -> connected to services and Policies to Users.

 ![IAM Model](../images/IAM_model.jpg)


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



### [Access Management for AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html)

You manage access in AWS by creating policies and attaching them to IAM identities or AWS resources.

Policies are JSON documents in AWS.

A summary for the [evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) for a request within a single account follows these rules:

- By default all requests are implicity denied,

- An explicit allow in an identity-based or resource-based policy overrrides this default.

- If a permission boundary, organization SCP, or session policy is present, it might override the allow with an implicity deny.

- An explicity deny in any policy overrides any allows.

  

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

![ARN - Amazon Resource Name](../images/arn.png)



## Policies Types

Below are the policy types in IAM.

### Identity-based policies

Grant permission to an identity. Attached managed and inline policies to IAM identities (user, groups, or roles).

### Resource-based policies

Resource-based policies are JSON policy documents that you attach to a resource such as an Amazon S3 bucket.

### [Permissions Boundaries](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

Permissions boundaries is an advanced feature for using a managed policy to set the maximum permission that an **identity-based policy** can grant to an IAM entity.

Example below shows  a policy that can be allocate to an IAM user to manage only Amamzon S3, CloudWatch an EC2.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:*",
                "cloudwatch:*",
                "ec2:*"
            ],
            "Resource": "*"
        }
    ]
}
```



### Organization SCPs

Use an AWS Organizations service control policy (SCP) to define the maximum permissions for account members of an organization or organizational unit (OU).

### Access control lists (ACLs)

Use ACLs to control which principals in other accounts can access the resource to which the ACL is attached.

### Session policies

Pass advanced session policies when you use the AWS CLI or AWS API to assume a role or a federated user.



# IAM Roles

In AWS there is two ways to use role: interactively in the IAM console or programatically with the AWS CLI or API.

AssumeRole API: returns a set of temporary credentials.

**IAM Access Analyzer** can be used to check if principals in accounts outside your zone of trust (trusted organization or accounts) have access to assume your roles.



## [Service-linked roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html)

A service-linked role is a type of service role that is linked to an AWS service. 

The service can assume the role to perform an action on your behalf. 

Service-linked roles appear in your AWS account and **are owned by the service**. 

An IAM administrator can view,  **but not edit** the permissions for service-linked roles.  



# Cross Account Resource Access

- Resources that support [**resource-based policies**](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction_access-management.html#intro-access-resource-based-policies) can be shared directly.
- If resource does not support resource-based policies use a role as a proxy.



## Cross account access using roles

Example:

Step 1: customer creates IAM role in their own account with policy that allows access to Amamzon S3 resource.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "s3:*",
            "Resource": [
                "arn:aws:s3:::bucket-name"
            ]
        }
    ]
}
```

Step 2: Customer specify that role can be assume by the partner´s AWS account by providing the APN Partner´s AWS account ID in the trust policy for the APNPartner role.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::APN-account-ID:role/APN-user-name"
            },
            "Action": "sts:AssumeRole"
        }
    ]
}
```

Step 3: Customer gives the Amazon Resource Name (ARN) of the role to the APN partner. 

```json
arn:aws:iam::APN-ACCOUNT-ID:role/APNPartner
```

Step 4: When the APN Partner’s software needs to access the customer’s account, the software calls the [AssumeRole](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html) API in  the AWS Security Token Service with the ARN of the role in the customer’s account. STS returns a temporary AWS credential that allows the software to do its work.



## Cross account access using resource-based policies



> When an account accesses a resource through another account using a resource-based policy, the principal still works in the trusted account and does not have to give up their permissions to receive the role permissions. In other words, the principal continues to have access to resources in the trusted account while having access to the resource in the trusting account. 

AWS services that support resource-based policies can be seen [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html).

Example:

Step 1: Resource-based policy attached to BucketA on AccountA, allowing all principals in AccountB  full access to objects in the bucket.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PrincipalAccess",
            "Effect": "Allow",
            "Principal": {"AWS": "arn:aws:iam::AccountB:root"},
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::BucketA/*"
            }
        ]
}
```

Step 2: In AccountB attached a policy to the IAM user (User2), allowing user read-only access to objects in BucketA.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect" : "Allow", 
            "Action" : [ 
                "s3:Get*", 
                "s3:List*" ], 
                "Resource" : "arn:aws:s3:::BucketA/*" 
        } 
    ]
}
```

In summary, the resource-based policy granted full access to AccountB, but User2 is granted only read-only access.





# [Policy Conditions with keys and values](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-logic-multiple-context-keys-or-values.html)

You can configure your IAM policy to allow a user to launch an EC2  instance and create an EBS volume only if the user applies **all the tags**  that are defined in the policy using the **`ForAllValues`** qualifier. If the user applies any tag that’s not included in the policy then the  action is denied. To enforce case sensitivity, use the condition ***`aws:TagKeys`***.

Here is an example of "launch EC2 instances that have only the specified list of tags". This example allows a user to launch an EC2 instance and create EBS volumes only when tag keys **key1** and **key2** are provided in the request. No specific value is required for either tag keys, and no additional tags can be added in the **RunInstances** request.

```json
"Condition": {
  "StringLike": {
      "aws:RequestTag/key1": "*",
      "aws:RequestTag/key2": "*"
  },
  "ForAllValues:StringEquals": {
    "aws:TagKeys": [
        "key1",
        "key2"
    ]
  }
}
```

Here is an example of "launch EC2 instances that have at least one matching tag and value". This example allows a user to launch an EC2 instance and create EBS volumes when at least one tag key is named **key1** and its value is **value1**.

```json
"Condition": {
  "StringEquals": {
    "aws:RequestTag/key1": "value1"
  },
  "ForAnyValue:StringEquals": {
    "aws:TagKeys": [
      "key1"
    ]
  }
}
```



# Instance Profile - IAM Role to an EC2

- instance profile contains the role an can provide role´s temporary credenctials to an application that runs on the EC2.
- Only one role can be assigned to an EC2 instance at a time.
- No neeed to manage credentials as temporary credentials are used and rotated automatically.
- If you use the AWS Console to create a role for EC2, the console automatically creates and instance profile and gives it the same name as the role.
- In CloudFormation reference the IAM Role as property inside the `AWS::IAM::InstanceProfile` of the application instance.
