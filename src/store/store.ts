import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import apiSlice from './APISlice/rootAPISlice'
import { RootState } from '../typescript/types/rootState'

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({ serializableCheck: false }).concat(
                apiSlice.middleware
            )
        },
    })
}

export default setupStore
