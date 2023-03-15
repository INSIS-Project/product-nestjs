import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  productID: string;

  @IsString()
  sku: string;

  @IsString()
  designation: string;

  @IsString()
  description: string;
}
