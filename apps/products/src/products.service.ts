import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { REVIEW_SERVICE } from './constants/services';
import { CreateProductRequest } from './dtos/create-product.request';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository,
    @Inject(REVIEW_SERVICE) private reviewClient: ClientProxy,
  ) {}

  async createProduct(request: CreateProductRequest) {
    const session = await this.productsRepository.startTransaction();
    try {
      const product = await this.productsRepository.create(request, {
        session,
      });
      await lastValueFrom(
        this.reviewClient.emit('product_created', {
          request,
        }),
      );
      await session.commitTransaction();
      return product;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async getProducts() {
    return this.productsRepository.find({});
  }
}
