import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
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
    return this.productsRepository.create(request);
  }

  async getProducts() {
    return this.productsRepository.find({});
  }
}
