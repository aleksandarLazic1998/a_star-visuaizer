interface ISpot {
    x: number
    y: number
    g: number
    f: number
    h: number
    isStart: boolean
    isEnd: boolean
    neighbors: ISpot[]
    previous: ISpot | undefined
    isWall: boolean
    createNeighbors: (grid: ISpot[][]) => void
}
export default ISpot
