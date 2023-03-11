import { Product } from '../../model/Product';
import { ICreateProductDTO, IProductsRepository } from '../IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private products: Product[];

  private static INSTANCE: ProductsRepository;

  private constructor() {
    this.products = [];
  }

  public static getInstance(): ProductsRepository {
    if (!ProductsRepository.INSTANCE) {
      ProductsRepository.INSTANCE = new ProductsRepository();
    }
    return ProductsRepository.INSTANCE;
  }

  create({ sku, designation, description }: ICreateProductDTO): void {
    const product = new Product();

    Object.assign(product, {
      sku,
      description,
      designation,
    });

    this.products.push(product);
  }

  list(): Product[] {
    return this.products;
  }

  findById(productID: string): Product {
    const product = this.products.find(product => product.productID === productID);
    return product;
  }
}

export { ProductsRepository };
