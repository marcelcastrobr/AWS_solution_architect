# KMS - Key Management Service

- Manages CMKs (customer master keys)
- Ideal for: S3 objects, database passwords and API keys stored in system manager parameter store
- Encrypt and decrypt data up to 4KB in size
- Pay per API call.
- Audit capability using CloudTrail.
- FIPS 140-2 Level 2 -> KMS
    - Level 3 is CloudHSM  


Types of CMKs (customer master keys):

![Types of CMKs](/images/cmk.png)

