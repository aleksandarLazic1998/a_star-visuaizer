import IPlayground from '../../typescript/interfaces/IPlayground'
import ISpot from '../../typescript/interfaces/ISpot'
import Spot from '../classes/Spot'

interface IProps extends IPlayground {
    grid: ISpot[][]
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

    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            grid[i][j] = new Spot({
                i,
                j,
                startNodeRow,
                startNodeColumn,
                endNodeRow,
                endNodeColumn,
                rows,
                columns,
            })
        }
    }
}

export default createSpot
