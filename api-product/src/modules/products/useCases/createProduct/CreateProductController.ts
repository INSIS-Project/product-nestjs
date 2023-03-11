import { Request, Response } from 'express';

import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  handle(request: Request, response: Response): Response {
    const { productID, sku, designation, description } = request.body;

    this.createProductUseCase.execute({ productID, sku, designation, description });

    return response.status(201).send();
  }
}

export { CreateProductController };
