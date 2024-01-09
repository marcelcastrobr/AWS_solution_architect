# [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

Account management service that enables you to consolidate multiple AWS accounts into an organization that you centrally manage.

Composed by:

- root organization unit (OU)
- management account (a.k.a. payer account)
- member account. Allow to have OU inside a OU.

Administration is performed by **OrganizationAccountAccessRole** (created inside the member account by the management account). Use **AssumeRole** API. 

OrganizationAccountAccessRole must be **created manually** if you invite an existing Member account.



**Features**:

- All features (default = consolidated billing + SCP):  invite accounts must approbe enabling all feaures.
- Consolidated Billing features: aggregate billing accross all account -single payment method. Used for pricing benefits.



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
- SCP **does no affect [service-linked roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html)**
- SCP mjst have an **explicit Allow**.
- Usecases:
  - restrict access to certain services
  - enforce PCI compliance by explicitly disabling services.

- SCP strategies are blocklist and allowlist
- aws:RequestRegion: used by SCP to deny a region.
- Use SCP to restric creating resources without appropriate Tags.

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

