# Cloud Formation

Facts:
- Declarative programming language for deploying AWS resources.

- Uses templates and stacks to provision resources.

- Create, update and delete a set of resources as a single unit (stack).

- Parameters: Input from users (e.g. IP addresses, names, etc.)

- AMI ID are different in each region.

- Mapping: used to specify base AMI.

  

  

  ## CF Template structure:

  - **Metadata**: data  
  - **Parameters:** input values to CF. E.g. environment type.
  
    - CloudFormation currently supports the following parameter types:
  
      ```bash
      String – A literal string
      Number – An integer or float
      List<Number> – An array of integers or floats
      CommaDelimitedList – An array of literal strings that are separated by commas
      AWS::EC2::KeyPair::KeyName – An Amazon EC2 key pair name
      AWS::EC2::SecurityGroup::Id – A security group ID
      AWS::EC2::Subnet::Id – A subnet ID
      AWS::EC2::VPC::Id – A VPC ID
      List<AWS::EC2::VPC::Id> – An array of VPC IDs
      List<AWS::EC2::SecurityGroup::Id> – An array of security group IDs
      List<AWS::EC2::Subnet::Id> – An array of subnet IDs
      ```
  - **Conditions**: test a condition and take actions. E.g. evaluate parameters.
  - **Mappings**: e.g. AMI for a specific region
  - **Transform**: include snippets of code that is outside main template (e.g code for lambda function.)
  - **Resources**: AWS resources you are deploying. Only mandatory section of the template.
  - **Outputs**: e.g. output instance ids of EC2 deployed. 




![CloudFormation](../images/cloudformation.png)



## CF Features



### Nested Stacks

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

  

### Drift Detection

Drift detection enables you to detect whether a stack's actual  configuration differs, or has drifted, from its expected configuration.  Use CloudFormation to detect drift on an entire stack, or individual  resources within the stack. 

A resource is considered to have drifted if  any of its actual property values differ from the expected property  values. This includes if the property or resource.



### Change Set

Change sets allow you to preview how proposed changes to a stack might  impact your running resources.

For example, whether your changes will  delete or replace any critical resources, AWS CloudFormation makes the  changes to your stack only when you decide to execute the change set,  allowing you to decide whether to proceed with your proposed changes or  explore other changes by creating another change set.



### [Cross-Stack References](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/walkthrough-crossstackref.html):

The following restrictions apply to cross-stack references:

- For each AWS account, `Export` names must be unique within a region.

- 10You can't create cross-stack references across regions. You can use the intrinsic function         `Fn::ImportValue` to import only values that have been exported within the same region.

- For outputs, the value of the `Name` property of an `Export` can't use `Ref` or `GetAtt` functions that depend on a resource.

  Similarly, the `ImportValue` function can't include `Ref` or `GetAtt` functions that depend on a resource.

- You can't delete a stack if another stack references one of its outputs.

- You can't modify or remove an output value that is referenced by another stack.