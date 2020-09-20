# EMR
- It utilizes a hosted Hadoop framework running on the web-scale infrastructure of Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Simple Storage Service (Amazon S3).
- A cluster is a collection of EC2.
- Node types:
    - Master node: manages the custer. Track the status of the tasks and monitors the heathy of the cluster. Stored in /mnt/var/log.
    - Core node: at least one core node. 
    - Task node: only run tasks. Does not store data in HDFS.


    Persist the log files of the cluster:
        - You can periodicaly archive the log files stored on the master node to AWS S3. You need to do it when you first set up the cluster. 
        - 5 minutes interval.
