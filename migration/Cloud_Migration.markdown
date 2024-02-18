# Cloud Migration



The 6R: Blog: https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/

**Stages:**

- **Rehosting**: **Lift-shift** 
  - tools: AWS VM import/export, AWS server migration service
- **Replatforming**: 
  - moving database on premise to managed RDS on cloud. No change to database type.
-  **Repurchase**:
  - moving to a different product. Often move to a SaaS platform (e.g. CRM to salesforce).
- **Refactoring/Re-architecting**
  - Use of cloud native services (e.g. SQS, SNS, Lambda)
  - Example: move application to serverless and use AWS S3.
- **Retire**
  - reduce atack surface and cost by removing non-needed resources due to for example re-architecting
- **Retain**:
  - Do nothing for now.



## AWS DMS -  Data Migration Service

- Supports
  - homogeneous: Oracle to oracle
  - heterogeneous: Oracle to MySQL
- Oracle:
  - Source: support TDE for the source using BinaryReader
  - Target: support BLOBs in tables and TDE
- OpenSearch:
  - Source: does not exist
  - Target: possible to migrate from a relational database using DMS.
  - DMS **cannot** be used to replace **OpenSearch data**.



## AWS Schema Converstion Tool (SCT)

- convert schema from one engine to another: SQL to MySQL

## **AWS Application Discovery Service** 

- helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers
- two ways of performing discovery and collecting data about your on-premises servers:
  - **Agentless discovery** can be performed by deploying the AWS Agentless Discovery Connector (OVA file) through your VMware Center.
  - **Agent-based discovery** can be performed by deploying the AWS Application Discovery Agent on each of your VMs and physical servers.



## [**AWS Cloud Adoption Readiness Tool (CART)**](https://cloudreadiness.amazonaws.com/#/cart) 

- helps organizations of all sizes develop efficient and effective plans for cloud adoption and enterprise cloud migrations.
- 16-question online survey and assessment report



## **AWS Migration Hub (Migration Hub)** 

- provides a single place to **discover your existing servers**, **plan** migrations, and **track** the status of each application migration.
- 
