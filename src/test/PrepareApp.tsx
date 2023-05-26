import React, { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

interface IProps {
    children: ReactNode
}

function AppTest({ children }: IProps) {
    return <Router>{children}</Router>
}

export default AppTest
