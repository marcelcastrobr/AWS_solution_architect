# SQS - Standard Queue System

## SQS Facts
- SQS is pull-based service, and support messages up to 256KB.
- Messages can be kept in the queue from 1 minute to 14 days; default is 4 days.
- You can retrieve maximum [10 messages](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-using-receive-delete-message.html) from SQS queue.
- SQS Short Polling: 
    - Returns message from queue imediately, even if the message queue is empty.
    - Short polling occurs when the WaitTimeSeconds parameter of a ReceiveMessage request is set to 0.
- SQS Long Polling: 
    - Does not return a response until a message arrives in the message queue, or the long poll times out.
    - When the wait time for the ReceiveMessage API action is greater than 0, long polling is in effect.
    - The maximum long polling wait time is 20 seconds.

## SQS Types:



### SQS Standard Queue
- More than one message might be delivered out of order.
- Best effort ordering

### SQS FIFO Queue
- First in first out delivery
- Exactly once processing: message is delivered once and remains available until a consumer processes and deletes it (no dupplicates introduced).
- Support message groups, allowing multiple ordered message groups within a single queue.
- FIFO queues are limited to 300 transaction per seconds



## [SQS Delay Queue:](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-delay-queues.html)

- Able to postpone delivery of new messages to a queue for a number of seconds (900 sec is maximum - 15 minutes).

- Only affect delay of newly arrived messages in the queue.

- Normally used in a large distributed applications.

  

## [Visibility timeout](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html)

Visibility timeout is the amount of time that the message is invisible in he SQS queue after a reader picks up the message.
- Visibility timeout maximum is 12 hours (default is 30 seconds).
- You can shorten or extend a message's visibility by specifying a new timeout value using the ChangeMessageVisibility action.

AWS SQS messages has three basic states:
1. stored: message sent to a queue by a producer.
2. flight: message received from the queue by a consumer.
    - Maximum inflight message for standard queue is 120.000 and 20.000 for FIFO queues.
3. deleted: message deleted from the queue.

![image-20230122112605079](./assets/image-20230122112605079.png)

## Best Practise:

- Manage large SQS with s3
  - Messages of size 256KB up to 2GB in size
  - Use SQS Extended Client Library for java to manage them.
