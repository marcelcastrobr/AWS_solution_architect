# CloudFront
A CDN ( Content Delivery Network) service.

## Facts
- Edge locations in CloudFront are not just READ only. You can write to them.
- Objects are cached for the life of the TTL (time to leave)

- You are also able to use CloudFront to distribute private content via the use of OIA ( Origin Access Identity).

## Removing content from CloudFront
Cloudfront will continue to show views the content from the edge cache until the files expires (default TTL is 1 day, 86400 seconds).

If a file is needed to be removed right alway, you need to:
- Invalidate the file, or
- Use file versioning.



## CloudFront - EC2 or ALB as an origin

- EC2 & ALB must be public (security group to restric other access)
- Use **custom HTTP header** to increase security:
  - ALB configured to only forward requests that contain the Custom HTTP.

![image-20240122074352716](./assets/image-20240122074352716.png)

Figure by Stephane Maarek.

## CloudFront Origin Groups

- To increase high availability and do failover
- Origin Group: one primary and one secondary origin



## CloudFront Signed URL

- signed URL with expiration to control access to content
- Signed URL gnerated by API call into CloudFront as a trusted signer.



## CloudFront versus S3 Cross Region Replication

**CloudFront:**

- global edge
- files cached for TTL
- great for static content that need to be available anywhere

**S3 Cross Region Replication:**

- must setup for each region you need replication
- files are update in near real time
- read only
- great for dynamic content



## CloudFront Signed URL versus S3 Pre-Signed URL

**CloudFront Signed URL:**

- Allow access to a path, no matter the origin
- Account wide key-par (only root can manage it)
- Can filter by IP, path, date and expiration
- Can leaverage caching features



**S3 Pre-signed URL:**

- Issue a request as the person who pre-signed the URL
- Uses the IAM key of the sigining IAM principal
- Limited lifetime



## CloudFront - Customization at the Edge

Two types:

- CloudFront Functions

  - intereact with **viewer request/response**
  - Lightweight functions written in JavaScript
  - quick time sensitive

- Lambda@Edge

  - Lambda function in NodeJS or python

  - less scale compared to CloudFront functions: scales to 1000s of request/response

  - interact with **viewer request/response** and origin request/response

    

Usecases:

- Manipulate HTTP requests and responses
- Implement request filtering
- User authentication&authorization
- Generate HTTP responses at the edge.
- A/B testing
- Bot mitigation at edge

![image-20240122080810267](./assets/image-20240122080810267.png)

Figure by Stephane Maarek.



