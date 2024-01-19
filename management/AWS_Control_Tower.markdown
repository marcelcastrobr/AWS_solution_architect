# AWS Control Tower

Easy was to setup and govern a multi-account AWS environment.

Benefits are:

- Automate environment setup
- automate ongoing policy management using guardrails
- Detect policy violations and remediate them
- Monitor compliance through dashboard

AWS Control Tower runs on top of AWS Organizations.



**Account Factory**

- automates account provisioning and deployments
- enables you to create pre-approved baselines and configuration options for AWS accounts in your organization.
- Uses AWS Service Catalog to provision new AWS accounts.



**Guardrails**

- Preventive using SCPs
- Detective using AWS Config. E.g. monitor un-tagged resources.
- Guardrail levels are:
  - Mandatory: automatically enabled and enforced by AWS control tower. E.g. disallow public read access to the log archive account.
  - Strongly recommended: based on AWS best practices (optional). E.g. enable encryption for EBS volumes attached to EC2s
  - Elective: common used by enterprise (optional).

