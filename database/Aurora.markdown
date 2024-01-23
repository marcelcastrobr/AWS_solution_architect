# Amazon Aurora

- DB engines: postgreSQL and MySQL compatible
- Storage: up to 128TB
- 6 copies of data across 3 AZs
  - 4/6 copies for writes
  - 3/6 copies for reads
  - self healing with P2P replication
- Automated failover for master in less than 30 seconds.
- Master + up to 15 red replicas



# Aurora Endpoints

- endpoint = host address + port
- Cluster endpoint -> writer endpoint
- Custom endpoints -> set of DB instances in the Aurora cluster
  - E.g. Aurora nodes with specific instances to run analytics.



# Troubleshooting Aurora

- Performance Insights: find issues by waits, SQL statements, host and users
- CloudWatch metrics: CPU, memmory and swa usage
- Enhanced Monitoring Metrics: host level, process view, per-second medtric
- Slow query logs



## [Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html)

- Span multiple AWS regions
- Aurora global database has a primary DB in one region (write) ad up to 5 secondary DB clusters in different regions (read-only). 
- Latency under a second.
- [switchover or failover:](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html)
  - RTO can be in order of minutes
  - RPO is mesured in seconds
- Limitations:
  - primary and secondary DB cluster need same major, minor and patch level engine versions in order to perform cross-region switchovers or failovers.
- Write Forwarding
  - enables secondary DB cluster to forwards SQL write statements.

# Aurora Serverless

- For infrequent, interminttent or unpredictable load
- No capacity planning.
- Data API
  - Access DB without JDBC connection -> no persistent DB connections managements



# RDS Proxy

- ability to create an additional read-only endpoints (REad replicas)