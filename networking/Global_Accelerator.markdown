# Global Accelerator
It is a networking service that helps you improve availability and performance of the applications that you offer to your global users.
It routes your traffic to the optimal endpoint based on performance.
It is a self-service, pay-per-use offering, requiring no long term commitmments or minimum fees.

- Uses 2 anycast UP created for your application.

- Supports client IP address preservation **except for NLBs and EIPs (elastic IPs) endpoint.**


By using AWS Global Accelerator, you can:
- Associate the static IP addresses provided by AWS Global Accelerator to regional AWS resources or endpoints, such as Network Load Balancers, Application Load Balancers, EC2 Instances, and Elastic IP addresses. The IP addresses are anycast from AWS edge locations so they provide onboarding to the AWS global network close to your users.
- Easily move endpoints between Availability Zones or AWS Regions without needing to update your DNS configuration or change client-facing applications.
- Dial traffic up or down for a specific AWS Region by configuring a traffic dial percentage for your endpoint groups. This is especially useful for testing performance and releasing updates.
Control the proportion of traffic directed to each endpoint within an endpoint group by assigning weights across the endpoints.

Main facts:
- Lower first byte latency (round trip time for a package to go from a client to your endpoint and back again)
- Increase throughput
- Global service not tied to specific regions.
- **While ELB provides load balancing within one region, AWS Global Accelerator provides traffic management accross multiple regions**.
- Benefits:
    - instant **regional failover**
    - high availability


Differences between Global Accelerator and CloudFront
- CloudFront improves cacheable content (images and videos) and dynanic content(API acceleration and dynamic site delivery).
- Global Accelerator improves performance for a wide range of applications over TCP and UDP. Good fit for **non-HTTP use case** (e.g. gaming, IoT, voice over IP). 

