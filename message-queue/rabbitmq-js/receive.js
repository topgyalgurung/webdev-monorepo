
import {connect} from 'amqplib'; 

// connect to reabbitmq server 
const connection = await connect('amqp://localhost');
const channel = await connection.createChannel(); // create channel
const queue = "messages";

await channel.assertQueue(queue, {durable:false});

channel.consume(queue,(msg) =>{
  console.log(`[x] Received ${msg.content.toString()}`)
});

await channel.assertExchange('logs', 'fanout', {durable:false})

await channel.bindQueue(queue, 'logs');

channel.publish('logs', '', Buffer.from('Hi Mom'))