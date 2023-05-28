import IPlayground from '../../typescript/interfaces/IPlayground'
import Spot from '../classes/Spot'

interface IProps extends IPlayground {
    grid: Spot[][]
}

const createSpot = (props: IProps) => {
    const {
        grid,
        rows,
        columns,
        startNodeRow,
        startNodeColumn,
        endNodeRow,
        endNodeColumn,
    } = props

    const listOfWalls: Spot[] = []

    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            const newSpot = new Spot({
                i,
                j,
                startNodeRow,
                startNodeColumn,
                endNodeRow,
                endNodeColumn,
                rows,
                columns,
            })
            if (newSpot.isWall) listOfWalls.push(newSpot)
            grid[i][j] = newSpot
        }
    }

    return listOfWalls
}

export default createSpot
