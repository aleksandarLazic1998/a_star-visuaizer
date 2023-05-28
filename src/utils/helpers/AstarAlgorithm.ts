import Spot from '../classes/Spot'
import heuristic from './heuristic'

const AstarAlgorithm = (
    startNode: Spot,
    endNode: Spot
): { path: Spot[]; visitedNodes: Spot[]; error: null | string } => {
    let openSet: Spot[] = []
    const closedSet: Spot[] = []
    const path: Spot[] = []
    const visitedNodes: Spot[] = []

    openSet.push(startNode)

    while (openSet.length > 0) {
        let lowestFScoreIndex = 0

        for (let i = 0; i < openSet.length; i += 1) {
            if (openSet[i].f < openSet[lowestFScoreIndex].f) {
                lowestFScoreIndex = i
            }
        }

        const current = openSet[lowestFScoreIndex]
        visitedNodes.push(current)

        const isPathToEndFound = current === endNode

        if (isPathToEndFound) {
            let tempValue = current

            path.push(tempValue)

            while (tempValue.previous) {
                path.push(tempValue.previous)
                tempValue = tempValue.previous
            }

            return { path, visitedNodes, error: null }
        }

        openSet = openSet.filter((nodeElements) => nodeElements !== current)

        closedSet.push(current)

        const neighborsList = current.neighbors

        // Set FScore for all neighbors
        for (let i = 0; i < neighborsList.length; i += 1) {
            const neighbor = neighborsList[i]

            const isNextSpotValid =
                !closedSet.includes(neighbor) && !neighbor.isWall

            if (isNextSpotValid) {
                const tempGValue = current.g + 1
                let newBetterPath = false

                const isPathBetterThanBefore =
                    openSet.includes(neighbor) && tempGValue < neighbor.g

                if (isPathBetterThanBefore) {
                    neighbor.g = tempGValue
                    newBetterPath = true
                } else {
                    neighbor.g = tempGValue
                    newBetterPath = true
                    openSet.push(neighbor)
                }

                if (newBetterPath) {
                    neighbor.h = heuristic(neighbor, endNode)
                    neighbor.f = neighbor.h + neighbor.g
                    neighbor.previous = current
                }
            }
        }
    }

    return { path, visitedNodes, error: 'No Path Found!' }
}

export default AstarAlgorithm
