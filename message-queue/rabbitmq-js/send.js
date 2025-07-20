#!/usr/bin/env node

import {connect} from 'amqplib'; 

// connect to reabbitmq server 
const connection = await connect('amqp://localhost');

const channel = await connection.createChannel(); // create channel

const queue = "hello";
const message = "Hi Mom!";

await channel.assertQueue(queue, {durable:false})

// declare queue is idempotent, msg content is byte array so encode 

channel.sendToQueue(queue, Buffer.from(message)); 


