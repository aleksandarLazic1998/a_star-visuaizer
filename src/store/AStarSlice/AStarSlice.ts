import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import IPlayground from '../../typescript/interfaces/IPlayground'
import ISpot from '../../typescript/interfaces/ISpot'

interface IState {
    playGround: IPlayground
    grid: ISpot[][]
    path: ISpot[]
    visitedNodes: ISpot[]
}

const initialState: IState = {
    playGround: {
        rows: 5,
        columns: 5,
        startNodeRow: 0,
        startNodeColumn: 0,
        endNodeRow: 4,
        endNodeColumn: 4,
    },
    grid: [],
    path: [],
    visitedNodes: [],
}

const AStarSlice = createSlice({
    name: '[Astar]',
    initialState,
    reducers: {
        setPlayground: (state, action: PayloadAction<IState['playGround']>) => {
            state.playGround = action.payload
        },
        setGrid: (state, action: PayloadAction<IState['grid']>) => {
            state.grid = action.payload
        },
        setPath: (state, action: PayloadAction<IState['path']>) => {
            state.path = action.payload
        },
        setVisitedNodes: (
            state,
            action: PayloadAction<IState['visitedNodes']>
        ) => {
            state.visitedNodes = action.payload
        },
    },
})

export const { setPlayground, setGrid, setPath, setVisitedNodes } =
    AStarSlice.actions
export default AStarSlice
