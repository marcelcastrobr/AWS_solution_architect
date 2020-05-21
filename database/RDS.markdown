# RDS
 RDS is NOT serveless but AWS is responsible for patching operating system and DB.

 RDS backup types:
 - Automated backups:
    - Allow recovery to any point in time withn a "retention period".
    - Retention period between one and 35 days.
    - Full daily snapshot.
    - Enabled by default and backup data stored in S3.
 - Database snapshots
    - Done manually,
    - Stored even after you delete the original RDS instance. 


RDS Facts:
- Encryption at rest is supported for MySQL, Oracle, SQL server, POstegreSQL, MariaDB & Aurora.
- Encryption done usng KMS (Key Management Service)

# Multi-AZ:
- Allows you to have exact copy of your production database in another AZ.
- Multi-AZ is for Disaster Recovery.
- Multi-AZ is available in the following databases:
    - SQL server
    - Oracle,
    - MySQL server
    - PostgreSQL
    -MariaDB

# Read Replica
- It is used for scaling, not for disaster recovery.
- Must have automatic backups turned on in order to deploy a read replica.
-  You can have up to 5 read replicas copies of any database.

# When to User AWS RDS

| Use Amazon RDS| Do not use Amanzon RDS | 
| ----------- | ----------- | 
| - Complex transactions or complex queries 
   - A medium-tp-high query/write rate | - Massive read/write rates (e.g. 150L write/second) | 