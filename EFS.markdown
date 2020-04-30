# EFS - Elastic File System

## EFS Definition
EFS is a fully managed file storage service for AWS EC2.

## EFS Facts
- Supportts NFSv4 protocol
- Only pay for storage you use
- Data is stored accross multiple AZs within a region.
- Supports thousand of concurrent connections.
- Customer are using EFS for:
    - Web serving
    - Content management
    - Database backups
    - Container storage
    - Home directories
    - Media and entertrainment workflows
    - Workflos management
    - Analytics
- Can create 125 file systems per account

## EFS Security Mechanisms
- Control network traffic to and from file system by using VPCs security groups and network ACLs.
- Control file and directories by using POSIX permissions.
- Control administrative access (API access) to file system by using AWS IAM (Identidy and Access Management).
    - EFS supports action-level and resource-level permissions.

## EFS Additional resources
    - [Deep Dive on Elastic File System - 2017 AWS Online Tech Talks
](https://www.youtube.com/watch?v=NhI0g8vI5M0)

