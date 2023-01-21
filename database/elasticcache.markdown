# ElasticCache

ElasticCache is a Web service that make it easy to deploy, operate, and scale an in-memory cache in the cloud.

In-memory caching improves application performance by storing critical pieces of data in memory for low-latency access. Cached information may include the results of I/O-intensive database queries or the results of computationally-intensive calculations.

Nodes: It is a fixed-size chunk of secure, network-attached RAM.

Redis Shard:  is a subset of the cluster’s keyspace, that can include a primary node and zero or more read-replicas.


ElastiCache supports two open-source in memory cachhing engines:
- Memcached
- Redis

| Memcached | Redis |
| ----------- | ----------- | 
| - Multithreading <br> - Low maintenance <br/>  - Easy horizontal scalability with Auto Discovery | - Support for data structures <br> - Persistent <br/> - Atomic operations <br> - Pub/sub messaging <br/> - Read replicas/failover <br> - Cluster mode/sharded cluster <br/>|



## [Caching Strategies](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/Strategies.html):

- Lazy loading: loads data into cache only when necessary

- Write-through: adds or update data in the cache whenever data is written to the database.

- Adding TTL: use TTL to expire data in the cache.

  

Example of Lazy loading:

```
record_value = cache.get(record_key) 
if (record_value == NULL)
	record_value = db.query("SELECT Details FROM Records WHERE ID == {0}", record_key)
	cache.set (record_key, record_value)

```

