import IPlayground from '../../typescript/interfaces/IPlayground'
import Spot from '../classes/Spot'
import createSpot from './createSpot'

const initializeGrid = (props: IPlayground) => {
    const {
        rows,
        columns,
        startNodeRow,
        startNodeColumn,
        endNodeRow,
        endNodeColumn,
    } = props

    const grid: Spot[][] = new Array(rows)

    for (let i = 0; i < rows; i += 1) {
        grid[i] = new Array(columns)
    }

    const listOfWalls = createSpot({
        rows,
        columns,
        startNodeRow,
        startNodeColumn,
        endNodeRow,
        endNodeColumn,
        grid,
    })

    return { grid, listOfWalls }
}
export default initializeGrid
