# SQS - Standard Queue System

## SQS Facts
- SQS is pull-based service, and support messages up to 256KB.
- Messages can be kept in the queue from 1 minute to 14 days; default is 4 days.
- Visibility timeout is the amount of time that the message is invisible in he SQS queue after a reader picks up the message.
        - Visibility timeout maximum is 12 hours.
- SQS Short Polling: 
    - Returns message from queue imediately, even if the message queue is empty.
- SQS Long Polling: 
    - Does not return a response until a message arrives in the message queue, or the long poll times out.

## SQS Types:

### SQS Standard Queue
- More than one message might be delivery out of order.
- Best effort ordering

### SQS FIFO Queue
- First in first out delivery
- Exactly once processing: message is delivered once and remains available until a consumer processes and deletes it (no dupplicates introduced).
- Support message groups, allowing multiple ordered message groups within a single queue.
- FIFO queues are limited to 300 transaction per seconds


