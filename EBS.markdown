# EBS Definition

# EBS Types
- General purpose (SSD)
- Provisioned IOPS (SSD)
- Throughput optimised Hard Disk drive  (HDD)
- Cold hard disk drive (HDD)
- Magnetic

# EBS Comparison
![EBS](/images/EBS_comparison.png)

# Table

| Syntax | Description | dd | dd | dd | dd |



| Volume Type | General Purpose SSD | Provisioned IOPS SSD | Throughtput Optimized HDD | Cold HDD |  EBS Magnetic
| ----------- | ----------- | ----------- |----------- |----------- |----------- |
| API Name | gp2 | io1 | st1 | sc1 | Standard
| Genreal purpose SSD | Highest performance SSD | Low cost HDD designated for frequently accessed throughput |  Lowest cost HDD volume for less frequently accessed workloads | Previous generation HDD
| Most work loads | Databases | Big data  & Warehouse | File servers | workload where data is infrequently accessed.|

