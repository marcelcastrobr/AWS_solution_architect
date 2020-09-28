# SQS
- Message can be kept in queue for 14 days (4 days is defaul)
- Long pooling: 
    - WaitTimeSeconds parameter need to be greater than 0.
    - Maximum long pooling time is 20 seconds.

- Visibility time:
    - Time that a message is invisible in the SQS after a readers pick up the message.
    - Maximum visibility timeout is 12 hours (default is 30 seconds).

# EBS Types
- General purpose (SSD) -> gp2
- Proisioned IOPS (SSD) -> io1
- Throughput optimized (HDD) -> st1
- Cold hard disk (HDD) -> sc1
- Magnetic

# DynamoDB
- Dynamo Streams: 24 log of table modification
- DAX - DynamoDB Accelerator: microseconds performance for read-heavy.

# RDS
- Retention period between 1 and 35 days.
- Read replicas must have automatic backup turned on in to deploy a read replica.
- Up to 5 read replicas per database.

# ElasticCache
- Memchached: multi-threading, low maintenance, horizontal scalability with auto discover.
- Redis: support data structure, persistent, atomic, pub/sub, read replicas/failover, cluster mode/sharded cluster.

# ELB
- Deregistration delay keeps serving in-flight request up to 15 min. 
- Stick sessions: client must support cookies. Enabled at target group level.

# Management
- CloudFormation: deploy AWS resource as a code (similar to Terraform).
- CloudTrail: governance, compliance, risk, audit,  etc.
- CloudWatch: monitor CPU, network and queue size. 
- TrustedAdvisor: guidance on AWS resource provisioning (cost optimization, performance, security, fault tolerance and service limits). 

# CloudFront
- TTL up to 1 day. If need to remove file, use: invalidate file or file versioning. 

# Security:
- 


TODO:
- target tracking policy
- simple scaling policy 

Cloud formation:
- Parameters: Input from users (e.g. IP addresses, names, etc.)
- AMI ID are different in each region.
- Mapping: used to specify base AMI.