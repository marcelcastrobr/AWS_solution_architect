# API Gateway

Amazon API Gateway is an AWS service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale.



## API Gateway Caching
- You can enable API caching in Amazon API Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API.

- When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds.

- The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.

- Caching is charged by the hour and is not eligible for the AWS Free Tier.



## Importing APIS into API Gateway

- Able to import API definition files
- Supported protocols are OpenAPI (a.k.a [swagger](https://swagger.io/))
- You can use OpenAPI definition files to create or update an existing API.
- You can configure API gateway as a SOAL web service passthrough.
  - Legacy protocols: SOAP (Simple Object Access Protocol) -> return a response in XML format instead of JSON.
  - You can use API gateway to transform the XML response to JSON.



## Caching 

- Caches your endpoints response: reduce the number of calls made to your endpoint and can also improve the latency of requests to your API. 

- TTL default is 300 seconds

  

## Throttling 

- 10.000 request/sec per region.
- 5000 requests is the max  concurrent requests at any given time  across all APIs per region.
- 429 Error: too many requests
- 

## Resource Policies

Resource policy are json policy documents that you attach to an API to control whether a specified principal can invoke the API.

API Gateway resource policies are attached to resources

You can use it to all your API to be securely invoked by:

- Users from a specified AWS account
- Specified source IP address ranges or CIDR blocks
- Specified VPCs or VPC endpoints.



Below is an example of a resource policy that allows users in another AWS account to use an API via [Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html) (SigV4) protocols. .

```json
{
   "Version": "2012-10-17",
   "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::account-id-2:user/Alice",
                    "account-id-2"
                ]
            },
            "Action": "execute-api:Invoke",
            "Resource": [
                "execute-api:/stage/GET/pets"
            ]
        }
    ]
}
```



## API Gateway Authentication and Authorization

You can use the following mechanisms:

- Resource polices
- Standard AWS IAM roles and polices
- IAM tags
- Endpoint policies for interface VPC endpoints
- Lambda authorizers
- Amazon Cognito user pools



## References

1) [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)