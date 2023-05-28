import Spot from '../classes/Spot'

interface IProps {
    grid: Spot[][]
    rows: number
    columns: number
}

const addNeighbors = (props: IProps) => {
    const { grid, rows, columns } = props
    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            grid[i][j].createNeighbors(grid)
        }
    }
}

export default addNeighbors
