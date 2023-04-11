import { Navigate, Route, Routes } from 'react-router-dom'

export const PATH = {
  CART: '/card/:id',
  PRODUCTS: '/products',
  PRODUCT: '/product',
  ERROR_PAGE: '/404',
}

export const Pages = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.PRODUCTS} />} />
        <Route path={PATH.PRODUCTS} element={<div>Основной экран</div>} />
        <Route path={PATH.CART} element={<div>cart</div>} />
        <Route path={PATH.PRODUCT} element={<div>product</div>} />
        <Route path={PATH.ERROR_PAGE} element={<div>Error</div>} />
        <Route path={'*'} element={<Navigate to={PATH.ERROR_PAGE} />} />
      </Routes>
    </>
  )
}
