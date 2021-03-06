# AWS Definitions

## RPO versus RTO

RPO (Recovery Point Objective): is defined as the maximum period of data loss that is acceptable in the event of a failure or incident. For example, many systems back up transaction logs every 15 minutes to allow them to minimize data loss in the event of an accidental deletion or hardware failure.



RTO (Recovery Time Objective): is defined as the maximum amount of downtime that is permitted to recover from backup and to resume processing. For large databases, in particular, it can take hours to restore from a full backup. In the event of a hardware failure, you can reduce your RTO to minutes by failing over to a secondary node. You should create a recovery plan that, at a minimum, lets you recover from a recent backup.

Question: You are running an EC2 instance which use EBS for storing its state. You take an EBS snapshot every day. When the system crashes it takes you 10 minutes to bring it up again from the snapshot. What is your RTO and RPO going to be?
- RTO will be 10 minutes, RPO will be 1 day.


## Vertical and Horizontal Scaling

Vertical scaling (Scale up and down)
- E.g. from small to Xlarge instance
- Change in the specifications of instances (more CPU, memory)

Horizontal scaling (scale in and out)
- E.g. From 1 to 10 EC2 instances
- Change the number of instances (add or remove instances as needed)


## OLTP versus OLAP
- OLTP: online transactional processing
- OLAP: online analytic processing


## Blue-Green Deployment
TBD


# AWS White Papers

1) [AWS Well-Architected Framework](https://d1.awsstatic.com/whitepapers/architecture/wellarchitected-Analytics-Lens.pdf?did=wp_card&trk=wp_card)
2) [Backup and Recovery Approaches Using AWS](https://d1.awsstatic.com/whitepapers/Storage/Backup_and_Recovery_Approaches_Using_AWS.pdf?did=wp_card&trk=wp_card)