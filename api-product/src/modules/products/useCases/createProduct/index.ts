import { ProductsRepository } from '../../repositories/implementations/ProductRepository';
import { CreateProductController } from './CreateProductController';
import { CreateProductUseCase } from './CreateProductUseCase';

const productsRepository = ProductsRepository.getInstance();

const createProductUseCase = new CreateProductUseCase(productsRepository);

const createProductController = new CreateProductController(createProductUseCase);

export { createProductController };
