import { IProductsRepository } from '../../repositories/IProductsRepository';

interface IRequest {
  productID: string;
  sku: string;
  designation: string;
  description: string;
}

class CreateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  execute({ productID, sku, designation, description }: IRequest): void {
    const productAlreadyExists = this.productRepository.findById(productID);

    if (productAlreadyExists) {
      throw new Error('Product already exists!');
    }

    this.productRepository.create({ sku, designation, description });
  }
}

export { CreateProductUseCase };
