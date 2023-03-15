import { NestFactory } from '@nestjs/core';
import { RmqService } from 'y/common/rmq/rmq.service';

import { ReviewModule } from './review.module';

async function bootstrap() {
  const app = await NestFactory.create(ReviewModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('REVIEW'));
  await app.startAllMicroservices();
}
bootstrap();
