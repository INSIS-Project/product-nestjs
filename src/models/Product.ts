export interface ProductProps {
  productID: string
  sku: string
  designation: string
  description: string
}

export class Product {
  private props: ProductProps

  public get productID(): string {
    return this.props.productID
  }

  public set productID(productID: string) {
    this.props.productID = productID
  }

  public get sku(): string {
    return this.props.sku
  }

  public set sku(sku: string) {
    this.props.sku = sku
  }

  public get designation(): string {
    return this.props.designation
  }

  public set designation(designation: string) {
    this.props.designation = designation
  }

  public get description(): string {
    return this.props.description
  }

  public set description(description: string) {
    this.props.description = description
  }

  constructor(props: ProductProps) {
    this.props = props
  }
}
