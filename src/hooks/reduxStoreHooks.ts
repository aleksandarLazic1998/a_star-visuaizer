import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../typescript/types/appDispatch'
import { RootState } from '../typescript/types/rootState'

export const useSetGlobalState = () => useDispatch<AppDispatch>()
export const useGlobalState: TypedUseSelectorHook<RootState> = useSelector
