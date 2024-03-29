import Spot from '../classes/Spot'

const visualizeShortestPathNodes = (shortestPathNodes: Spot[]) => {
    for (let i = 0; i < shortestPathNodes.length; i += 1) {
        setTimeout(() => {
            const node = shortestPathNodes[i]
            const elementNode = document.getElementById(
                `node-${node.x}-${node.y}`
            )

            if (elementNode) {
                elementNode.className = 'node node--shortest'
            }
        }, i * 10)
    }
}
export default visualizeShortestPathNodes
