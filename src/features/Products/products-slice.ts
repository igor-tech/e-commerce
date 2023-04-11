import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export const { reducer: productReducer } = slice
