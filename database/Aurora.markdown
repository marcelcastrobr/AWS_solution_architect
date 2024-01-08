# Amazon Aurora



## [Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html)

- Span multiple AWS regions
- Aurora global database has a primary DB in one region (write) ad up to 5 secondary DB clusters in different regions (read-only). 
- Latency under a second.
- [switchover or failover:](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html)
  - RTO can be in order of minutes
  - RPO is mesured in seconds
- Limitations:
  - primary and secondary DB cluster need same major, minor and patch level engine versions in order to perform cross-region switchovers or failovers.