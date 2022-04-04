type CommonProps = {
  description:string,
  assets: {
    source: string
  },
  price: number,
  currencyCode: string,
}

export type ProductCardProps = CommonProps & {
  id:string,
}

export type PresentationalProps = CommonProps & {
  loading?:boolean,
  onAddToCart: () => void
}