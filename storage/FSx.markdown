# Amazon FSx
It provides you two file systems to choose from:
- Amazon FSx for Windowns File Server
  - fully managed native windows file system with full support for the SMB prototocl, windows NTFS, Microsoft Active Directory (AD).
  - Storage options: SSD, HDD.
  - Data backup daily in S3.
- Amazon FSx for Lustre for High availability performance workloads.
  - usecases: High performance Computing (HPC) and machine learning.
  - When linked to an S3 bucket, an FSx for  Lustre file system transparently presents S3 objects as files and allows you to write results back to S3.
  - Deployment options:
    - **Scratch File System**: temporary storage, data is not replicated.
    - **Persistent File System**: long term storage, data replicated within same AZ.
  - Other variants are:
    - Amazon FSx for NetApp ONTAP: complatible with NFS, SMB, iSCSI protocol.
    - Amazon FSx for OpenZFS: Compatible only with NFS (v3, v4, v4.1, v4.2)



## Solutions Architecure Scenarios:

Migration from SingleAZ to MultiAZ

- Use AWS DataSync or Backup (with some downtime)

Decrease FSx Volume Size:

- Create a smaller FSx and use DataSync

Data Lazy Loading

- only the data that is actually processed is loaded.