# AWS Budgets

- Create budget and send alarms when cost exceed budget

- 4 type of budgets:

  - Usage
  - Cost
  - Reservation
  - Savingsplans

- For Reserved Instances (RI)

  - track utilization,
  - support EC2, elastic ache, RDS and redshift

- Budget actions through workflow approval or automatically

  - 3 actions types:
    - Apply an IAM policy to user, groups or role
    - Apply Service Control Prolicy (SCP) to an OU
    - Stop EC2 or RDS instances

  

  ## Budget Management Architecture types:

  **Centralized budget management**

  - 1 budget per member account

  - If budget reached -> Management account move member account to an "OU Restrictive" with SCP in place.

  **Decentralized budget management**

  - Budget management through cloudformation in management account