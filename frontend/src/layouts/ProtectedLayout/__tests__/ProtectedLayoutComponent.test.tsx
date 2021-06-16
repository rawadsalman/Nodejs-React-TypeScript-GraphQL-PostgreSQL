import { render } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { defaultTheme } from '../../../layouts/theme/index'
import DefaultLayout from '../index'

describe('Protected Layout', () => {
  it('matches Snapshot', () => {
    const layout = render(
      <ThemeProvider theme={defaultTheme}>
        <Router initialEntries={['/']}>
          <DefaultLayout />
        </Router>
      </ThemeProvider>
    )
    expect(layout).toMatchSnapshot()
  })
})
