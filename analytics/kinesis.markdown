# Kinesis



## Concepts

- **Data Producer** – emits data records as they are  generated to a Kinesis data stream. 
- **Data Consumer** – retrieving data from all shards in Kinesis stream as it is generated. Most data consumers are  retrieving the most recent data in a shard, enabling real-time analytics or handling of data. 
- **Data Stream** – A logical grouping of shards. There are no bounds on the number of  shards within a data stream. A data stream will retain data for **24 hours, or up to 7 days** when extended retention is enabled.
- **Shard** – The base throughput unit of a Kinesis data stream.
  - One shard can ingest up to **1000 data records per second,** or 1MB/sec.
  - When consumers use **enhanced fan-out**, one shard provides 1MB/sec data input and 2MB/sec data output for each data consumer registered to use enhanced fan-out.
  - When consumers do **no**t use **enhanced fan-out**, a shard provides 1MB/sec of input and 2MB/sec of data output, and this  output is shared with any consumer not using enhanced fan-out.

## Facts

- Kinesis provide scalable storage for log capture and processing at real time.
- Kinesis can ingest real time data such as video, audio, application logs, website clickstreams and IoT telemetry. 

## Kinesis Data Firehose
Load data streams into AWS data stores.
It is the easiest way to reliably load stream data into data lakes, data stores and analytics tools. It can capture, transform and load streaming data into S3, Redshift, Amazon Elasticsearch service and splunk, enabling near real-time analytics.


## Kinesis Data Analytics
Analyze data streams with SQL and Java.
Used to analyzed streaming data, gain actionable insigths and respond to your bussiness and customer needs in real time. 

## Kinesis Data Streams
Capture, process and store data streams.

## Kinesis Video Streams
Capture, process and store video streams.


## Links:
- https://www.youtube.com/watch?v=-70wNNrxf6Q&feature=youtu.be
