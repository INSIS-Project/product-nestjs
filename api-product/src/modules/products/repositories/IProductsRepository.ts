import { Product } from '../model/Product';

interface ICreateProductDTO {
  sku: string;
  designation: string;
  description: string;
}

interface IProductsRepository {
  findById(productID: string): Product;
  list(): Product[];
  create({ sku, designation, description }: ICreateProductDTO): void;
}

export { IProductsRepository, ICreateProductDTO };
