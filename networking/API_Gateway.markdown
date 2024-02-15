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
- **Lambda authorizers**: is an API Gateway feature that uses a Lambda function to control access to your API.
- Amazon Cognito user pools



## API Endpoint

Represents a hostname for an API in API GW that is deployed in a specific region.

The hostname is in the form of *{api-id}.execute-api.{region}.amazon.com*.

[Types of API endpoints](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-endpoint-types.html):

- **Edge-optimized API endpoint**
  - route request to the nearest CloudFront Point of Presence (POP)
  - Default endpoint type for API GW REST API.
  
- **Private API endpoint**
  - executed through interface VPC endpoints
  
  - isolated from public internet.
  
- **Regional API endpoint**
  - requests target to region-specific API Gateway API
  - pass all header names through as-is.



## **WebSocket API** in API Gateway

- API Gateway WebSocket APIs are bidirectional.
- WebSocket APIs are often used in real-time applications such as chat  applications, collaboration platforms, multiplayer games, and financial  trading platforms.
- You can use the `@connections` API from your backend service  to send a callback message to a connected client, get connection  information or disconnect from the client.





![image-20240215102514079](./assets/image-20240215102514079.png)

Picture by TutorialDojo

## **REST API** in API Gateway

- API Gateway REST APIs use a request/response model where a client sends a request to a service and the service responds back synchronously. 
- REST APIs support more features    than HTTP APIs, while HTTP APIs are designed with minimal features so that they can be offered at a lower    price. 



## HTTP APIs in API Gateway

- [Choosing between REST APIs and HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-vs-rest.html)
- You can use HTTP APIs to send requests to AWS Lambda functions or        to any routable HTTP endpoint.

![image-20240215103046762](./assets/image-20240215103046762.png)

![image-20240215103106970](./assets/image-20240215103106970.png)

## References

1) [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)