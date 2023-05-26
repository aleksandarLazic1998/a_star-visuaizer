import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Dashboard from './pages/Dashboard/Dashboard'
import AppTest from './test/PrepareApp'

describe('App', () => {
    it('Should render App with dashboard page', () => {
        render(
            <AppTest>
                <Dashboard />
            </AppTest>
        )
        expect(screen.getByText('Hello World')).toBeVisible()
    })
})
