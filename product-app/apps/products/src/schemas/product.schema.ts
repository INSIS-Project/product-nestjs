import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'y/common';

@Schema({ versionKey: false })
export class Product extends AbstractDocument {
  @Prop()
  name: string;

  @Prop()
  productID: string;

  @Prop()
  sku: string;

  @Prop()
  designation: string;

  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
