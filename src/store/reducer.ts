import { combineReducers } from '@reduxjs/toolkit'
import apiSlice from './APISlice/rootAPISlice'

const reducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
