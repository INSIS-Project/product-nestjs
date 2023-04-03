import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ReviewService {
  private readonly logger = new Logger(ReviewService.name);

  getHello(): string {
    return 'Hello World!';
  }

  bill(data: any) {
    this.logger.log('Review...', data);
  }
}
