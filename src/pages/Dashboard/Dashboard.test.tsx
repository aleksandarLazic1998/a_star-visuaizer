import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import AppTest from '../../test/PrepareApp'
import Dashboard from './Dashboard'

describe('App', () => {
    it('Should render App with dashboard page', () => {
        render(
            <AppTest>
                <Dashboard />
            </AppTest>
        )
        expect(screen.getByTestId('path-find')).toBeVisible()
    })
})
