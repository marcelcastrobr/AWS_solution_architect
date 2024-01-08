# CloudWatch

CloudWatch can monitor:
- CPU
- Network
- Queue size

Metrics:
- Default
- Customize

You can monitor VPN tunnels using CloudWatch. The following metrics are available for VPN tunnels:
- TunnelState: state of the tunnel (0 or 1)
- TunnelDataIn: bytes received throug the VPN tunnel
-TunnelDataOut: bytes sent through the VPN tunnel



![CloudWatch](../images/CloudWatch.png)



## Services:

![image-20220524133817567](CloudWatch.assets/image-20220524133817567.png)

(Ref. Handling Distribution - Advanced Techniques for AWS Monitoring, Metrics and Logging by CloudAcademy.)



## [Amazon CloudWatch Synthetics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries.html)

Use CloudWatch Synthetics to create canaries, which are  configurable scripts that run on a schedule, to monitor endpoints and  APIs. You could create an API canary with a GET method to determine  whether the third-party service is responding as expected. Route 53 can  track the alarm status and can failover to a secondary Region if needed.

