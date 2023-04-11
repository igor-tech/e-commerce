import { instance } from '../../common/constants/api/instance'

import {
  ProductType,
  RequestAddProductType,
  RequestDataLoginType,
  RequestDataRegisterType,
  ResponseGetProductsType,
  ResponseUserType,
} from './types'

export const productsAPI = {
  getProducts: (params: any) => {
    return instance.get<ResponseGetProductsType>('products', { params: { ...params } })
  },
  getProduct: (productID: string) => {
    return instance.get<ProductType>(`products/${productID}`)
  },
  changeProduct: (productID: string) => {
    return instance.put<ProductType>(`products/${productID}`)
  },
  deleteProduct: (productID: string) => {
    return instance.put<ProductType>(`products/${productID}`)
  },
  addProduct: (data: RequestAddProductType) => {
    return instance.post<ProductType>('products', data)
  },
}

export const userAPI = {
  login: (data: RequestDataLoginType) => {
    return instance.get<ResponseUserType>(`user?email=${data.email}&password=${data.password}`)
  },
  register: (data: RequestDataRegisterType) => {
    return instance.post<ResponseUserType>('user', data)
  },
  changeOrders: (userID: string, orders: ProductType[]) => {
    return instance.put<ResponseUserType>(`user/${userID}`, orders)
  },
}
