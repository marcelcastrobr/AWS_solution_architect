# EBS - Elastic Block Storage: Definition

# EBS Types
- General purpose (SSD)
- Provisioned IOPS (SSD)
- Throughput optimised Hard Disk drive  (HDD)
- Cold hard disk drive (HDD)
- Magnetic

# EBS Facts
- Volumes exist on  EBS (virtual hard disk)
- Snapshots exist on S3. 
- Snapshots are incremental - only the blocks changes since last snapshot are moved to S3.
- You need to stop instance for EBS as root, we need to stop the instance.
- AMI´s (Amazon Machine Images) can be created from snapshots.
- You can change EBS volume sizes on the fly, including changing the size and storage type.
- Volumes will always be in the same availability zone as the EC2 instance.



# EBS Comparison
![EBS](/images/EBS_comparison.png)

# Table

| Syntax | Description | dd | dd | dd | dd |



| Volume Type | General Purpose SSD | Provisioned IOPS SSD | Throughtput Optimized HDD | Cold HDD |  EBS Magnetic
| ----------- | ----------- | ----------- |----------- |----------- |----------- |
| API Name | gp2 | io1 | st1 | sc1 | Standard
| Description | Genreal purpose SSD | Highest performance SSD | Low cost HDD designated for frequently accessed throughput |  Lowest cost HDD volume for less frequently accessed workloads | Previous generation HDD |
| Usecase |  Most work loads | Databases | Big data  & Warehouse | File servers | workload where data is infrequently accessed.
| Max IOPS Volume | 16.000 | 64.000 | 500 | 250 | 40-200 |

