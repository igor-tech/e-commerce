import { AnyAction, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { productReducer } from '../features/Products/products-slice'

const rootReducer = combineReducers({
  main: productReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

//@ts-ignore
window.store = store
