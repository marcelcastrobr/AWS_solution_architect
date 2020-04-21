# EC2 - Elastic Cloud Service 

# EC2 Definition
Placement group determines how instances are placed on underlying hardware


# EC2 Facts

# EC2 PLacement Groups

## EC2 PLacement Groups Facts

Three types of placement groups:
- Clustered placement group:
    - instances within a single AZ (cannot spam multiple AZs.).
    - recomended for: low network latency  and high network throughput.
- Spread placement group:
    - instances that are each placed on distinct underlying hardware.
    - recommended for: application that have a small number of critical instances that should be kept seperated from each other.
    - supports a maximum of seven running instances per Availability Zone for e.g., in a region that has three AZs, then a total of 21 running instances in the group (seven per zone).
    - are not supported for Dedicated Instances or Dedicated Hosts.


- Partitioned:
    - each group divided in logical segments called partitions. EC2 ensure that each partion withing a placement group has its own set of racks.
    - can have a maximum of seven partitions per Availability Zone


## EC2 PLacement Groups Facts
- Placement group name must be unique within your AWS account for the region.
- Placement groups cannot be merged

- Only certain types of instances can be launched in a placement group (compute  optimized, GPU, Memory optimized, Storage optimized)
- You cannot merge placement groups
- You can move or remove an instance to a placement group using the AWS CLI and AWS SDK, but cannot do it via console.