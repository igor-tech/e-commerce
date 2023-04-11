import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const { reducer: productReducer } = slice
