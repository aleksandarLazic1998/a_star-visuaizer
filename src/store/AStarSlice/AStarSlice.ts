import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import IPlayground from '../../typescript/interfaces/IPlayground'
import Spot from '../../utils/classes/Spot'

interface IState {
    playGround: IPlayground
    grid: Spot[][]
    path: Spot[]
    visitedNodes: Spot[]
    listOfWalls: Spot[]
}

const initialState: IState = {
    playGround: {
        rows: 15,
        columns: 15,
        startNodeRow: 0,
        startNodeColumn: 0,
        endNodeRow: 14,
        endNodeColumn: 14,
    },
    grid: [],
    path: [],
    visitedNodes: [],
    listOfWalls: [],
}

const aStarSlice = createSlice({
    name: '[Astar]',
    initialState,
    reducers: {
        setPlayground: (state, action: PayloadAction<IState['playGround']>) => {
            state.playGround = action.payload
        },
        setGrid: (
            state,
            action: PayloadAction<{ grid: Spot[][]; listOfWalls: Spot[] }>
        ) => {
            state.grid = action.payload.grid
            state.listOfWalls = action.payload.listOfWalls
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
    aStarSlice.actions
export default aStarSlice
