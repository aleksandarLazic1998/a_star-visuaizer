import Spot from '../classes/Spot'

const heuristic = (neighbor: Spot, endNode: Spot) => {
    return Math.abs(neighbor.x - neighbor.y) + Math.abs(endNode.x - endNode.y)
}

export default heuristic
