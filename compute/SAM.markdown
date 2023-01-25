# Serverless Application Model (SAM)

- Extension of cloud formation used to define serverless application.
- SAM CLI to package deployed code, upload to S3 and deploy application 



### sam package

Packages your application and uploads to S3

```bash
sam package \
	--template-file ./mytemplate.yaml \
	--output-template-file sam-template.yml \
	--s3-cucket s3-bucket-name
```



### sam deploy

Deploys your serverless app using CloudFormation.

```bash
sam deploy \
	--template-file sam-template.yml \
	--stack-name mystack \
	--capabilitties CAPABILITY_IAM
```



### sam template

- **Transform section** specifies one or more macros that AWS CloudFormation uses to process your template

- **Resources** declares the AWS resources that you want to include in the stack

- Transform and Resources are the only required sections!!!

  

Example of SAM application:

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: >-
  sam-app

Transform:
- AWS::Serverless-2016-10-31

Resources:
  helloFromLambdaFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/handlers/hello-from-lambda.helloFromLambdaHandler
      Runtime: nodejs12.x
      Architectures:
        - x86_64
      MemorySize: 128
      Timeout: 100
      Description: A Lambda function that returns a static string.
      Policies:
        - AWSLambdaBasicExecutionRole

```

