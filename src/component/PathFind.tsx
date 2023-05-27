/* eslint-disable react/no-array-index-key */
import React from 'react'

import './PathFind.scss'
import Node from './Node'

import visualizeShortestPathNodes from '../utils/helpers/visualizeShortestPathNodes'
import useInitializeGrid from '../hooks/useInitializeGrid'
import { useGlobalState } from '../hooks/reduxStoreHooks'

function PathFind() {
    const { grid, path, visitedNodes } = useGlobalState((state) => state.astar)

    useInitializeGrid()

    const handleVisualize = () => {
        for (let i = 0; i <= visitedNodes.length; i += 1) {
            setTimeout(() => {
                if (i === visitedNodes.length) {
                    visualizeShortestPathNodes(path)
                } else {
                    const node = visitedNodes[i]

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

    return (
        <div className="path-find" data-testid="path-find">
            <button onClick={handleVisualize} type="button" tabIndex={0}>
                Visualize Node
            </button>
            <div>
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="row-wrapper">
                        {row.map((column, columnIndex) => {
                            const { isStart, isEnd, isWall } = column

                            return (
                                <Node
                                    columnPosition={columnIndex}
                                    rowPosition={rowIndex}
                                    key={columnIndex}
                                    isStart={isStart}
                                    isEnd={isEnd}
                                    isWall={isWall}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PathFind
