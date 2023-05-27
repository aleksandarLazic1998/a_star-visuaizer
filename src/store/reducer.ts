import { combineReducers } from '@reduxjs/toolkit'
import apiSlice from './APISlice/rootAPISlice'
import AStarSlice from './AStarSlice/AStarSlice'

const reducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    astar: AStarSlice.reducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
