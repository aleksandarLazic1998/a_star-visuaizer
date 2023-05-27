import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import apiSlice from './APISlice/rootAPISlice'

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
