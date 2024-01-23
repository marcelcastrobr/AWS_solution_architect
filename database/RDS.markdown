# RDS
 RDS is NOT serveless but AWS is responsible for patching operating system and DB.

 RDS backup types:
 - Automated backups:
    - Allow recovery to any point in time within a "retention period".
    - Retention period between one and 35 days.
    - Full daily snapshot.
    - Enabled by default and backup data stored in S3.
 - Database snapshots
    - Done manually,
    - Stored even after you delete the original RDS instance. 


RDS Facts:
- Encryption at rest is supported for MySQL, Oracle, SQL server, POstegreSQL, MariaDB & Aurora.
- Encryption done using KMS (Key Management Service)

# Multi-AZ:
- Allows you to have exact copy of your production database in another AZ.
- Multi-AZ is for Disaster Recovery.
- Multi-AZ is available in the following databases:
    - SQL server
    - Oracle,
    - MySQL server
    - PostgreSQL
    - MariaDB
- synchronous standby replica in a different Availability Zone

Amazon RDS automatically switches to a standby replica in another Availability Zone if you have enabled Multi-AZ. Failover times are typically 60–120 seconds. The primary DB instance switches over automatically to the standby replica if any of the following conditions occur:
- An Availability Zone outage
- The primary DB instance fails
- The DB instance's server type is changed
- The operating system of the DB instance is undergoing software patching
- A manual failover of the DB instance was initiated using Reboot with failover

# Read Replica
- It is used for scaling, not for disaster recovery.
- Must have automatic backups turned on in order to deploy a read replica.
-  You can have up to 5 read replicas copies of any database.

# When to Use AWS RDS

| Use Amazon RDS| Do not use Amanzon RDS | 
| ----------- | ----------- | 
| - Complex transactions or complex queries <br> - A medium-to-high query/write rate <br/>  - No more than a single worker node/shard <br> - High durability<br/>| - Massive read/write rates (e.g. 150K write/second) <br> - Sharding (partitioning) <br/> - Simple GET/PUT requests and queries <br> - RDBMS customization<br/> | 



# RDS Security

- KMS encryption as rest for underlying EBS volume
- Transparent data encryption (TDE) for Oracle and SQL Servers
- SSL encryption to RDS in flight
- IAM authentication for MySQL, PostgreSQL and MariaDB
  - Through IAM & RDS API calls. 
  - Auth token has lifetime of 15 min.
- Authorization happens within RDS
- CloudTrail can not track queries in RDS



# RDS for Oracle

- RDS Backups for backup&restore to Amazon RDS Oracle.
- **Oracle RMAN** (Recovery Manager) for **backup&restore to non-RDS (RDS not supported)**
- Real Application Cluster (RAC)
  - RDS for Oracle does NOT support RAC
  - RAC  is working on Oracle on EC2
- RDS for Oracle supports Transparedn Data Encryption (TDE) 
- DMS works on RDS for Oracle 