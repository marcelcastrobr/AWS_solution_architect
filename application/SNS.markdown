# SNS - Simple Notification Service

- **Mobile Push feature of Amazon SNS**: can send notification directlyt to apps on mobile
- send notification to both mobile devices and desktops using:
  - Amazon Device Messaging (ADM)
  - Apple push notification service
  - Baidu cloud push
  - Google cloud message for android
  - Microsoft push notification service for windows phone
  - windows push notification service
- Direct integration or pub/sub service
  - up to 12 millions subscribers per topic
  - 100.000 topics limit
- Topic Publish (using SDK) or Direct Publish (for mobile apps SDKs)
- 



![image-20240217120028257](./assets/image-20240217120028257.png)

Picture from Udemy

![image-20240217120050717](./assets/image-20240217120050717.png)

Picure from Udemy





## SNS + SQS: FanOut

![image-20240217120324337](./assets/image-20240217120324337.png)

Picture by Udemy

- Push once in SNS and receive in all SQS queues as subscribers

- Fully decoupled - no data loss

- Ability to add mode SQS subscriber over time

  

  #### Example: S3 event to multiple queues

  ![image-20240217120527861](./assets/image-20240217120527861.png)

  Picture by Udemy.

  

#### Example: SNS to Amazon S3 through Kinesis Data Firehose

![image-20240217120626971](./assets/image-20240217120626971.png)

Picture by Udemy.



#### Example: SNS Message Filtering



![image-20240217120911563](./assets/image-20240217120911563.png)

Picture by Udemy.





