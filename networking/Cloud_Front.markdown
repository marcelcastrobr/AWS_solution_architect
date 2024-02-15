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



## Only Access S3 URL through CloudFront

**OAC ( Origin Access Control)** allows CloudFront to access and serve files to your users on S3. Thus user can not use direct URL to the S3 bucket. 

Here you can allow everyone to have access to your files or restrict access through CloudFront signed URLs or signed cookies.

![image-20240213075443674](./assets/image-20240213075443674.png) 

Picture from TutorialDoJo.

Ref. [Here](https://tutorialsdojo.com/s3-pre-signed-urls-vs-cloudfront-signed-urls-vs-origin-access-identity-oai-origin-access-control-oac/)  for comparison between S3 pre-signed URLs, cloudfront signed URLs, Origin Acccess Identity (OAI) and Origin Access Control (OAC)

## CloudFront - Customization at the Edge

Two types:

- **CloudFront Functions**

  - intereact with **viewer request/response**
  - Lightweight functions written in JavaScript
  - quick time sensitive

- **Lambda@Edge**

  - Lambda function in NodeJS or python

  - less scale compared to CloudFront functions: scales to 1000s of request/response

  - interact with **viewer request/response** and origin request/response

  - Usecases:
  
    - A Lambda function can inspect cookies and rewrite URLs so that users see different versions of a site for A/B testing.
    - CloudFront can return different objects to viewers based on the device they’re using by checking the User-Agent header, which includes information about the devices. F
    - check cookies for other criteria. For example, on a retail website that  sells clothing, if you use cookies to indicate which color a user chose  for a jacket, a Lambda function can change the request so that  CloudFront returns the image of a jacket in the selected color.
    - A Lambda function can generate HTTP responses when CloudFront viewer request or origin request events occur.
    - A function can **inspect headers or  authorization tokens**, and insert a header to control access to your  content before CloudFront forwards the request to your origin.
    - A Lambda function can also make network calls to external resources to **confirm user credentials**, or fetch  additional content to customize a response.
    
    
    

Usecases:

- Manipulate HTTP requests and responses
- Implement request filtering
- User authentication&authorization
- Generate HTTP responses at the edge.
- A/B testing
- Bot mitigation at edge

![image-20240122080810267](./assets/image-20240122080810267.png)

Figure by Stephane Maarek.



## [Field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html)

CloudFront can enforce secure end-to-end connections to origin server via HTTPs.

Field level encryption adds an additional layer where you can encrypt sensitive information (up to 10 data fields) at the edge. 

CloudFront field-level encryption uses assymetric encryption (a.k.a public key encryption).

![image-20240123150510326](./assets/image-20240123150510326.png)
