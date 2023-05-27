/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'

import './PathFind.scss'
import ISpot from '../typescript/interfaces/ISpot'
import Node from './Node'
import AstarAlgorithm from './AstarAlgorithm'

const rows = 10
const columns = 25

const START_NODE_ROW = 0
const START_NODE_COLUMN = 0
const END_NODE_ROW = rows - 1
const END_NODE_COLUMN = columns - 1

function PathFind() {
    const [Grid, setGrid] = useState<ISpot[][]>([])
    const [Path, setPath] = useState<ISpot[]>([])
    const [VisitedNodes, setVisitedNodes] = useState<ISpot[]>([])

    class Spot {
        x: number
        y: number
        isStart: boolean
        isEnd: boolean
        g: number
        f: number
        h: number
        neighbors: ISpot[]
        previous: ISpot | undefined
        isWall: boolean

        constructor(i: number, j: number) {
            this.x = i
            this.y = j
            this.isStart =
                this.x === START_NODE_ROW && this.y === START_NODE_COLUMN
            this.isEnd = this.x === END_NODE_ROW && this.y === END_NODE_COLUMN
            this.g = 0
            this.f = 0
            this.h = 0
            this.neighbors = []
            this.previous = undefined
            this.isWall = false
            if (Math.random() < 0.2) this.isWall = true
        }

        createNeighbors(grid: ISpot[][]) {
            const i = this.x
            const j = this.y
            if (i > 0) this.neighbors.push(grid[i - 1][j])
            if (i < rows - 1) this.neighbors.push(grid[i + 1][j])
            if (j > 0) this.neighbors.push(grid[i][j - 1])
            if (j < columns - 1) this.neighbors.push(grid[i][j + 1])
        }
    }

    const addNeighbors = (grid: ISpot[][]) => {
        for (let i = 0; i < rows; i += 1) {
            for (let j = 0; j < columns; j += 1) {
                grid[i][j].createNeighbors(grid)
            }
        }
    }

    const createSpot = (grid: ISpot[][]) => {
        for (let i = 0; i < rows; i += 1) {
            for (let j = 0; j < columns; j += 1) {
                grid[i][j] = new Spot(i, j)
            }
        }
    }

    const initializeGrid = () => {
        const grid = new Array(rows)

        for (let i = 0; i < rows; i += 1) {
            grid[i] = new Array(columns)
        }

        createSpot(grid)
        setGrid(grid)
        addNeighbors(grid)

        const startNode = grid[START_NODE_ROW][START_NODE_COLUMN]
        const endNode = grid[END_NODE_ROW][END_NODE_COLUMN]

        const path = AstarAlgorithm({ startNode, endNode })

        startNode.isWall = false
        endNode.isWall = false

        setPath(path.path)
        setVisitedNodes(path.visitedNodes)
    }

    useEffect(() => {
        initializeGrid()
        // eslint-disable-next-line
    }, [])

    const gridWithNode = () => (
        <div>
            {Grid.map((row, rowIndex) => (
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
    )

    const visualizeShortestPathNodes = (shortestPathNodes: ISpot[]) => {
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

    const handleVisualize = () => {
        for (let i = 0; i <= VisitedNodes.length; i += 1) {
            if (i === VisitedNodes.length) {
                setTimeout(() => {
                    visualizeShortestPathNodes(Path)
                }, i * 20)
            } else {
                setTimeout(() => {
                    const node = VisitedNodes[i]

                    const elementNode = document.getElementById(
                        `node-${node.x}-${node.y}`
                    )

                    if (elementNode) {
                        elementNode.className = 'node node--visited'
                    }
                }, i * 20)
            }
        }
    }

    return (
        <div className="path-find" data-testid="path-find">
            <button onClick={handleVisualize} type="button" tabIndex={0}>
                Visualize Node
            </button>
            {gridWithNode()}
        </div>
    )
}

export default PathFind
