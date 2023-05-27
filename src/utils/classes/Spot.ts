import ISpot from '../../typescript/interfaces/ISpot'

interface IProps {
    i: number
    j: number
    startNodeRow: number
    startNodeColumn: number
    endNodeRow: number
    endNodeColumn: number
    rows: number
    columns: number
}

class Spot {
    x: number
    y: number
    isStart: boolean
    isEnd: boolean
    g: number
    f: number
    h: number
    neighbors: ISpot[]
    previous: ISpot | undefined
    isWall: boolean
    rows: number
    columns: number

    constructor({
        i,
        j,
        startNodeRow,
        startNodeColumn,
        endNodeRow,
        endNodeColumn,
        rows,
        columns,
    }: IProps) {
        this.x = i
        this.y = j
        this.isStart = this.x === startNodeRow && this.y === startNodeColumn
        this.isEnd = this.x === endNodeRow && this.y === endNodeColumn
        this.g = 0
        this.f = 0
        this.h = 0
        this.neighbors = []
        this.previous = undefined
        this.isWall = false
        this.rows = rows
        this.columns = columns

        if (Math.random() < 0.2) this.isWall = true
    }

    createNeighbors(grid: ISpot[][]) {
        const i = this.x
        const j = this.y
        if (i > 0) this.neighbors.push(grid[i - 1][j])
        if (i < this.rows - 1) this.neighbors.push(grid[i + 1][j])
        if (j > 0) this.neighbors.push(grid[i][j - 1])
        if (j < this.columns - 1) this.neighbors.push(grid[i][j + 1])
    }
}

export default Spot
