# Cloud Formation

Facts:
- Declarative programming language for deploying AWS resources.

- Uses templates and stacks to provision resources.

- Create, update and delete a set of resources as a single unit (stack).

- Parameters: Input from users (e.g. IP addresses, names, etc.)

- AMI ID are different in each region.

- Mapping: used to specify base AMI.

  

  

  ## CF Template structure:

  - Metadata: data  
  - Parameters: input values to CF. E.g. environment type.
  - Conditions: test a condition and take actions. E.g. evaluate parameters.
  - Mappings: e.g. AMI for a specific region
  - **Transform**: include snippets of code that is outside main template (e.g code for lambda function.)
  - **Resources**: AWS resources you are deploying. Only mandatory section of the template.
  - Outputs: e.g. output instance ids of EC2 deployed. 




![CloudFormation](../images/cloudformation.png)



## Nested Stacks

- Allows to re-use of cloud formation code for common use cases.

  - E.g. standard configuration for a load balancer, web server or application server.
  - Added to the resources section of the template.

  

  Example using nested stack.

  ```bash
  Resources:
  Type: AWS::CloudFormation::Stack
  Properties:
  	NotificationARNs:
  		- String
  	Parameters:
  		AWS Cloud Formation Stack Parameters
  		Tags:
  			- Resource Tag
  		TemplateURL: https://s3.amazonaws.com/../template.yml
  		TimeoutInMinutes: Integer
  ```

  