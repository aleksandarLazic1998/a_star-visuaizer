import { useEffect } from 'react'
import {
    setGrid,
    setPath,
    setVisitedNodes,
} from '../store/AStarSlice/AStarSlice'
import AstarAlgorithm from '../utils/helpers/AstarAlgorithm'
import addNeighbors from '../utils/helpers/addNeighbors'
import createSpot from '../utils/helpers/createSpot'
import { useGlobalState, useSetGlobalState } from './reduxStoreHooks'
import ISpot from '../typescript/interfaces/ISpot'

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
        const grid: ISpot[][] = new Array(rows)

        for (let i = 0; i < rows; i += 1) {
            grid[i] = new Array(columns)
        }

        createSpot({
            rows,
            columns,
            startNodeRow,
            startNodeColumn,
            endNodeRow,
            endNodeColumn,
            grid,
        })

        dispatch(setGrid(grid))

        addNeighbors({ grid, rows, columns })

        const startNode = grid[startNodeRow][startNodeColumn]
        const endNode = grid[endNodeRow][endNodeColumn]

        const path = AstarAlgorithm({ startNode, endNode })

        startNode.isWall = false
        endNode.isWall = false

        dispatch(setPath(path.path))
        dispatch(setVisitedNodes(path.visitedNodes))
        // eslint-disable-next-line
    }, [])
}
export default useInitializeGrid
