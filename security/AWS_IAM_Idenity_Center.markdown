# [AWS IAM Identiy Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html)

Sucessor to AWS Single Sign-On.

- One login for all your AWS accounts organization, bussines cloud applications, SAML 2.0 and EC2 windows instances.
- Identity providers options: 
  - built-in identity store in IAM Identity Center
  - 3rd party Active Directory, Okta, OneLogin, etc.



**How it works:**

- Login to IAM Identity Center
- IAM Identity Center get user identity from build-in identity store or 3rd party Active Directory.
- Integrated with organization, windows EC2, business cloud apps or customer SAML2.0.
- Permission Set define which user has permission to what resource (e.g. ReadOnlyAccess or FullAccess).



**Fine-grained Permission and Assignments**

- Multi-account permissions: manage access across AWS accounts
- Application Assignments: SSO access to many SAML2.0 bussiness application
- Attribute-Based Access Control (ABAC): fine-grained permissions based on users´attributes stored in IAM Identity Center Identity Store. Examples are cost center, title, locate, etc. Use case is for example to define permissions once then modify AWS access by changing the atrributes.