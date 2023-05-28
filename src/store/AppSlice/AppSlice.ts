import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ModalTypes } from '../../typescript/types/ModalTypes'

interface IState {
    modal: ModalTypes | ''
}
const initialState: IState = {
    modal: '',
}

const appSlice = createSlice({
    name: '[app]',
    initialState,
    reducers: {
        setModalComponent: (state, action: PayloadAction<IState['modal']>) => {
            state.modal = action.payload
        },
    },
})

export const { setModalComponent } = appSlice.actions
export default appSlice
