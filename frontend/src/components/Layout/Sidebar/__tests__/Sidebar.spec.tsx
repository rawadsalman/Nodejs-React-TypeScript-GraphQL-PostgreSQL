import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from '../index'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../../../../layouts/theme/index'

describe('Sidebar', () => {
  it('matches Snapshot', async () => {
    const wrapper = render(
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Sidebar />
        </Router>
      </ThemeProvider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
