import { combineReducers } from '@reduxjs/toolkit'
import apiSlice from './APISlice/rootAPISlice'
import aStarSlice from './AStarSlice/AStarSlice'
import appSlice from './AppSlice/AppSlice'

const reducers = {
    [apiSlice.reducerPath]: apiSlice.reducer,
    astar: aStarSlice.reducer,
    app: appSlice.reducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
