import ISpot from '../typescript/interfaces/ISpot'

interface IProps {
    startNode: ISpot
    endNode: ISpot
}

const heruistic = (neighbor: ISpot, endNode: ISpot) => {
    return Math.abs(neighbor.x - neighbor.y) + Math.abs(endNode.x - endNode.y)
}

const AstarAlgorithm = ({
    startNode,
    endNode,
}: // eslint-disable-next-line consistent-return
IProps): { path: ISpot[]; visitedNodes: ISpot[]; error: null | string } => {
    let openSet: ISpot[] = []
    const closedSet: ISpot[] = []
    const path: ISpot[] = []
    const visitedNodes: ISpot[] = []

    openSet.push(startNode)

    while (openSet.length > 0) {
        let leastIndex = 0

        for (let i = 0; i < openSet.length; i += 1) {
            if (openSet[i].f < openSet[leastIndex].f) {
                leastIndex = i
            }
        }

        const current = openSet[leastIndex]
        visitedNodes.push(current)

        if (current === endNode) {
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

        for (let i = 0; i < neighborsList.length; i += 1) {
            const neighbor = neighborsList[i]

            if (!closedSet.includes(neighbor) && !neighbor.isWall) {
                const tempGValue = neighbor.g + 1
                let newPath = false

                if (openSet.includes(neighbor)) {
                    if (tempGValue < neighbor.g) {
                        neighbor.g = tempGValue
                        newPath = true
                    }
                } else {
                    neighbor.g = tempGValue
                    newPath = true
                    openSet.push(neighbor)
                }

                if (newPath) {
                    neighbor.h = heruistic(neighbor, endNode)
                    neighbor.f = neighbor.h + neighbor.g
                    neighbor.previous = current
                }
            }
        }
    }

    return { path, visitedNodes, error: 'No Path Found!' }
}

export default AstarAlgorithm
