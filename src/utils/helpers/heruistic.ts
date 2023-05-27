import ISpot from '../../typescript/interfaces/ISpot'

const heruistic = (neighbor: ISpot, endNode: ISpot) => {
    return Math.abs(neighbor.x - neighbor.y) + Math.abs(endNode.x - endNode.y)
}

export default heruistic
