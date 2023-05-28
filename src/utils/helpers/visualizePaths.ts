import IPathResponse from '../../typescript/interfaces/IPathResponse'
import visualizeShortestPathNodes from './visualizeShortestPathNodes'

const visualizePaths = (pathResponse: IPathResponse) => {
    for (let i = 0; i <= pathResponse.visitedNodes.length; i += 1) {
        setTimeout(() => {
            if (i === pathResponse.visitedNodes.length) {
                visualizeShortestPathNodes(pathResponse.path)
            } else {
                const node = pathResponse.visitedNodes[i]
                const elementNode = document.getElementById(
                    `node-${node.x}-${node.y}`
                )
                if (elementNode) {
                    elementNode.className = 'node node--visited'
                }
            }
        }, i * 20)
    }
}

export default visualizePaths
