import { v4 as uuidV4 } from 'uuid';

export class Product {
  productID: string;
  sku: string;
  designation: string;
  description: string;

  constructor() {
    if (!this.productID) {
      this.productID = uuidV4();
    }
  }
}
