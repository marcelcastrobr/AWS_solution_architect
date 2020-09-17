# KMS - Key Management Service

- Manages CMKs (customer master keys)
- Ideal for: S3 objects, database passwords and API keys stored in system manager parameter store
- Encrypt and decrypt data up to 4KB in size
- Pay per API call.
- Audit capability using CloudTrail.
- FIPS 140-2 Level 2 -> KMS (show evidence of tempered)
    - Level 3 is CloudHSM  


Types of CMKs (customer master keys):

![Types of CMKs](/images/cmk.png)

## Symmetric versus Asymmetric CMKs:

Symmetric:
- Same key used for encryption and decription
- AES-256
- Never leaves AWS unencrypted
- AWS service integrated with KMS used symmetric CMKs
- Import your own key materil

Asymmetric:
- Mathematically related public/private key pair.
- RSA and ECC (eliptic-curve cryptography)
- private key never leaves AWS unencrypted
- Must call KMS API to use private key
- Used outside AWS by users who can not call KMS API
- AWS services integrated with KMS do not support asymmetric CMKs.
- Sign menssages and verify signatures.


# CloudHSM (Hardware Security Module)
- Used when needed validated control
- FIPS 140-2 Level 3
- Manage your own keys
- Single tenant, multi-AZ cluster
- Works with industry-standard APIs (no AWS APIs):
    - PKC#11, 
    - Java cryptography extension (JCE) 
    - Microsoft CryptoNG (CNG)


     
