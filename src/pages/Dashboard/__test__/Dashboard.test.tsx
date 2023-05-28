import React from 'react'
import { screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Dashboard from '../Dashboard'
import renderWithProviders from '../../../test/TestWrapper'

beforeEach(() => {
    renderWithProviders(<Dashboard />)
})

describe('App', () => {
    it('Should render App with dashboard page', () => {
        expect(screen.getByTestId('path-find')).toBeVisible()
    })
})
