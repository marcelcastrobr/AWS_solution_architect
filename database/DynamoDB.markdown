
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


