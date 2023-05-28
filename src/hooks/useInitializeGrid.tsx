import { useEffect } from 'react'
import { setGrid } from '../store/AStarSlice/AStarSlice'
import addNeighbors from '../utils/helpers/addNeighbors'
import { useGlobalState, useSetGlobalState } from './reduxStoreHooks'
import initializeGrid from '../utils/helpers/initializeGrid'

const useInitializeGrid = () => {
    const dispatch = useSetGlobalState()

    const {
        rows,
        columns,
        startNodeRow,
        startNodeColumn,
        endNodeRow,
        endNodeColumn,
    } = useGlobalState((state) => state.astar.playGround)

    useEffect(() => {
        const gridResponse = initializeGrid({
            rows,
            columns,
            startNodeRow,
            startNodeColumn,
            endNodeRow,
            endNodeColumn,
        })

        dispatch(setGrid(gridResponse))

        addNeighbors({ grid: gridResponse.grid, rows, columns })

        // eslint-disable-next-line
    }, [])
}
export default useInitializeGrid
