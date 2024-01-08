
# DynamoDB Definition
- DynamoDB is a noSQL database.
- Fully managed database and supports both document and key-value data models.

# DynamoDB Basics

- Stored on SSD storage
- Spread across 3 regions
- Geographically distinct data
- Uses B-tree primitived.



### Primary Key Types:

- **Partition key**: based on unique attribute. It is part of the table primary key. It is a hash function value that is used to retrieve items from your table and allocate data across hosts for scalability and availability.
- **Composite key** (portion key + sort key): used in situation where portion key is not unique. E.g. user_Id + sort key (timestamp)



### Secondly Index

Flexible querying based on attributes that is not the primary key.

It used **global secondary index** and **local secondary indexes**. By using secondary index you can perform fast queries on specific columns in a table. 

#### **Local secondary index:**

- **Same partition key as original table but different sort key.**
- Organize the data according to an alternative sort key
- **Can only be created when creating the table and can not remove/modify later.**
- Example: 
  - partition key: userID
  - Sort key: account creation date.

#### **Global Secondary index:**

- Complete **different primary key and sort key** giving you a different view of your data.
- Example:
  - Partition key: email address
  - Sort key: last login date
- Flexible as you can add it after creating your table.



![image-20230118083004680](./assets/image-20230118083004680.png)



# Data Consistency

1- **Eventual consistency** reads (default)

- Consistency is usually reached within a second.

2- **Strongly consistent** reads

- Consistency read returns that reflects all writes that received a successful response prior to the read.
- The disadvantages are:
    - A strongly consistent read might not be available if there is a network delay or outage. In this case, DynamoDB may return a server error (HTTP 500).
    - Strongly consistent reads may have higher latency than eventually consistent reads.
    - Strongly consistent reads are not supported on global secondary indexes.
    - Strongly consistent reads use more throughput capacity than eventually consistent reads.
- Read operations (such as GetItem, Query, and Scan) provide a ConsistentRead parameter. If you set this parameter to true, DynamoDB uses strongly consistent reads during the operation.


# DynamoDB Pricing

[Price](https://aws.amazon.com/dynamodb/pricing/on-demand/)


# DynamoDB Streams
- DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information in a log for up to 24 hours. Applications can access this log and view the data items as they appeared before and after they were modified, in near-real time.
- Inserts, Update and Deletes.
- Dedicated endpoint
- By default the primary key is recorded.
- Use cases: audit or archive transactions, trigger an event based on a particular transaction, or replicate data across multiple tables.

# DynamoDB Accelerator (DAX)
Provides improvement to performance with response times in microseconds for millions of requests per second for read-heavy workloads.

DAX is a DynamoDB-compatible caching service that enables you to benefit from fast in-memory performance for demanding applications

![DAX](../images/DAX.png)



# DynamoDB  Provisioned Throughput capacity

When you create a new provisioned table in Amazon DynamoDB, you must specify its provisioned throughput capacity. This is the amount of read and write activity that the table can support. DynamoDB uses this information to reserve sufficient system resources to meet your throughput requirements.

**Write capacity units**: 1 x 1KB/sec

**Read capacity units:**

- 1 strong consistent 4KB/sec
- 2 eventually consistent 4KB/sec

 **Example**: application with read of 80 item per seconds been each item 3KB in size. What is the strongly consistent read capacity?

- 3KB / 4KB = 0.75 ~ 1
- 1 x 80 = 80 read capacity for strongly consistent

How about eventually consistent:

- 80 / 2 -> 40 read capacity for eventually consistent reads.



### ProvisionedThroughputExceededException

- Request rate is higher than read/rite capacity provisioned.
- If using AWS SDK, retry will be done automatically
- If not using AWS SDK, you need to either reduce frequency or implement backoff strategy (e.g. exponential backoff)



 

# Transactions

- Two underlying reads and writes ( prepare/commit)
- Operate up to 25 items or 4MBytes of data

#### Conditional Writes

- Supported for write operations (PutItem, UpdateItem and DeleteItem). 
- Conditional write succeeds only if the item attributes meet one or more expected conditions (e.g. not already item with the same primary key, item with attributes with a certain value).



# On-Demand Capacity

- Pay-per-request pricing
- Balance cost and performance
- No charge for read/write - only storage and backups
- Pay more per requests
- Can use for new product launches.
- Backup and Restore:
    - full backup at any time.
    - Zero impact on table performance
    - Consisent within seconds and retained until deleted.
- Point-in-Time-Recovery (PITR)
    - Protects against accidental writes or deletes
    - Restore to any point in the last 35 days
    - Incremental backups
    - not enabled by default
    - Latest restorable time stamp: 5 minutes

# Global Tables
- Based on dynamoDB streams
- Globaly distributed applications
- multi-region redundancy for DR (disaster recover) and HA (high availability).
- Replication latency under one second.



# Security

- encrypted at rest using KMS
- IAM policies and roles
- Site-to-site VPN
- Direct connect (DX)
- VPC endpoints



### Access Control:

- Restrict user through IAM condition (i.e. dynamodb:LeadingKeys)

```json
"Sid": "AllowAccessToOnlyItemsMatchingID",
	"Effect": "Allow",
	"Action": 
	"...."
"Condition": {
  "ForAllValues:StringEquals": {
    "dynamodb:LeadingKeys": [
      "${www.mgame.com:user_id}"
    ],
    "...."
  }
}
```



## DynamoDB Transactions

- Provide ACID (Atomic, Consistent, Isolated, Durable) consistency.
- **`TransactWriteItems`**
  - is a synchronous and idempotent write operation that groups up to 25 write actions in a single all-or-nothing operation. 
  - the aggregate size of the items in the transaction cannot exceed 4 MB. 
  - the actions are completed atomically so that either all of them succeed or none of them succeeds.




## DynamoDB Query & Scan

Query is much more efficient than scan.

### Query

- Query return all attributes for the item you select.
- **ProjectionExpression** allows you to only return the specific attributes.
- **ScanIndexForward** allows to reverse the order on query results.
- By default queries uses eventual consistency.

### Scan

- Examines every item in the table.
- Can use **ProjectExpression**  to refine scan.
- Return 1MB of data sequentialy
- Parallel scans is possible by logically dividing a table or index into segments and scan each segment in parallel. 

### Improving performance in query and scan

- Set smaller page size -> smaller operations

- Avoid scan and design table so that you can use **Query, Get and BatchGetItem APIs**.

  

## DynamoDB CLI & API Calls

- create-table
- put-item
- get-item ->  getItem API call
- update-item
- update-table
- list-tables
- scan
- describe-table
- query



## DynamoDB Backup 

It offers two built-in backup methods:

- On-demand 
- Point-in-time recovery: 

Both backups use S3, but you are not able to access the S3 bucket. If you need to backup and download locally, you will need to use either, AWS Data Pipeline, Amazon EMR or AWS Glue.





# References

1) [DynamoDBStreams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html)
2) [DynamoDB Accelerator - DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html)
3) [Service, account, and table quotas in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ServiceQuotas.html#limits-secondary-indexes)
