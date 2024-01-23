# Cloud Migration



The 6R: Blog: https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/

**Stages:**

- Rehosting: Lift-shift 
  - tools: AWS VM import/export, AWS server migration service
- Replatforming: 
  - moving database on premise to managed RDS on cloud. No change to database type.
-  Repurchase:
  - moving to a different product. Often move to a SaaS platform (e.g. CRM to salesforce).
- Refactoring/Re-architecting
  - Use of cloud native services (e.g. SQS, SNS, Lambda)
  - Example: move application to serverless and use AWS S3.
- Retire
  - reduce atack surface and cost by removing non-needed resources due to for example re-architecting
- Retain:
  - Do nothing for now.



