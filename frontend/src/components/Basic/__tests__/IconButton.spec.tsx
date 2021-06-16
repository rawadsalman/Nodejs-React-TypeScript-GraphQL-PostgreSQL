import { render } from '@testing-library/react'
import React from 'react'
import IconButton from '../IconButton'
import { ThemeProvider } from '@emotion/react'

describe('IconButton', () => {
  it('matches Snapshot', async () => {
    const wrapper = render(
      <ThemeProvider theme={{ colors: { primary: 'red' } }}>
        <IconButton/>
      </ThemeProvider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
