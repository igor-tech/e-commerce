export type ProductType = {
  productDescription: string
  productName: string
  productPhoto: string[]
  productID: string
  productPrice: number
  productRating: number
}
export type ResponseUserType = {
  username: string
  orders: ProductType[] | null
  email: string
  password: string
}
export type ResponseGetProductsType = ProductType[]
export type RequestDataLoginType = {
  email: string
  password: string
}
export type RequestDataRegisterType = RequestDataLoginType & {
  username: string
}
export type RequestAddProductType = Omit<ProductType, 'productID' | 'id'>
