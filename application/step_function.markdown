# Step Functions



Provide a visual interface for serverless applications, running application as a set of steps.

Example of step function for building a web server in s3 is [here](https://spec-req.sales.aws.a2z.com/request/ba38486c-4bfd-4526-9fc8-e5ad17bdd36d).



## Workflows:

- ### Standard workflow: 

  - **Long-running**: can run **up to a year**. Full execution history is available for up to 90 days after completion.
    - **At-Most-Once Model**: task not executed more than once.
    - Good for **non-idempotent** actions: only want to be processed once (e.g. payments)

- ### Express workflows:

  - Short lived for **up to 5 minutes.** Great for high-volume, event-processing-type workloads
  - **At-Least-Once model**: might run more than once.
  - Good for **idempotent** actions: e.g. identical request can be made once or several times in a row with no additional side effects (e.g. reading data from a database or s3 bucket)
  - **Types**:
    - **Synchronous**: waits until the completion of the workflow and return result. 
      - Great for operations that are performed **once at a time**. Workflow need to be completed before next step.
    - **Asynchronous**: Confirm that workflow started and result can be found on cloud watch logs. Great for services that do not depend on the completion and result of workflow. E.g. message system.

