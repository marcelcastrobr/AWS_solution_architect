# CloudTrail

AWS CloudTrail is an AWS service that helps you enable governance, compliance, and operational and risk auditing of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.

AWS KMS is integrated with CloudTrail, a service that captures API calls made by or on behalf of AWS KMS in your AWS account and delivers log files to an S3 bucket that you specify.

## CloudTrail Events
It is a record of an activity in an AWS account. Activity can be an action taken by a user, role or service.
There are two type of events, management events and data events. **By default, trails log management events and not data events.** 

- **Management events**
    
    - Provide information about management events that are performed on resources in your AWS account. Known as control plane operations:
        - Configure security (e.g. IAM attached role policy)
        - Registering devices (e.g. EC2 create default VPC)
        - Configuring rules for routing data (EC2 create subnet)
        - Setting up logging
        - It can also non-API events.
    
    - **Data events**
        
        - Provide information about the resources operations performed on or in a resource. Known also as **data plane operations**:
            - S3 object-level API activity (e.g. get object, delete object)
            - AWS lambda function execution activity.
        
        
        
        ## CloudTrail Insights:
        
        Capture unusual activity in your AWS account. 
        
        - inacurate resource provisioning
        - service limits
        - burst in AWS IAM actions
        - gaps in period of maintenance activity
        
        ![image-20240211112522194](./assets/image-20240211112522194.png)

Picture from Udemy.



## CloudTrail Facts

- CloudTrail Events Retention for 90 days.
- May take up to 15 minutes to deliver events. For fast reaction:
  - EventBridge: can be trigger for any API call in CloudTrail
  - CloudTrail delivery in Cloudwatch logs, where events are streamed.
  - CloudTrail delivery in S3 where events are delivered every 5 minutes.



## CloudTrail Integration Examples:

### Delivery to S3

![image-20240211113015847](./assets/image-20240211113015847.png)

Picture from Udemy



### Multi-Account 

![image-20240211113058950](./assets/image-20240211113058950.png)

Picture from Udemy

### Alert for API Calls

![image-20240211113132786](./assets/image-20240211113132786.png)

### Organizational Trail

![image-20240211113259415](./assets/image-20240211113259415.png)

Picture by Udemy
