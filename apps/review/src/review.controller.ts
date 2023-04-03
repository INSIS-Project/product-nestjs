import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from 'y/common';

import { ReviewService } from './review.service';

@Controller()
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.reviewService.getHello();
  }

  @EventPattern('product_created')
  async handleProductCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.reviewService.bill(data);
    this.rmqService.ack(context);
  }
}
