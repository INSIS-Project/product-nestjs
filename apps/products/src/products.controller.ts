import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateProductRequest } from './dtos/create-product.request';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async createProduct(@Body() request: CreateProductRequest) {
    return this.productsService.createProduct(request);
  }

  @Get()
  async getProducts() {
    return this.productsService.getProducts();
  }
}
