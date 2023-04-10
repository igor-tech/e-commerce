import { Navigate, Route, Routes } from 'react-router-dom'

export const pathPages = {
  BASE_URL: '/',
  CARD: '/card/:id',
  PRODUCT: '/product',
  ERROR_PAGE: '/404',
}

export const Pages = () => {
  return (
    <>
      <Routes>
        <Route path={pathPages.BASE_URL} element={<div>Основной экран</div>} />
        <Route path={pathPages.CARD} element={<div>card</div>} />
        <Route path={pathPages.PRODUCT} element={<div>product</div>} />
        <Route path={pathPages.ERROR_PAGE} element={<div>Error</div>} />
        <Route path={'*'} element={<Navigate to={pathPages.ERROR_PAGE} />} />
      </Routes>
    </>
  )
}
