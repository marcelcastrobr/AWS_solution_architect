# EC2 - Elastic Cloud Service 

## EC2 Definition
Placement group determines how instances are placed on underlying hardware

## Instance types (TBF)
    1) On Demand :
    2) Reserved
    3) Spot Instance - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html
    4) Dedicated Host
    - 

## EC2 Facts

## EC2 PLacement Groups

### EC2 PLacement Groups Types

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


### EC2 PLacement Groups Facts
- Placement group name must be unique within your AWS account for the region.
- Placement groups cannot be merged

- Only certain types of instances can be launched in a placement group (compute  optimized, GPU, Memory optimized, Storage optimized)
- You cannot merge placement groups
- You can move or remove an instance to a placement group using the AWS CLI and AWS SDK, but cannot do it via console.



# EC2 Auto Scaling
- Scale out: add instances
- Scale in: remove instances

[Default termination policy:](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html)
1. Availability zones with most instances, and at least one instance that is not protected from scale in
2. Determine which instances to terminate so as to align the remaining instances to the allocation strategy for the On-Demand or Spot Instance that is terminating.
3. Determine whether any of the instances use the oldest launch template or configuration
    - Amazon EC2 Auto Scaling terminates instances that use a launch configuration before instances that use a launch template.
4. Determine which instances are closest to the next billing hour

## Auto Scaling Cooldown
Auto scalling cooldown period is a configurable setting for your auto scalling group that ensures auto scalling does  not launch or terminate additional instances before the previous scalling activity tajes effect. 

If a value for the default cooldown period is not provided, its default value is 300 seconds



# [Elastic Load Balancer](../high_availability/HA.markdown)

# AWS Storage

![AWS Storage](/images/aws_storage.png)

## [EBS - Elastic Block Storage](https://github.com/marcelcastrobr/AWS_solution_architect/blob/master/EBS.markdown)

## [EFS - Elastic File System](https://github.com/marcelcastrobr/AWS_solution_architect/blob/master/EFS.markdown)

## [S3 - Simple Storage Service](https://github.com/marcelcastrobr/AWS_solution_architect/blob/master/S3.markdown)



