# EBS - Elastic Block Storage: Definition

# EBS Types
- gp2 - General purpose (SSD)
- io1 - Provisioned IOPS (SSD)
- st1 - Throughput optimised Hard Disk drive  (HDD)
- sc1 - Cold hard disk drive (HDD)
- Magnetic

# EBS Facts
- Volumes exist on  EBS (virtual hard disk)
- Snapshots exist on S3. 
- Snapshots are incremental - only the blocks changes since last snapshot are moved to S3.
- You need to stop instance for EBS as root, we need to stop the instance.
- AMI´s (Amazon Machine Images) can be created from snapshots.
- You can change EBS volume sizes on the fly, including changing the size and storage type.
- Volumes will always be in the same availability zone as the EC2 instance.
- Attributes selectable when creating an EBS:
    - Volume type
    - IOPS
    - CMK



# EBS Comparison
![EBS](/images/EBS_comparison.png)


| Volume Type | General Purpose SSD | Provisioned IOPS SSD | Throughtput Optimized HDD | Cold HDD |  EBS Magnetic
| ----------- | ----------- | ----------- |----------- |----------- |----------- |
| API Name | gp2 | io1 | st1 | sc1 | Standard
| Description | Genreal purpose SSD | Highest performance SSD | Low cost HDD designated for frequently accessed throughput |  Lowest cost HDD volume for less frequently accessed workloads | Previous generation HDD |
| Usecase |  Most work loads | Databases | Big data  & Warehouse | File servers | workload where data is infrequently accessed.
| Max IOPS Volume | 16.000 | 64.000 | 500 | 250 | 40-200 |


# EBS Snapshots
- Backups data from your EBS volume to S3. 
- Snapshots are incremental backups.
- Snapshots are constrained to the AWS Region where they were created.