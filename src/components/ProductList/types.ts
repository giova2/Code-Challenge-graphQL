import { ProductCardProps } from "../ProductCard/types"

type ProductVariants = {
  variants: {
    price: number, 
    currencyCode:string,
    priceWithTax: number
  }[]
} 

type Items = ProductCardProps & ProductVariants

export type PresentationalProps = {
  items: Items[],
  totalItems: number
}