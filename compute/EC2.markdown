# EC2 - Elastic Cloud Service 

## EC2 Definition
Placement group determines how instances are placed on underlying hardware

## Instance types (TBF)
    1) On Demand :
    2) Reserved
        - Standard: Some attributes, such as instance size, can be modified during the term; however, the instance family cannot be modified. You cannot exchange a Standard Reserved Instance, only modify it.
        - Convertible: Can be exchanged during the term for another Convertible Reserved Instance with new attributes including instance family, instance type, platform, scope, or tenancy. You can also modify some attributes of a Convertible Reserved Instance.
    3) Spot Instance - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html
    4) Dedicated Host

### EC2 Spot Instance
- Spot instances can be stopped in the event of interruption, instead of been terminated. This is enabled by choosing "stop" as interruption behaviour when submitting a persistent spot request.

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

# Enhanced networking
Enhanced networking uses single root I/O virtualization (SR-IOV) to provide high-performance networking capabilities on supported instance types. SR-IOV is a method of device virtualization that provides higher I/O performance and lower CPU utilization when compared to traditional virtualized network interfaces.
Enhanced network types:
- Elastic network adapter: The Elastic Network Adapter (ENA) supports network speeds of up to 100 Gbps for supported instance types.
- Intel 82599 Virtual Function (VF) interface: supports network speeds of up to 10 Gbps

# EC2 Instance Termination
By default, EBS root volumes are deleted upon instance termination. But, EBS volumes attached to the instances persists upon instance termination. This behavious is controled by the volumne "DeleteOnTermination" attribute. 

To prevent your instance from being accidentally terminated using Amazon EC2, you can enable termination protection for the instance. The DisableApiTermination attribute controls whether the instance can be terminated using the console, CLI, or API.
The DisableApiTermination attribute does not prevent you from terminating an instance by initiating shutdown from the instance when the InstanceInitiatedShutdownBehavior attribute is set.

# EC2 Auto Scaling
- Scale out: add instances
- Scale in: remove instances

Auto Scaling components are:
- Launch configuration
    - Specifies EC2 instance size and AIM name
- Group
    - Reference the launch configuration
    - Specifies min, max and desired size of the group
    - May reference an ELB
    - Health check type
- Policy
    - Specify how much to scale in or out
    - One or more may be attached to auto scaling group.

[Default termination policy:](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html)
1. Availability zones with most instances, and at least one instance that is not protected from scale in
2. Determine which instances to terminate so as to align the remaining instances to the allocation strategy for the On-Demand or Spot Instance that is terminating.
3. Determine whether any of the instances use the oldest launch template or configuration
    - Amazon EC2 Auto Scaling terminates instances that use a launch configuration before instances that use a launch template.
4. Determine which instances are closest to the next billing hour

## Auto Scaling Cooldown
Auto scalling cooldown period is a configurable setting for your auto scalling group that ensures auto scalling does  not launch or terminate additional instances before the previous scalling activity takes effect. 

If a value for the default cooldown period is not provided, its default value is 300 seconds


## [Elastic Network Interface](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#scenarios-enis)
An elastic network interface is a logical network component in a VPC that represnets a virtual network card. It can include the following attributes:
- A primary private IPv4 address from your VPC
- One or more private secondary IPv4 private address
- One elastic IP address per private IPC4 address
- One public IPv4
- One onr more IPv6 addresses
- A MAC address
- A source/destination check flag
- A description

You CANNOT detach a primary network interface from an instance. 

![Elastic Network Interface](/images/elastic_network_interface.png)

Best practices for configuring network interfaces:
- You can attach a network interface to an instance when its running (hot attache), when its stopped (warm attach), or when the instance is being launched (cold attache)
- You can move a network interface from one instance to another, if the instances are in the same AZ and VPC but in differents subnets.


# EC2 Hibernate
When you hibernate an instance, we signal the operating system to perform hybernation (suspend-to-disk). Hibernation saves the contents from the instance memory (RAM) to your Amazon EBS root volume. We persis instances Amazon EBS root volume and any type Amazon EBS data volumes. 

When you start your instance:
- The Amazon EBS root volume is restored to its previous state
- The RAM contents are reloaded
- The processes that were previously running on the instance are resumed
- Previously attached data volumes are reattached and the instance retains its instance ID.

Hibernation prerequisites:
- Supported instance families - C3, C4, C5, M3, M4, M5, R3, R4, R5, and T2.
- Instance RAM size - must be less than 150 GB.
- Instance size - not supported for bare metal instances.
- Supported AMIs (must be an HVM AMI that supports hibernation)
- Root volume type - must be an Amazon EBS volume, not an instance store volume.
- Supported Amazon EBS volume types - General Purpose SSD (gp2) or Provisioned IOPS SSD (io1).

# [Elastic Load Balancer](../high_availability/HA.markdown)

# AWS Storage

![AWS Storage](/images/aws_storage.png)


# References

1) [Spot instance interruptions](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html)