# Redshift

# Encryption
In Amazon Redshift, you can enable database encryption for your clusters to help protect data at rest. When you enable encryption for a cluster, the data blocks and system metadata are encrypted for the cluster and its snapshots.

When you modify your cluster to enable KMS encryption, Amazon Redshift automatically migrates your data to a new encrypted cluster.

Amazon Redshift uses a hierarchy of encryption keys to encrypt the database. You can use either AWS Key Management Service (AWS KMS) or a hardware security module (HSM) to manage the top-level encryption keys in this hierarchy.


# Performance
Factors that afect query performance:
- Number of nodes, processors/slices
- Node types (dense storage or dense compute nodes)
    - RA3: choose the number of nodes based on your performance requirements.
        - uses large, high-performance SSDs.
        - automatically offloads that data to Amazon S3.
    - DC2: allow you to have compute-intensive data warehouses with local SSD storage included.
        - DC2 nodes store your data locally
        - For datasets under 1TB uncompressed, we recommend DC2 node types for the best performance at the lowest price.
    - DS2: enable you to create large data warehouses using hard disk drives (HDDs).

- Data distribution:
    - Amazon Redshift uses AUTO distribution.
    - Data distribution types:
        - AUTO: optimum based on size of table
        - EVEN: The leader node distributes the rows across the slices in a round-robin fashion, regardless of the values in any particular column. EVEN distribution is appropriate when a table does not participate in joins or when there is not a clear choice between KEY distribution and ALL distribution.
        - KEY: The rows are distributed according to the values in one column. The leader node places matching values on the same node slice. If you distribute a pair of tables on the joining keys, the leader node collocates the rows on the slices according to the values in the joining columns so that matching values from the common columns are physically stored together.
        - ALL: A copy of the entire table is distributed to every node. Where EVEN distribution or KEY distribution place only a portion of a table's rows on each node, ALL distribution ensures that every row is collocated for every join that the table participates in.
- Data sort order
- Dataset size
- Concurrent operations
- Query structure 


# Redshift Spectrum
Efficiently query and retrieval of structured and semistructured data from files in AWS S3 without having to load the data into AWS Redshift tables. Processing occurs in Redshift Spectrum layer and data remains in AWS S3.

# Reference
- [Overview](https://docs.aws.amazon.com/redshift/latest/dg/welcome.html)
- [Redshift Encryption](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html)
- [Amazon Redshift best practices for designing queries](https://docs.aws.amazon.com/redshift/latest/dg/c_designing-queries-best-practices.html)
-[Redshift Spectrum](https://docs.aws.amazon.com/redshift/latest/dg/c-using-spectrum.html)


# Check:
- AQUA RA3 Redshift

Suggestion:
- Copy during ingestion:
    - Instead of using one copy for a file.
        - We should split the file in to the number of slices, to ensure that all slices are engaged equaly. Keep file in 1MB to 1GB.

- Consider using DROP TABEL or TRUNCATE instead of DELETE.
- Workload Management
    - Manual WLM and Auto WLM.

To Check:
- SQA (Shory Query Acceleration)
- Query Monitoring Rules (QMR)
- TODO: We could create different queues for different users with different priority. (e.g. BI with high prio, ETL normal and data scientist low priority)
- Amazon Redshift Advisor
- AppFlow to ingest data in Redshift



# Redshift Tasks

## Create Parquet file
~~~~sql
UNLOAD ('select * from schema.table')
    TO 's3://bucket-name/test_parquet/'
    IAM_ROLE 'arn:aws:iam::account:role/RedshiftToS3Role'
    PARQUET
    ALLOWOVERWRITE
~~~~

## Create CSV file
~~~~sql
UNLOAD ('select * from schema.table')
    TO 's3://bucket-name/test_csv/'
    IAM_ROLE 'arn:aws:iam::account:role/RedshiftToS3Role'
    FORMAT AS CSV
    HEADER
    PARALLEL OFF
    GZIP
    ALLOWOVERWRITE;
~~~~
