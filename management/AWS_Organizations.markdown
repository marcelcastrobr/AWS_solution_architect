# [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

Account management service that enables you to consolidate multiple AWS accounts into an organization that you centrally manage.

Composed by:

- root organization unit (OU)
- management account (a.k.a. payer account)
- member account. Allow to have OU inside a OU.

Administration is performed by **OrganizationAccountAccessRole** (created inside the member account by the management account). Use **AssumeRole** API. 

OrganizationAccountAccessRole must be **created manually** if you invite an existing Member account.



**Features**:

- **All features** (default = consolidated billing + SCP):  invite accounts must approbe enabling all feaures.
- **Consolidated Billing features**: aggregate billing accross all account -single payment method. Used for pricing benefits.



**Moving Account X from organizations A to B :**

- Step 1: remobe member account X from AWS organization A
- Step 2: send invite to the member account X from AWS organization B
- Sep 3: Member account X accept the invite to the new organization B.



## [Service control policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)

- Organization policy used to manage permission in your organization. SCPs is available only in organization that has **all feature enabled**.

- Define allowlist or block list IAM actions.

- Applied at the OU (Organization Unit) or Account level.

- Does not apply to management account.

- SCP is applied to all the users and roles in the account **including root user.**

- SCP **does no affect [service-linked roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html)**: Service-linked roles enable other AWS services to integrate with AWS Organizations and can’t be restricted by SCPs.

- SCP must have an **explicit Allow**.

- Usecases:
  - restrict access to certain services
  - enforce PCI compliance by explicitly disabling services.

- SCP strategies are blocklist and allowlist

- aws:RequestRegion: used by SCP to deny a region.

- Use SCP to restric creating resources without appropriate Tags.

- By default, an SCP named **FullAWSAccess** is attached to every root, OU, and account.

  



### [Policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html)

![         Evaluation flow chart       ](./assets/PolicyEvaluationHorizontal111621.png)



## [Tag Policies:](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_tag-policies.html)

- Helps to standardize tags across resources
- You define tag keys and allowed values
- Helps with: AWS Cost Allocation Tags and Attribute-based Access Control.
- Use Amazon EventBridge to monitor non-compliant tags.



## AI Services Opt-out Policies:

- Able to create opt-out across all member accounts.

## [Backup Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_backup.html)

- Enables you to create **backup plans** that define how to backup your AWS resources in a json document.
- Immutable backup plan appean in member accounts (view only)

```json
{
    "plans": {
        "PII_Backup_Plan": {
            "regions": { "@@assign": [ "ap-northeast-2", "us-east-1", "eu-north-1" ] },
            "rules": {
                "Hourly": {
                    "schedule_expression": { "@@assign": "cron(0 5/1 ? * * *)" },
                    "start_backup_window_minutes": { "@@assign": "480" },
                    "complete_backup_window_minutes": { "@@assign": "10080" },
                    "lifecycle": {
                        "move_to_cold_storage_after_days": { "@@assign": "180" },
                        "delete_after_days": { "@@assign": "270" }
                    },
                    "target_backup_vault_name": { "@@assign": "FortKnox" },
                    "copy_actions": {
                        "arn:aws:backup:us-east-1:$account:backup-vault:secondary-vault": {
                            "lifecycle": {
                                "move_to_cold_storage_after_days": { "@@assign": "10" },
                                "delete_after_days": { "@@assign": "100" }
                            }
                        }
                    }
                }
            },
            "selections": {
                "tags": {
                    "datatype": {
                        "iam_role_arn": { "@@assign": "arn:aws:iam::$account:role/MyIamRole" },
                        "tag_key": { "@@assign": "dataType" },
                        "tag_value": { "@@assign": [ "PII" ] }
                    }
                }
            }
        }
    }
}
```



## Solutions Archiect Scenarios:

#### **[Delegate access across AWS accounts using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html):**

Scenario:  User on master account with ability to perform actions on resource on OU accounts under Consolidated Billing.

- Steps

  - Create an IAM user(s) or role(s) in the master account.

  - In the OU account(s) generate a cross-account role with full permissions while granting access for the master account.

**Example**: A **Production** account manages live applications. Developers and testers use the **Development**      account as a sandbox to freely test applications. In each account, you store application information in Amazon S3 buckets. You manage IAM users in the **Development** account, where you have two IAM user groups: **Developers** and **Testers**. Users in both user groups have permissions to work in the Development account and access resources  there. From time to time, a developer must update the live applications in the **Production** account. The developers store these applications in an Amazon S3 bucket called `productionapp`. 

![image-20240111093935156](./assets/image-20240111093935156.png)

Create **UpdateApp** role in production account that can be used by the development account.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListAllMyBuckets",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation"
       ],
      "Resource": "arn:aws:s3:::productionapp"
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::productionapp/*"
    }
  ]
}
```

Modify the developer user group to allow them to switch to the UpdateApp role, by adding the following inline policy.

```json
{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Action": "sts:AssumeRole",
    "Resource": "arn:aws:iam::PRODUCTION-ACCOUNT-ID:role/UpdateApp"
  }
}
```

