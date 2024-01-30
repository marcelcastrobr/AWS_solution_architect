# API Gateway

- Expose lambda, HTTP and AWS services as API
- Allow: 
  - API versioning, 
  - authorization, 
  - traffic management (API keys, throttles)
  - request/response transformations
  - OpenAPI spec
  - CORS (Cross-origin resource )
- Limits
  - 29 seconds timeout.
  - 10MBytes payload size
- Deploymemt in stages
- Integrations:
  - HTTP: useful for rate llimitng, caching, user authentication and API keys
  - Lambda Function: useful to expose REST API backend by AWS Lambda
  - AWS Service: 
    - Expose any AWS API through the API GW. Example: start an AWS Step function workflow, post message to SQS
    - Usefull for adding authentication, deploy publicly and rate control.
  
- Caching API responses
  - default TTL is 300 seconds (min 0s, max: 3600s)
  - caches are defined per stage
  - clients can invalidate the cache
  - cache capacity between 0.5GB to 237GB
  



## API Gateway Endpoint Types:

The three ways to deploy an API Gateway is:

- Edge-optimized (default)
  - Global clients
  - Requests routed through cloud front edget locations
  - API gateway still lives in only one region
- Regional
  - For clients within the same region
  - can manually combine with cloud front (more control over the caching strategies and distribution )
- Private
  - acessed from your VPC using interface VPN endpoint
  - use a resource policy to define access





## API Errors Type

- 4xx - client error
  - 400: bad request
  - 403: access denided, WAF filtered
  - 429: quota exceeded, throttle: across all APIs in a region.
- 5xx server error
  - 502: bad gateway
  - 503: service unavailable exception
  - 504: integration failure - e.g. edpoint request time-ou exception



## API Gateway Authentication

- IAM based access

  - used for providing access within your own infrastructure
  - pass IAM credentials in headers through SigV4

- Lambd Authorizer (formaly custom authorizer)

  - Use lambda to verify a custome OAuth/SAML/3rd party authentication

- Cognito User Pools

  - client authenticates with Cognito

  - client passes the token to API Gateway



## API Gateway - WebSocket API

WebSocket is a two-way interactive communication bcteeen user browser and server. The server can push information to the client, enabling a **stateful** application use case.

Unlike REST API, which receives and responds to requests, a WebSocket API supports two-ways communication between client apps and your backend.

WebSocket APIs are often used in real-time applications such as chat application, collaboration platforms, games and finance trading platforms.

It works with AWS services (lambda, dynamoDB) or HTTP endpoints.



![image-20240129084724727](./assets/image-20240129084724727.png)

Figure: Serverless chat app with a WebSocket API, lambda and dynamoDB from [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-chat-app.html).
