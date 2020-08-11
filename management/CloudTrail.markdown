# CloudTrail

AWS CloudTrail is an AWS service that helps you enable governance, compliance, and operational and risk auditing of your AWS account. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.

AWS KMS is integrated with CloudTrail, a service that captures API calls made by or on behalf of AWS KMS in your AWS account and delivers log files to an S3 bucket that you specify.

## CloudTrail Events
It is a record of an activity in an AWS account. Activity can be an action taken by a user, role or service.
There are two type of events, management events and data events. By defaul, trails log management events and not data events. 
    - Management events
        - Provide information about management events that are performed on resources in your AWS account. Known as control plane operations:
            - Configure security (e.g. IAM attached role policy)
            - Registering devices (e.g. EC2 create default VPC)
            - Configuring rules for routing data (EC2 create subnet)
            - Setting up logging
            - It can also non-API events.

    - Data events
        - Provide information about the resources operations performed on or in a resource. Known also as data plane operations:
            - S3 object-level API activity (e.g. get object, delete object)
            - AWS lambda function execution activity.
    
    - Insights events:
        - Capture unusual activity in your AWS account. 
