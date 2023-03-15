import amqp, { Channel, Connection } from 'amqplib/callback_api';

export function RabbitProducer() {
  console.log('producer rabbitMQ : connecting');
  let theChannel: Channel;
  amqp.connect(process.env.AMQP_SERVER, async (err: any, connection: Connection) => {
    if (err) {
      throw err;
    }

    connection.createChannel((err: any, channel: Channel) => {
      if (err) {
        throw err;
      }
      theChannel = channel;
      console.log('producer rabbitMQ : connected');
    });
  });
  return (data: any) => {
    const msg = JSON.stringify(data);
    theChannel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(msg));
  };
}
