/* eslint-disable react/no-array-index-key */
import React from 'react'

import './PathFind.scss'
import { toast } from 'react-toastify'
import Node from './Node'

import useInitializeGrid from '../hooks/useInitializeGrid'
import { useGlobalState, useSetGlobalState } from '../hooks/reduxStoreHooks'

import AstarAlgorithm from '../utils/helpers/AstarAlgorithm'
import visualizePaths from '../utils/helpers/visualizePaths'
import { setModalComponent } from '../store/AppSlice/AppSlice'

function PathFind() {
    const dispatch = useSetGlobalState()

    const { grid } = useGlobalState((state) => state.astar)

    const { startNodeRow, startNodeColumn, endNodeRow, endNodeColumn } =
        useGlobalState((state) => state.astar.playGround)

    useInitializeGrid()

    // function hasNonWallNeighbors(node: Spot): boolean {
    //     const { neighbors } = node
    //     for (let i = 0; i < neighbors.length; i += 1) {
    //         if (!neighbors[i].isWall) {
    //             return true
    //         }
    //     }
    //     return false
    // }

    const handleVisualize = () => {
        const startNode = grid[startNodeRow][startNodeColumn]
        const endNode = grid[endNodeRow][endNodeColumn]
        startNode.isWall = false
        endNode.isWall = false

        const pathResponse = AstarAlgorithm(startNode, endNode)

        let isError = false

        if (pathResponse.error) {
            toast.error(pathResponse.error)
            isError = true
        }

        // while (pathResponse.error) {
        //     let foundWallToRemove = false

        //     for (let row = 0; row < grid.length; row += 1) {
        //         for (let col = 0; col < grid[row].length; col += 1) {
        //             const node = grid[row][col]

        //             if (node.isWall && hasNonWallNeighbors(node)) {
        //                 node.isWall = false
        //                 foundWallToRemove = true
        //                 break
        //             }
        //         }

        //         if (foundWallToRemove) break
        //     }

        //     if (foundWallToRemove) {
        //         pathResponse = AstarAlgorithm(startNode, endNode)
        //     } else break
        // }

        if (!isError) visualizePaths(pathResponse)
    }

    return (
        <div className="path-find" data-testid="path-find">
            <button
                onClick={() => handleVisualize()}
                type="button"
                tabIndex={0}
            >
                Visualize Node
            </button>
            <button
                onClick={() => dispatch(setModalComponent('SETTINGS'))}
                type="button"
                tabIndex={0}
            >
                Settings
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
