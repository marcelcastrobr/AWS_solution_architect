# IAM - Identity Access Management

## IAM Facts:
- IAM is universal. It dows not apply to regiaons at this time.
- New users have NO PERMISSION when first created.
- New users are assigned Access Key ID & Secret Access Keys when first created. Access Key & secrerct are used to access AWS APIs and command line.
- 

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

sdwef