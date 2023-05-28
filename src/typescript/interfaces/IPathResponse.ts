import Spot from '../../utils/classes/Spot'

interface IPathResponse {
    path: Spot[]
    visitedNodes: Spot[]
    error: string | null
}

export default IPathResponse
