
# DynamoDB Definition

1 - DynamoDB is a noSQL database.
2 - Fully managed database and supports both document and key-value data models.

# DynamoDB Basics

1 - Stored on SSD storage
2 - Spread accross 
3 - Geographically distinct data
4 - Uses B-tree primitived.

# Data Consistency

1- Eventual consistency reads (default)
- Consistency is usually reached within a second.

2- Strongly consistent reads
- Consistency read returns that reflects all writes that received a successful response prior to the read.
- The disadvantages are:
    - A strongly consistent read might not be available if there is a network delay or outage. In this case, DynamoDB may return a server error (HTTP 500).
    - Strongly consistent reads may have higher latency than eventually consistent reads.
    - Strongly consistent reads are not supported on global secondary indexes.
    - Strongly consistent reads use more throughput capacity than eventually consistent reads.
- Read operations (such as GetItem, Query, and Scan) provide a ConsistentRead parameter. If you set this parameter to true, DynamoDB uses strongly consistent reads during the operation.


# DynamoDB Pricing

[Price](https://aws.amazon.com/dynamodb/pricing/on-demand/)


# DynameDB Streams
DynamoDB Streams captures a time-ordered sequence of item-level modifications in any DynamoDB table and stores this information in a log for up to 24 hours. Applications can access this log and view the data items as they appeared before and after they were modified, in near-real time.

# DynameDB Accelerator (DAX)
Provides improvement to performance with response times in microseconds for millions of requests per second for read-heavy workloads.

DAX is a DynamoDB-compatible caching service that enables you to benefit from fast in-memory performance for demanding applications

![DAX](/images/DAX.png)

# DynamoDB  provisioned throughput capacity
When you create a new provisioned table in Amazon DynamoDB, you must specify its provisioned throughput capacity. This is the amount of read and write activity that the table can support. DynamoDB uses this information to reserve sufficient system resources to meet your throughput requirements.

# References
1) [DynamoDBStreams](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html)
2) [DynamoDB Accelerator - DAX](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.concepts.html)
