/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'

import './PathFind.scss'
import ISpot from '../typescript/interfaces/ISpot'
import Node from './Node'

const rows = 10
const columns = 25

const START_NODE_ROW = 0
const START_NODE_COLUMN = 0
const END_NODE_ROW = rows - 1
const END_NODE_COLUMN = columns - 1

function PathFind() {
    const [Grid, setGrid] = useState<ISpot[][]>([])

    class Spot {
        x: number
        y: number
        isStart: boolean
        isEnd: boolean
        g: number
        f: number
        h: number

        constructor(i: number, j: number) {
            this.x = i
            this.y = j
            this.isStart =
                this.x === START_NODE_ROW && this.y === START_NODE_COLUMN
            this.isEnd = this.x === END_NODE_ROW && this.y === END_NODE_COLUMN
            this.g = 0
            this.f = 0
            this.h = 0
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
                        const { isStart, isEnd } = column

                        return (
                            <Node
                                columnPosition={columnIndex}
                                rowPosition={rowIndex}
                                key={columnIndex}
                                isStart={isStart}
                                isEnd={isEnd}
                            />
                        )
                    })}
                </div>
            ))}
        </div>
    )

    return (
        <div className="path-find" data-testid="path-find">
            {gridWithNode()}
        </div>
    )
}

export default PathFind
