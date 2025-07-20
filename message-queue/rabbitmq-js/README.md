# RabbitMQ - JS

RabbitMQ speaks multiple protocols. This tutorial uses AMQP 0-9-1, which is an open, general-purpose protocol for messaging.

-  amqp.node API

## Make sure rabbitmq running locally first 
- homebrew
  - $ brew services start rabbitmq
- or via docker 
  - docker run -d --hostname rabbit --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management