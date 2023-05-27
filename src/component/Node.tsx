import React from 'react'
import './Node.scss'

interface IProps {
    isStart: boolean
    isEnd: boolean
    columnPosition: number
    rowPosition: number
}

function Node(props: IProps) {
    const { isStart, isEnd, columnPosition, rowPosition } = props

    const classes = isStart ? ' node--start' : isEnd ? ' node--end' : ''

    return (
        <div
            className={`node${classes} ${`node-${rowPosition}-${columnPosition}`}`}
        >
            {isStart && 'MO Start'}
            {isEnd && 'MO End'}
        </div>
    )
}

export default Node
