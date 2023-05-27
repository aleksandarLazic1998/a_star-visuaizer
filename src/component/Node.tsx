import React from 'react'
import './Node.scss'

interface IProps {
    isStart: boolean
    isEnd: boolean
    columnPosition: number
    rowPosition: number
    isWall: boolean
}

function Node(props: IProps) {
    const { isStart, isEnd, columnPosition, rowPosition, isWall } = props

    const classes = isStart
        ? ' node--start'
        : isEnd
        ? ' node--end'
        : isWall
        ? ' node--wall'
        : ''

    return (
        <div
            id={`node-${rowPosition}-${columnPosition}`}
            className={`node${classes}`}
        >
            {isStart && 'MO Start'}
            {isEnd && 'MO End'}
        </div>
    )
}

export default Node
