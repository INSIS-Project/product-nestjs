import amqp, { Message } from 'amqplib/callback_api';

amqp.connect(process.env.AMQP_SERVER, (err: any, conn) => {
  if (err) {
    throw err; // error connecting
  }

  conn.createChannel((err, channel) => {
    if (err) {
      throw err; // error creating channel
    }

    console.log('consumer rabbitMQ : connected');
    channel.assertQueue(process.env.QUEUE_NAME, { durable: false });
    channel.consume(
      process.env.QUEUE_NAME,
      async (data: Message | null) => {
        if (data) {
          const msg = JSON.parse(data.content.toString());
          console.log(msg); // do your thing with the message
        }
      },
      { noAck: true },
    );
  });
});
