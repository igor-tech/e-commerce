import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { RootState } from '../../app/store'

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export const useAppDispatch: () => AppDispatch = useDispatch
